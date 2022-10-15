// Add imports above this line
// const SimpleLightbox = require('simplelightbox');
import SimpleLightbox from 'simplelightbox';
// import SimpleLightbox from '../../node_modules/simplelightbox/dist/simple-lightbox.min.js';
import { galleryItems } from './gallery-items.js';
// Change code below this line

// Наповнюємо перелік елементів з масиву galleryItems;
const galleryRef = document.querySelector('.gallery');

const galleryItemsArr = galleryItems.map(
  ({ original, preview, description }) =>
    `<a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`
);
galleryRef.insertAdjacentHTML('afterbegin', galleryItemsArr.join(''));

// створюємо галерею SimpleLightbox
new SimpleLightbox('.gallery a', {
//  додаємо опис (alt) внизу фото 
  captionsData: 'alt',
  captionDelay: 250,
});



console.log(galleryItems);
