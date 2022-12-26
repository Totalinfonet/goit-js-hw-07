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
  //   const clickedImageUrl = event.target.dataset.source;

  //   event.preventDefault();

  //   const eventTargetNodeName = event.target.nodeName;
  //   console.log(eventTargetNodeName);
  //   console.log(event);

  //   if (eventTargetNodeName !== "IMG") {
  //     return;
  //   }
  //   console.log(clickedImageUrl);
  //   return clickedImageUrl;

  event.preventDefault();
  console.log(event);

  const clickedEl = event.target;
  console.log(clickedEl);

  const isGalleryImageEl = clickedEl.classList.contains("gallery__image");
  console.log(isGalleryImageEl);

  if (!isGalleryImageEl) {
    return;
  }

  const parentImageEl = clickedEl.closest(".gallery__link");
  console.log(parentImageEl);

  const clickedImageUrl = parentImageEl.href;
  console.log(clickedImageUrl);
  return clickedImageUrl;
}
