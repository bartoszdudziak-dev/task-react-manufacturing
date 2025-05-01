import { Outlet } from 'react-router';
import Container from '../Container';
import Header from '@/components/Header';

function RootLayout() {
  return (
    <>
      <Header />
      <Container className='mt-6 p-4 lg:mt-10 xl:p-0'>
        <Outlet />
      </Container>
    </>
  );
}

export default RootLayout;
