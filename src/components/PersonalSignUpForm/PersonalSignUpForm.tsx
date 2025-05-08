function PersonalSignUpForm() {
  return (
    <form className='space-y-4'>
      <label className='input input-sm md:input-md w-full'>
        <span className='label min-w-26'>First Name</span>
        <input type='text' placeholder='John' />
      </label>

      <label className='input input-sm md:input-md w-full'>
        <span className='label min-w-26'>Last Name</span>
        <input type='text' placeholder='Doe' />
      </label>

      <label className='input input-sm md:input-md w-full'>
        <span className='label min-w-26'>Email</span>
        <input type='text' placeholder='johndoe@example.com' />
      </label>

      <label className='input input-sm md:input-md w-full'>
        <span className='label min-w-26'>City</span>
        <input type='text' placeholder='Warsaw' />
      </label>

      <label className='input input-sm md:input-md w-full'>
        <span className='label min-w-26'>Date of Birth</span>
        <input type='date' placeholder='' />
      </label>

      <button className='btn btn-accent btn-sm md:btn-md mt-1 w-full text-center'>
        Sign up
      </button>
    </form>
  );
}

export default PersonalSignUpForm;
