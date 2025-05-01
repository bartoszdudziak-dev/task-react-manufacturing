import Container from '@/ui/Container';
import Logo from '@/ui/Logo';
import Navbar from '../Navbar';
import HeaderTitle from './HeaderTitle';
import AuthControls from '@/features/auth/AuthControls';

function Header() {
  return (
    <header className='w-full'>
      <div className='bg-base-200 p-4 lg:p-6'>
        <Container className='flex items-center justify-between'>
          <div className='flex items-center gap-6'>
            <Logo />
            <HeaderTitle />
          </div>
          <AuthControls />
        </Container>
      </div>
      <div className='bg-base-300 px-4 py-2 lg:px-6 lg:py-4'>
        <Container>
          <Navbar />
        </Container>
      </div>
    </header>
  );
}

export default Header;
