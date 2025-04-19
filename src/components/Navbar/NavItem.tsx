import { type NavItemProps } from './types';

function NavItem({ label, path }: NavItemProps) {
  return (
    <li className='text-neutral hover:text-accent-content transition-all duration-200'>
      <a href={path}>{label}</a>
    </li>
  );
}

export default NavItem;
