import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

galleryItems.forEach((item) => {
  const galleryItem = `<div class="gallery__item">
  
  <a class="gallery__link" href="${item.original}">

    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="large-image.jpg"
      alt="${item.description}"
    />
  </a>
</div>`;

  gallery.insertAdjacentElement("beforeend", galleryItem);
});

console.log(galleryItems);
