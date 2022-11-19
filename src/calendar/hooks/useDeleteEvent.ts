import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { removeOne } from '../../core/utils/crudUtils';
// import { Event } from '../types/event';

const deleteEvent = async (eventId: string): Promise<string> => {
  const { data } = await axios.delete('/api/events', { data: eventId });
  return data;
};

export default function useDeleteEvent() {
  const queryClient = useQueryClient();

  const { isLoading, mutateAsync } = useMutation(deleteEvent, {
    onSuccess: (eventId: string) => {
      queryClient.setQueryData(
        ['events'],
        (oldEvents: { id: string }[] | undefined) =>
          removeOne(eventId, oldEvents),
      );
    },
  });

  return { isDeleting: isLoading, deleteEvent: mutateAsync };
}
