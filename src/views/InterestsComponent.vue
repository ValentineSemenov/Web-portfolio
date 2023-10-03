<template>
    <div class="main-wrapI">
        <div class="menu">
            <a href="#hobby"><h1>Хобби</h1></a>
            <a href="#books"><h1>Книги</h1></a>
            <a href="#anime"><h1>Аниме</h1></a>
            <a href="#countries"><h1>Страны</h1></a>
            <a href="#music"><h1>Музыка</h1></a>
            <a href="#avto"><h1>Автомобили</h1></a>
            <a href="#games"><h1>Видеоигры</h1></a>
        </div>
        <div class="interests">
            <div class="hobby">
                <h1 id="hobby">Хобби</h1>
                <li>Программирование</li>
                <li>Баскетбол</li>
                <li>Готовка</li>
                <li>Спорт</li>
            </div>
            <div class="books">
                <h1 id="books">Любимые книги</h1>
                <li>Мастер и Маргарита М. А. Булгаков</li>
                <li>Великий Гетсби Ф. Ф. Скотт</li>
                <li>Леопард  Ю. Несбё</li>
                <li>Двойник с лунной дамбы С. Симада</li>
            </div>
            <div class="anime">
                <h1 id="anime">Любимые аниме</h1>
                <li>Наруто</li>
                <li>Сага о Винленде</li>
                <li>Магическая битва</li>
                <li>Атака Титанов</li>
            </div>
            <div class="countries">
                <h1 id="countries">Список стран для посещения</h1>
                <li>Япония</li>
                <li>Корея</li>
                <li>Китай</li>
                <li>США</li>
            </div>
            <div class="music">
                <h1 id="music">Музыка</h1>
                <li>Фонк</li>
                <li>Классическая музыка</li>
                <li>Хип-хоп/рэп</li>
                <li>Альтернатива</li>
            </div>
            <div class="avto">
                <h1 id="avto">Автомобили</h1>
                <li>История автомобилей</li>
                <li>Немецкий автопром</li>
                <li>Японский автопром</li>
                <li>Formula 1</li>
            </div>
            <div class="games">
                <h1 id="games">Видеогры</h1>
                <li>Sekiro</li>
                <li>Dark Souls</li>
                <li>Ведьмак 3</li>
                <li>Resident Evil</li>
            </div>
        </div>
    </div>

</template>

<script>

    import '../styles/InterestsComponent.scss'

    export default{
        name: 'InterestsComponent' 
    }

    

</script>
