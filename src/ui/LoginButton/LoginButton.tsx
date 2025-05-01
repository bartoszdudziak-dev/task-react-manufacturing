import { type ButtonProps } from '@/types';

function LoginButton({ ...props }: ButtonProps) {
  return (
    <button
      className='btn btn-sm btn-accent md:btn-md tracking-wider'
      {...props}
    >
      Login
    </button>
  );
}

export default LoginButton;
