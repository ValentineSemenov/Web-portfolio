import '../styles/PhotoAlbumComponent.scss';
import { updatePageHistory } from './historyFunction';
import $ from 'jquery';

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

let position = 0;
let movePosition = 0;

export default {
  name: 'PhotoAlbumComponent',
  data() {
    return {
        photoAlbumElement: null,
    };
  },
  mounted() {
    this.createPhotoAlbum();
    updatePageHistory();
    const sliderItemsCount = fotos.length;
    const sliderItemWidth = $('.slider-item').width();

    $('.next').on('click', () => {
        position += 1;
        movePosition -= sliderItemWidth;
        
        this.setPosition(movePosition);
        this.checkButtons(sliderItemsCount, sliderItemWidth);
    });

    $('.prev').on('click', () => {
        position -= 1;
        movePosition += sliderItemWidth;
        
        this.setPosition(movePosition);
        this.checkButtons(sliderItemsCount, sliderItemWidth);
    });
  },
  methods: {
    setPosition(sliderItemWidth) {
        $('.slider-item').css({
            transform: `translateX(${sliderItemWidth}px)`,
            transition: 'transform 0.5s',
        });
    },
    checkButtons(sliderItemsCount, sliderItemWidth) {
        const maxPosition = (sliderItemsCount - 1) * sliderItemWidth;
        
        if (position < 0) {
            position = sliderItemsCount - 1;
            movePosition = -maxPosition;
        } else if (position >= sliderItemsCount) {
            position = 0;
            movePosition = 0;
        }
  
        this.setPosition(movePosition);
    },
    createPhotoAlbum(sliderItemWidth) {
      const modalContainer = $('.modal');
      const modalCloseElement = $('.close');
      const photoAlbumElement = $('.photo-table table tbody');
      const sliderTrack = $('.slider-track');
    
      for (let i = 0; i < fotos.length; i++) {
        if (i % 3 === 0) {
          const newRow = $('<tr>');
          photoAlbumElement.append(newRow);
        }
    

        const currentRow = photoAlbumElement.children().last();
        const cell = $('<td>');
    
        const img = $('<img>');
        img.attr('src', require(`../assets/images/${fotos[i]}`));
        img.attr('alt', titles[i]);
        img.attr('title', titles[i]);

        const sliderItem = $('<div>').addClass('slider-item');

        img.attr({
            src: require(`../assets/images/${fotos[i]}`),
            alt: titles[i],
        }).addClass('photo');

        const sliderImg = $('<img>').attr({
          src: require(`../assets/images/${fotos[i]}`),
          alt: titles[i],
      }).addClass('slider-photo');
    
        const modalImage = $('<div>');
        modalImage.addClass('modal');
        modalImage.attr('id', titles[i]);
    
        const p = $('<p>');
        p.text(titles[i]);
    
        cell.append(img);
        cell.append(p);

        img.on('click', () => {
          modalImage.css('display', 'flex');
          sliderItemWidth = $('.slider-item').width();
          position = i;
          movePosition = -(position * sliderItemWidth);

          this.setPosition(movePosition);
          modalContainer.css('display', 'block');
      });
    
      modalCloseElement.on('click', () => {
        modalContainer.css('display', 'none');
      });
    
        currentRow.append(cell);
        sliderItem.append(sliderImg);
        sliderTrack.append(sliderItem);
      }
      return photoAlbumElement;
    }
  },
};

