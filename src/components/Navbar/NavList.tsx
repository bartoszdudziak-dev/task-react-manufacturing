import { type NavListProps } from './types';
import NavItem from './NavItem';

function NavList({ items }: NavListProps) {
  return (
    <ul className='flex w-full max-w-xl justify-between gap-2 text-xs md:text-sm'>
      {items.map(({ label, path }) => (
        <NavItem label={label} path={path} key={label} />
      ))}
    </ul>
  );
}

export default NavList;
