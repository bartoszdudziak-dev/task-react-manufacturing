import Modal from '@/components/Modal';
import LoginButton from '@/ui/LoginButton';
import SignUpButton from '@/ui/SignUpButton';
import SignUpForm from '../SignUpForm';

function AuthControls() {
  return (
    <div className='space-x-2 md:space-x-4'>
      <Modal title='Login Form'>
        <Modal.Button>
          <LoginButton />
        </Modal.Button>

        <Modal.Content>Hello is login</Modal.Content>
      </Modal>

      <Modal title='Sign Up Form'>
        <Modal.Button>
          <SignUpButton />
        </Modal.Button>

        <Modal.Content>
          <SignUpForm />
        </Modal.Content>
      </Modal>
    </div>
  );
}

export default AuthControls;
