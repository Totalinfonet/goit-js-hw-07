import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainerRef = document.querySelector(".gallery");

const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainerRef.insertAdjacentHTML("beforeend", galleryMarkup);

galleryContainerRef.addEventListener("click", onGalleryContainerClick);

function createGalleryMarkup(items) {
  return items
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

function onGalleryContainerClick(event) {
  event.preventDefault();
  const clickedEl = event.target;

  const isGalleryImageEl = clickedEl.classList.contains("gallery__image");

  if (!isGalleryImageEl) {
    return;
  }

  const clickedImageUrl = clickedEl.closest(".gallery__link").href;

  showModal(clickedImageUrl);
}

function showModal(url) {
  const modal = basicLightbox.create(`
    <img src="${url}" width="800" height="600">
`);

  modal.show();

  window.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      modal.close();
    }
  });
}
