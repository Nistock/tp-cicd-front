import { createRouter, createWebHistory } from 'vue-router';
import BookCopiesView from '../views/BookCopiesView.vue';
import BooksView from '../views/BooksView.vue';
import AuthorsView from '../views/AuthorsView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'bookcopies',
      component: BookCopiesView,
    },
    {
      path: '/bookcopies',
      name: 'bookcopies-explicit',
      component: BookCopiesView,
    },
    {
      path: '/books',
      name: 'books',
      component: BooksView,
    },
    {
      path: '/authors',
      name: 'authors',
      component: AuthorsView,
    },
  ],
});

export default router;
