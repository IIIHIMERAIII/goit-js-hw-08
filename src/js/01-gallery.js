import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items.js';

const galleryRef = document.querySelector(".gallery");
const imgMarkup = createGallery(galleryItems)

galleryRef.insertAdjacentHTML("beforeend", imgMarkup);

function createGallery(gallerItems) {
    return gallerItems
        .map(({ preview, original, description }) => {
            return `
        <a class="gallery__item" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
        />
        </a>
            `;
        })
        .join(" ");
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
    captionDelay: 250,
});