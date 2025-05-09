import { signUpPersonalAccount } from '@/services/authApi';
import { useMutation } from '@tanstack/react-query';

export function useSignUpPersonalAccount() {
  const { mutate: signUp, isPending: isLoading } = useMutation({
    mutationFn: signUpPersonalAccount,
  });

  return { signUp, isLoading };
}
