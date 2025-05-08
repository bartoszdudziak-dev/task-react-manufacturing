import { auth, db } from '@/config/firebase';
import { buisnessUserSchema } from '@/schemas/userSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

function BusinessSignUpForm() {
  const { handleSubmit, register } = useForm<
    z.infer<typeof buisnessUserSchema>
  >({
    resolver: zodResolver(buisnessUserSchema),
    defaultValues: {
      email: '',
      password: '',
      name: '',
      city: '',
    },
  });

  const signUp = async (values: z.infer<typeof buisnessUserSchema>) => {
    const { email, password, city, name } = values;

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const buisnessDoc = {
        email,
        name,
        city,
        type: 'buisness',
      };

      await setDoc(doc(db, 'users', user.uid), buisnessDoc);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className='space-y-4' onSubmit={handleSubmit(signUp)}>
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
      >
        Sign up
      </button>
    </form>
  );
}

export default BusinessSignUpForm;
