import { Outlet } from 'react-router-dom';
import Header from '@components/Header';
import Footer from '@components/Footer';
import ScrollProgress from '@components/ScrollProgress';

const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <ScrollProgress />
      <Footer />
    </>
  );
};

export default MainLayout;
