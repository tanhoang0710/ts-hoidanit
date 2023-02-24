'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const imgContainer = document.querySelector('.images');

const wait = seconds => {
  return new Promise(resolve => {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImage = imgPath => {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img');

    img.src = imgPath;
    img.addEventListener('load', () => {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', () => {
      reject(new Error('Image not found'));
    });
  });
};

let currentImg;

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
//     console.log('Image 2 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => console.log(err));

const loadNPause = async () => {
  try {
    let img = await createImage('../async-jonas/img/img-1.jpg');
    console.log('Image 1 loaded');
    await wait(2);
    img.style.display = 'none';
    img = await createImage('../async-jonas/img/img-2.jpg');
    console.log('Image 2 loaded');
    await wait(2);
    img.style.display = 'none';
  } catch (error) {
    console.log(error);
  }
};

// loadNPause();

// PART 2
const loadAll = async (imgArr = []) => {
  try {
    const imgs = await Promise.all(
      imgArr.map(async img => await createImage(img))
    );
    console.log(imgs);
    imgs.forEach(img => img.classList.add('parallel'));
  } catch (error) {
    console.log(error);
  }
};

loadAll([
  '../async-jonas/img/img-1.jpg',
  '../async-jonas/img/img-2.jpg',
  '../async-jonas/img/img-3.jpg',
]);
