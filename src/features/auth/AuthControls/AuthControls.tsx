import Modal from '@/ui/Modal';
import LoginButton from '@/ui/LoginButton';
import SignUpButton from '@/ui/SignUpButton';

function AuthControls() {
  return (
    <div className='space-x-2 md:space-x-4'>
      <Modal>
        <Modal.Button>
          <LoginButton />
        </Modal.Button>

        <Modal.Content>Hello is login</Modal.Content>
      </Modal>

      <Modal>
        <Modal.Button>
          <SignUpButton />
        </Modal.Button>

        <Modal.Content>Hello is signup</Modal.Content>
      </Modal>
    </div>
  );
}

export default AuthControls;
