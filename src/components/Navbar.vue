
<template>
    <header class="header">
        <router-link class="logo" active-class="active" to="/">Главная страница</router-link>
        <nav class="navbar">
            
                <li><router-link active-class="active" to="/about">Обо мне</router-link></li>
                <li class="interests-dropdown">
                    <router-link active-class="active" to="/interests">Мои интересы</router-link>
                    <div class="dropdown-content">
                    </div>
                </li>
                <li><router-link active-class="active" to="/education">Учеба</router-link></li>
                <li><router-link active-class="active" to="/photo-album">Фотоальбом</router-link></li>
                <li><router-link active-class="active" to="/contact">Контакт</router-link></li>
                <li><router-link active-class="active" to="/test">Тест</router-link></li>
                <li><router-link active-class="active" to="/history">История</router-link></li>
        </nav>
        <div class="current-date">{{ currentDateTime }}</div>
    </header>
</template>

 
  <!-- Подключение файла navbar.js -->
  <script src="../js/navbar.js"></script>
  