import BusinessSignUpForm from '@/components/BuisnessSignUpForm';
import PersonalSignUpForm from '@/components/PersonalSignUpForm';

function SignUpForm() {
  return (
    <div>
      <div className='tabs tabs-border'>
        <input
          type='radio'
          name='accountType'
          className='tab'
          aria-label='Personal Acount'
          defaultChecked
        />
        <div className='tab-content border-base-300 bg-base-100 rounded-sm px-4 py-6 md:px-6 md:py-8'>
          <PersonalSignUpForm />
        </div>

        <input
          type='radio'
          name='accountType'
          className='tab'
          aria-label='Buisness Account'
        />
        <div className='tab-content border-base-300 bg-base-100 rounded-sm px-4 py-6 md:px-6 md:py-8'>
          <BusinessSignUpForm />
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
