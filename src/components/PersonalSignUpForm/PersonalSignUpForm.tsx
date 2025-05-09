import { type PersonalUserFormType } from '@/types';
import { personalAccountSchema } from '@/schemas/userSchema';
import { useForm } from 'react-hook-form';
import { useModal } from '../Modal/useModal';
import { useSignUpPersonalAccount } from '@/features/auth/hooks/useSignUpPersonalAccount';
import { zodResolver } from '@hookform/resolvers/zod';
import { formatStringToTimestamp } from '@/utils/dateUtils';

const personalAccountDefaultValues: PersonalUserFormType = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  city: '',
  dateOfBirth: '',
};

function PersonalSignUpForm() {
  const { closeModal } = useModal();
  const { signUp, isLoading } = useSignUpPersonalAccount();
  const { handleSubmit, register, reset } = useForm<PersonalUserFormType>({
    resolver: zodResolver(personalAccountSchema),
    defaultValues: personalAccountDefaultValues,
  });

  const onSubmit = (values: PersonalUserFormType) => {
    signUp(
      {
        ...values,
        dateOfBirth: formatStringToTimestamp(values.dateOfBirth),
      },
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
        <span className='label min-w-26'>First Name</span>
        <input type='text' placeholder='John' {...register('firstName')} />
      </label>

      <label className='input input-sm md:input-md w-full'>
        <span className='label min-w-26'>Last Name</span>
        <input type='text' placeholder='Doe' {...register('lastName')} />
      </label>

      <label className='input input-sm md:input-md w-full'>
        <span className='label min-w-26'>Email</span>
        <input
          type='text'
          placeholder='johndoe@example.com'
          {...register('email')}
        />
      </label>

      <label className='input input-sm md:input-md w-full'>
        <span className='label min-w-26'>Password</span>
        <input type='password' {...register('password')} />
      </label>

      <label className='input input-sm md:input-md w-full'>
        <span className='label min-w-26'>City</span>
        <input type='text' placeholder='Warsaw' {...register('city')} />
      </label>

      <label className='input input-sm md:input-md w-full'>
        <span className='label min-w-26'>Date of Birth</span>
        <input type='date' placeholder='' {...register('dateOfBirth')} />
      </label>

      <button
        className='btn btn-accent btn-sm md:btn-md mt-1 w-full text-center'
        disabled={isLoading}
        type='submit'
      >
        Sign up {isLoading ? '...' : null}
      </button>
    </form>
  );
}

export default PersonalSignUpForm;
