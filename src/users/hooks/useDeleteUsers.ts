import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { removeMany } from '../../core/utils/crudUtils';
import { User } from '../types/user';

const deleteUsers = async (userIds: string[]): Promise<string[]> => {
  const { data } = await axios.delete('/api/users', { data: userIds });
  return data;
};

export default function useDeleteUsers() {
  const queryClient: any = useQueryClient();

  const { isLoading, mutateAsync } = useMutation(deleteUsers, {
    onSuccess: (userIds: string[]) => {
      queryClient.setQueryData(['users'], (oldUsers: User[]) =>
        removeMany(userIds, oldUsers),
      );
    },
  });

  return { isDeleting: isLoading, deleteUsers: mutateAsync };
}
