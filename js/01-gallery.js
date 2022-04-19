import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");

const imgsMarkup = galleryList(galleryItems);
galleryRef.innerHTML = imgsMarkup;
function galleryList(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

galleryRef.addEventListener("click", onImgClick);
function onImgClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  basicLightbox
    .create(
      `<img width="1400" height="900" 
        src="${event.target.dataset.source}">`
    )
    .show();
}
