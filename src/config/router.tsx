import NotFoundPage from '@/layouts/pages/NotFound/index.tsx';
import PrivateLayout from '@/layouts/templates/Private/index.tsx';
import PublicLayout from '@/layouts/templates/Public/index.tsx';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoutesTree, PublicRoutesTree } from './routes.tsx';

export const Routers = () => {
  const privateRoutes = () => {
    return (
      <>
        {PrivateRoutesTree.map((route) => {
          return <Route key={route.path} {...route} />;
        })}
      </>
    );
  };
  const publicRoutes = () => {
    return (
      <>
        {PublicRoutesTree.map((route) => {
          return <Route key={route.path} {...route} />;
        })}
      </>
    );
  };
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route element={<PublicLayout />}>{publicRoutes()}</Route>
      <Route element={<PrivateLayout />}>{privateRoutes()}</Route>
    </Routes>
  );
};
