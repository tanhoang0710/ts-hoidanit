'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// const imgContainer = document.querySelector('.images');

// const wait = seconds => {
//   return new Promise(resolve => {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// const createImage = imgPath => {
//   return new Promise((resolve, reject) => {
//     const img = document.createElement('img');

//     img.src = imgPath;
//     img.addEventListener('load', () => {
//       imgContainer.append(img);
//       resolve(img);
//     });

//     img.addEventListener('error', () => {
//       reject(new Error('Image not found'));
//     });
//   });
// };

// let currentImg;

// createImage('../async-jonas/img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log('Image 1 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('../async-jonas/img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('Image 1 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => console.log(err));

const renderCountry = (data, clasName = '') => {
  const html = `<article class="country ${clasName}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
          </div>
        </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getPositon = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// async function luon return 1 Promise vì JS chưa biết sẽ return về cái gì nên kết quả của return sẽ là fullfilled của Promise
// kể cả có lỗi vẫn nhảy vào then, nếu muốn lỗi có ở catch thì phải throw
const whereAmI = async () => {
  try {
    // Geolocation
    const pos = await getPositon();
    const { latitude: lat, longitude: lng } = pos.coords;

    // Reverse feocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resGeo.ok) throw new Error('Problem getting location data');
    const dataGeo = await resGeo.json();

    // Country data
    const res = await fetch(
      `https://restcountries.com/v2/name/${dataGeo.country}`
    );
    if (!res.ok) throw new Error('Problem getting country'); // lỗi này nếu ko đc throw bên dưới catch thì dòng 113 ko nhận đc lỗi ở catch

    // giống hệt như thế này
    // fetch(`https://restcountries.com/v2/name/${country}`).then(res => {
    //   console.log(res);
    // });

    const data = await res.json();
    renderCountry(data[0]);

    return `You're in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (error) {
    console.error(error);
    // Reject promise returned async function
    throw error;
  }
};

// console.log('1: Will get location');
// btn.addEventListener('click', whereAmI);
// cách này sẽ lẫn lộn async với then catch nên ko hay, ta sẽ sử dụng IIFE
// whereAmI()
//   .then(text => {
//     console.log(`2: ${text}`);
//   })
//   .catch(err => console.log(`2: ${err.message}`))
//   .finally(() => console.log('3: Finished getting location'));

// console.log('1: Will get location');
// (async () => {
//   try {
//     const text = await whereAmI();
//     console.log(`2: ${text}`);
//   } catch (error) {
//     console.log(`2: ${error.message}`);
//   }
//   console.log('3: Finished getting location');
// })();

const getJSON = (url, errorMsg = 'Something went wrong') => {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

// const get3Countries = async (c1, c2, c3) => {
//   try {
//     // sẽ đợi nhau mà ko cần thiết
//     // const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
//     // const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
//     // const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);

//     // chạy song song với nhau
//     const data = await Promise.all([
//       getJSON(`https://restcountries.com/v2/name/${c1}`),
//       getJSON(`https://restcountries.com/v2/name/${c2}`),
//       getJSON(`https://restcountries.com/v2/name/${c3}`),
//     ]);

//     console.log(data.map(d => d[0].capital));
//   } catch (error) {
//     console.error(error);
//   }
// };

// get3Countries('portugal', 'canada', 'japan');

// Promise.race => trả về kết của chạy nhanh nhất, có Promise bị reject thì sẽ trả về luôn
(async () => {
  const res = await Promise.race([
    getJSON('https://restcountries.com/v2/name/italy'),
    getJSON('https://restcountries.com/v2/name/egypt'),
    getJSON('https://restcountries.com/v2/name/mexico'),
  ]);
  console.log('🚀 ~ file: codingChallenge.js:171 ~ res:', res[0]);
})();

const timeout = sec => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error('request took too long'));
    }, sec * 1000);
  });
};

// Nếu fetch tanzania quá 1s thì sẽ bị timeout
Promise.race([
  getJSON('https://restcountries.com/v2/name/tanzania'),
  timeout(1),
])
  .then(res => console.log(res[0]))
  .catch(err => console.log(err));

// Promise.allSetted => return all the setted promised no matter if promise is resolved or not
// diff with Promise.all is Promise.all will short circuit as soon as 1 promise reject, Promise.allSetted never short circuit

Promise.allSettled([
  Promise.resolve('succeess'),
  Promise.reject('error'),
  Promise.resolve('succeess'),
]).then(res => console.log(res));

// Promise.any => return the 1st fullfilled promise and it will ignore rejected promise

Promise.any([
  Promise.resolve('succeess'),
  Promise.reject('error'),
  Promise.resolve('succeess'),
]).then(res => console.log(res));
