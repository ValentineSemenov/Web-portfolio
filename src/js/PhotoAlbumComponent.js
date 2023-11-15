import '../styles/PhotoAlbumComponent.scss';
import { updatePageHistory } from './historyFunction';

export default {
  name: 'PhotoAlbumComponent',
  mounted() {
    createPhotoAlbum();
    updatePageHistory();
  },
};

export const fotos = [
  "aeth0.jpg",
  "aeth1.jpg",
  "aeth2.jpg",
  "aeth0.jpg",
  "aeth1.jpg",
  "aeth2.jpg",
  "aeth0.jpg",
  "aeth1.jpg",
  "aeth2.jpg",
  "aeth0.jpg",
  "aeth1.jpg",
  "aeth2.jpg",
  "aeth0.jpg",
  "aeth1.jpg",
  "aeth2.jpg",
];

export const titles = [
  "Photo 1",
  "Photo 2",
  "Photo 3",
  "Photo 4",
  "Photo 5",
  "Photo 6",
  "Photo 7",
  "Photo 8",
  "Photo 9",
  "Photo 10",
  "Photo 11",
  "Photo 12",
  "Photo 13",
  "Photo 14",
  "Photo 15",
];

export function createPhotoAlbum() {
  const photoAlbumElem = document.querySelector('.photo-table table tbody');

  for (let i = 0; i < fotos.length; i++) {
    if (i % 3 === 0) {
      const newRow = document.createElement('tr');
      photoAlbumElem.appendChild(newRow);
    }

    const currentRow = photoAlbumElem.lastElementChild;
    const cell = document.createElement('td');

    const img = document.createElement('img');
    img.src = require(`../assets/images/${fotos[i]}`);
    img.alt = titles[i];
    img.title = titles[i];

    const modalImage = document.createElement("div");
    
    modalImage.classList.add("modal")
    modalImage.id = titles[i];

    const closeModalImage = document.createElement("span");
    closeModalImage.classList.add("close")
    closeModalImage.innerHTML = "&times;";

    const imageContentModal = document.createElement("img");
    imageContentModal.classList.add("modal-content");
    imageContentModal.id = fotos[i];
    imageContentModal.src = require(`../assets/images/${fotos[i]}`);

    modalImage.appendChild(closeModalImage);
    modalImage.appendChild(imageContentModal);
    
    const p = document.createElement('p');
    p.textContent = titles[i];

    cell.appendChild(img);
    cell.appendChild(p);
    cell.appendChild(modalImage);

    img.addEventListener('click', () => {
        modalImage.style.display = "block";
        document.body.style.overflow = "hidden";
    });

    closeModalImage.addEventListener('click', () => {
        modalImage.style.display = "none";
        document.body.style.overflow = "auto";
    });
    currentRow.appendChild(cell);
  }
}
