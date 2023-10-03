
<template>
    <header class="header">
        <router-link class="logo" active-class="active" to="/">Главная страница</router-link>
        <nav class="navbar">
            <li><router-link active-class="active" to="/about">Обо мне</router-link></li>
            <li><router-link active-class="active" to="/interests">Мои интересы</router-link></li>
            <li><router-link active-class="active" to="/education">Учеба</router-link></li>
            <li><router-link active-class="active" to="/photo-album">Фотоальбом</router-link></li>
            <li><router-link active-class="active" to="/contact">Контакт</router-link></li>
            <li><router-link active-class="active" to="/test">Тест</router-link></li>
        </nav>
    </header>
</template>


<script>
    import '../styles/Navbar.scss';

    export default {
        name: 'Navbar',
    }
</script>