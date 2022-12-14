import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { updateOne } from '../../core/utils/crudUtils';
import { Event } from '../types/event';

const updateEvent = async (event: Event): Promise<Event> => {
  const { data } = await axios.put('/api/events', event);
  return data;
};

export default function useUpdateEvent() {
  const queryClient = useQueryClient();

  const { isLoading, mutateAsync } = useMutation(updateEvent, {
    onSuccess: (event: Event) => {
      queryClient.setQueryData(['events'], (oldEvents: any) =>
        updateOne(event, oldEvents),
      );
    },
  });

  return { isUpdating: isLoading, updateEvent: mutateAsync };
}
