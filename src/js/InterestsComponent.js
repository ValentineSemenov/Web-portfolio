import '../styles/InterestsComponent.scss'
import { updatePageHistory } from './historyFunction';
import $ from 'jquery';

function createList(...interests) {
    const menu = $('.menu');
    const interestsContainer = $('.interests');
  
    for (let { id, name, elemsLi } of interests) {
      const link = $('<a>');
      link.attr('href', `#${id.toLowerCase()}`);
  
      const h1 = $('<h1>');
      h1.text(name);
  
      link.append(h1);
      menu.append(link);
  
      const interestDiv = $('<div>');
      interestDiv.addClass(id);
  
      const h1Interest = $('<h1>');
      h1Interest.text(name);
      h1Interest.attr('id', id);
  
      interestDiv.append(h1Interest);
  
      for (let elem of elemsLi) {
        const li = $('<li>');
        li.text(elem);
        interestDiv.append(li);
      }
  
      interestsContainer.append(interestDiv);
    }
  }

export default{
    name: 'InterestsComponent',
    mounted(){
        const hobby = {
            id: "hobby",
            name: "Хобби",
            elemsLi: ["Программирование", "Баскетбол", "Готовка", "Спорт"],
        };
        const books = {
            id: "books",
            name: "Любимые книги",
            elemsLi: ["Мастер и Маргарита М. А. Булгаков", "Великий Гетсби Ф. Ф. Скотт", "Леопард  Ю. Несбё", "Двойник с лунной дамбы С. Симада"],
        };
        const anime = {
            id: "anime",
            name: "Аниме",
            elemsLi: ["Наруто", "Сага о Винленде", "Магическая битва", "Атака Титанов"],
        };
        const countries = {
            id: "countries",
            name: "Страны",
            elemsLi: ["Япония", "Корея", "Китай", "США"],   
        };
        const music = {
            id: "music",
            name: "Музыка",
            elemsLi: ["Фонк", "Классическая музыка", "Хип-хоп/рэп", "Альтернатива"],
        };
        const avto = {
            id: "avto",
            name: "Автомобили",
            elemsLi: ["История автомобилей", "Немецкий автопром", "Японский автопром", "Formula 1"],
        };
        const games = {
            id: "games",
            name: "Видеоигры",
            elemsLi: ["Sekiro", "Dark Souls", "Ведьмак 3", "Resident Evil"],
        };
        
        updatePageHistory();
        createList(hobby, books, anime, countries, music, avto, games);
    } 
}