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

// async function luon return 1 Promise
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
    if (!res.ok) throw new Error('Problem getting country');

    console.log('🚀 ~ file: codingChallenge.js:51 ~ whereAmI ~ res:', res);
    // giống hệt như thế này
    // fetch(`https://restcountries.com/v2/name/${country}`).then(res => {
    //   console.log(res);
    // });

    const data = await res.json();
    console.log('🚀 ~ file: codingChallenge.js:57 ~ whereAmI ~ data:', data);
    renderCountry(data[0]);
  } catch (error) {
    console.error(error);
  }
};
btn.addEventListener('click', whereAmI);
console.log('FIRST');
