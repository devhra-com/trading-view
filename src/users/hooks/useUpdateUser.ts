import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { updateOne } from '../../core/utils/crudUtils';
import { User } from '../types/user';

const updateUser = async (user: User): Promise<User> => {
  const { data } = await axios.put('/api/users', user);
  return data;
};

export default function useUpdateUser() {
  const queryClient: any = useQueryClient();

  const { isLoading, mutateAsync } = useMutation(updateUser, {
    onSuccess: (user: User) => {
      queryClient.setQueryData(['users'], (oldUsers: User[]) =>
        updateOne(user, oldUsers),
      );
    },
  });

  return { isUpdating: isLoading, updateUser: mutateAsync };
}
