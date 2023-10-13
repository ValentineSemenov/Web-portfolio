import '../styles/PhotoAlbumComponent.scss';

export default {
  name: 'PhotoAlbumComponent',
  mounted() {
    createPhotoAlbum();
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

    const p = document.createElement('p');
    p.textContent = titles[i];

    cell.appendChild(img);
    cell.appendChild(p);
    currentRow.appendChild(cell);
  }
}