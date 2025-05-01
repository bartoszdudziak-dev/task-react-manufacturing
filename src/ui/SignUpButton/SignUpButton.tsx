import { type ButtonProps } from '@/types';

function SignUpButton({ ...props }: ButtonProps) {
  return (
    <button
      className='btn btn-sm btn-accent btn-outline md:btn-md tracking-wider'
      {...props}
    >
      Sign up
    </button>
  );
}

export default SignUpButton;
