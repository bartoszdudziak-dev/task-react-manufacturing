import { signUpBuisnessAccount } from '@/services/authApi';
import { useMutation } from '@tanstack/react-query';

export function useSignUpBuisnessAccount() {
  const { mutate: signUp, isPending: isLoading } = useMutation({
    mutationFn: signUpBuisnessAccount,
  });

  return { signUp, isLoading };
}
