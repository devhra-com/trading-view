import axios from 'axios';
import { useMutation } from 'react-query';

const forgotPassword = async ({ email }: { email: string }) => {
  const { data } = await axios.post('/api/forgot-password', { email });
  return data;
};

export default function useForgotPassword() {
  const { isLoading, mutateAsync } = useMutation(forgotPassword);
  return { isLoading, forgotPassword: mutateAsync };
}
