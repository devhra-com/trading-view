import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { addOne } from '../../core/utils/crudUtils';
import { User } from '../types/user';

const addUser = async (user: User): Promise<User> => {
  const { data } = await axios.post('/api/users', user);
  return data;
};

export default function useAddUser() {
  const queryClient: any = useQueryClient();

  const { isLoading, mutateAsync } = useMutation(addUser, {
    onSuccess: (user: User) => {
      queryClient.setQueryData(['users'], (oldUsers: User[]) =>
        addOne(user, oldUsers),
      );
    },
  });

  return { isAdding: isLoading, addUser: mutateAsync };
}
