import { RouterPaths } from '@/config';
import { BaseLink } from '@/layouts/atoms';
import { Outlet } from 'react-router-dom';
 

const PrivateLayout = () => {
  return (
    <>
      <h1>Private Layout</h1>
      <nav style={{ display: 'flex', gap: '20px' }}>
        <BaseLink href={RouterPaths.about}>
          <a>About</a>
        </BaseLink>
        <BaseLink href={RouterPaths.home}>
          <a>Home</a>
        </BaseLink>
        <BaseLink href={RouterPaths.login}>
          <a>Login</a>
        </BaseLink>
        <BaseLink href={RouterPaths.staff}>
          <a>Staff</a>
        </BaseLink>
        <BaseLink href={RouterPaths.menu}>
          <a>menu</a>
        </BaseLink>
      </nav>
      <Outlet />
    </>
  );
};

export default PrivateLayout;
