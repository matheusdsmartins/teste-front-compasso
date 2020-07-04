import Home from '../pages/HomePage';
import RepositoriesPage from '../pages/RepositoriesPage';
import StarredPage from '../pages/StarredPage';

export const publicRoutes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/repositorios',
    component: RepositoriesPage,
  },
  {
    path: '/favoritos',
    component: StarredPage,
  },
];
