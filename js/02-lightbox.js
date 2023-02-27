import { galleryItems } from "./gallery-items.js";
// Change code below this line

function buildGallery(items) {
  const galleryElement = document.querySelector(".gallery");
  const galleryMarkup = items
    .map(({ preview, original, description }) => {
      return `
      <div class="gallery__item">
      <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
      </div>
    `;
    })

    .join("");

  galleryElement.innerHTML = galleryMarkup;
}

buildGallery(galleryItems);

const galleryOne = document.querySelector(".gallery");

galleryOne.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }

  const gallery = new SimpleLightbox(`.gallery a`, {
    captionsData: "alt",
    captionDelay: 250,
  });
});
