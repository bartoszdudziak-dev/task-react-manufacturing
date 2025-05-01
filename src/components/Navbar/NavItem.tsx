import { NavLink } from 'react-router';
import { type NavItemProps } from './types';

function NavItem({ label, path }: NavItemProps) {
  return (
    <li className='text-neutral hover:text-accent-content transition-all duration-200'>
      <NavLink
        to={path}
        end
        className={({ isActive }) =>
          isActive ? 'text-accent-content font-semibold' : ''
        }
      >
        {label}
      </NavLink>
    </li>
  );
}

export default NavItem;
