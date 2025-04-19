import items from '@/data/navbarLinks';
import NavList from './NavList';

function Navbar() {
  return (
    <nav className='w-full'>
      <NavList items={items} />
    </nav>
  );
}

export default Navbar;
