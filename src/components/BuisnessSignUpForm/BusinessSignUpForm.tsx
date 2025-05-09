import { type BuisnessUserFormType } from '@/types/common';
import { buisnessAccountSchema } from '@/schemas/userSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useSignUpBuisnessAccount } from '@/features/auth/hooks/useSignUpBuisnessAccount';
import { useModal } from '../Modal/useModal';

const buisnessUserDefaultValues: BuisnessUserFormType = {
  email: '',
  password: '',
  name: '',
  city: '',
};

function BusinessSignUpForm() {
  const { closeModal } = useModal();
  const { signUp, isLoading } = useSignUpBuisnessAccount();
  const { handleSubmit, register, reset, formState } =
    useForm<BuisnessUserFormType>({
      resolver: zodResolver(buisnessAccountSchema),
      defaultValues: buisnessUserDefaultValues,
    });

  const onSubmit = (values: BuisnessUserFormType) => {
    signUp(
      { ...values },
      {
        onSuccess: () => {
          reset();
          closeModal();
        },
      }
    );
  };

  return (
    <form className='space-y-4' onSubmit={handleSubmit(onSubmit)}>
      <label className='input input-sm md:input-md w-full'>
        <span className='label min-w-26'>Email</span>
        <input
          {...register('email')}
          type='email'
          placeholder='acmpecorp@example.com'
        />
      </label>

      <label className='input input-sm md:input-md w-full'>
        <span className='label min-w-26'>Password</span>
        <input {...register('password')} type='password' />
      </label>

      <label className='input input-sm md:input-md w-full'>
        <span className='label min-w-26'>Name</span>
        <input {...register('name')} type='text' placeholder='Acme Corp' />
      </label>

      <label className='input input-sm md:input-md w-full'>
        <span className='label min-w-26'>City</span>
        <input {...register('city')} type='text' placeholder='Warsaw' />
      </label>

      <button
        className='btn btn-accent btn-sm md:btn-md mt-1 w-full text-center'
        type='submit'
        disabled={isLoading}
        onClick={() => console.log(formState)}
      >
        Sign up {isLoading ? '....' : null}
      </button>
    </form>
  );
}

export default BusinessSignUpForm;
