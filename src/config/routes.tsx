import { lazy } from 'react';

const LazyHome = lazy(() => import('@/layouts/pages/Home'));
const LazyAbout = lazy(() => import('@/layouts/pages/About'));
const LazyLogin = lazy(() => import('@/layouts/pages/Login'));
 
const LazyAboutDetail = lazy(() => import('@/layouts/pages/AboutDetail'));
const LazyStaff = lazy(() => import('@/layouts/pages/Staff'));
const LazyMenu = lazy(() => import('@/layouts/pages/Menu'));


export const RouterPaths = {
  home: '/',
  about: '/about',
  login: '/login',
  aboutDetail: '/about/:id',
  staff: '/staff',
  menu:'/menu'
};

export const PrivateRoutes = [
  RouterPaths.about,
  RouterPaths.aboutDetail,
  RouterPaths.home,
  RouterPaths.staff,
  RouterPaths.menu,
];

export const PublicRoutes = [RouterPaths.login];

export const PrivateRoutesTree = [
  {
    path: RouterPaths.home,
    element: <LazyHome />,
  },
  {
    path: RouterPaths.about,
    element: <LazyAbout />,
  },
  {
    path: RouterPaths.aboutDetail,
    element: <LazyAboutDetail />,
  },
  {
    path: RouterPaths.staff,
    element: <LazyStaff />,
  },
  {
    path: RouterPaths.menu,
    element: <LazyMenu />,
  },
];

export const PublicRoutesTree = [
  {
    path: RouterPaths.login,
    element: <LazyLogin />,
  },
];
