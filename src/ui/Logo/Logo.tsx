import { LogoProps } from './Logo.types';
import logoUrl from '@/assets/images/logo.webp';

function Logo({ src = logoUrl, className = '', ...props }: LogoProps) {
  return (
    <img
      src={src}
      className={`w-full max-w-16 md:max-w-18 lg:max-w-24 ${className}`}
      {...props}
    ></img>
  );
}

export default Logo;
