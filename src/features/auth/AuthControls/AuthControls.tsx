import Modal from '@/ui/Modal';
import LoginButton from '@/ui/LoginButton';
import SignUpButton from '@/ui/SignUpButton';

function AuthControls() {
  return (
    <div className='space-x-2 md:space-x-4'>
      <Modal title='Login Form'>
        <Modal.Button>
          <LoginButton />
        </Modal.Button>

        <Modal.Content>Hello is login</Modal.Content>
      </Modal>

      <Modal title='Sign up Form'>
        <Modal.Button>
          <SignUpButton />
        </Modal.Button>

        <Modal.Content>Hello is signup</Modal.Content>
      </Modal>
    </div>
  );
}

export default AuthControls;
