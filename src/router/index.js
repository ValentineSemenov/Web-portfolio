import { createRouter, createWebHistory } from 'vue-router'
import Navbar from '../components/Navbar.vue';
import HomeComponent from '../views/HomeComponent.vue'
import AboutMeComponent from '../views/AboutMeComponent.vue';
import InterestsComponent from '../views/InterestsComponent.vue';
import PhotoAlbumComponent from '../views/PhotoAlbumComponent.vue';
import EducationComponent from '../views/EducationComponent.vue';
import ContactComponent from '../views/ContactComponent.vue';
import TestComponent from '../views/TestComponent.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    components: {
      default: HomeComponent,
      navbar: Navbar,
    },
    meta: {title: "Главная страница"}
  },
  {
    path: '/about',
    name: 'about',
    components: {
      default: AboutMeComponent,
      navbar: Navbar,
    },
    meta: {title: 'Обо мне'}
  },
  {
    path: '/interests',
    name: 'interests',
    components: {
      default: InterestsComponent,
      navbar: Navbar,
    },
    meta: {title: 'Мои интересы'}
  },
  {
    path: '/education',
    name: 'education',
    components: {
      default: EducationComponent,
      navbar: Navbar,
    },
    meta: {title: 'Учеба'}
  },
  {
    path: '/photo-album',
    name: 'photo-album',
    components: {
      default: PhotoAlbumComponent,
      navbar: Navbar,
    },
    meta: {title: 'Фотоальбом'}
  },
  {
    path: '/contact',
    name: 'contact',
    components: {
      default: ContactComponent,
      navbar: Navbar,
    },
    meta: {title: 'Контакт'}
  },
  {
    path: '/test',
    name: 'test',
    components: {
      default: TestComponent,
      navbar: Navbar,
    },
    meta: {title: 'Тест'}
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
