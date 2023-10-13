import '../styles/InterestsComponent.scss'

function createList(...interests) {
    const menu = document.querySelector('.menu');
    const interestsContainer = document.querySelector('.interests');
  
    for (let { id, name, elemsLi } of interests) {

      const link = document.createElement('a');
      link.href = `#${id.toLowerCase()}`;
      const h1 = document.createElement('h1');
      h1.textContent = name;
      link.appendChild(h1);
      menu.appendChild(link);
  

      const interestDiv = document.createElement('div');
      interestDiv.classList.add(id); 
      const h1Interest = document.createElement('h1');
      h1Interest.textContent = name;
      h1Interest.id = id;
      interestDiv.appendChild(h1Interest);
  
      for (let elem of elemsLi) {
        const li = document.createElement('li');
        li.textContent = elem;
        interestDiv.appendChild(li);
      }
  
      interestsContainer.appendChild(interestDiv);
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

        createList(hobby, books, anime, countries, music, avto, games);
    } 
}