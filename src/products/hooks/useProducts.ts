import axios from 'axios';
import { useQuery } from 'react-query';
import { Product } from '../types/Product';

const fetchProducts = async (): Promise<Product[]> => {
  const { data } = await axios.get('/api/products');
  return data;
};

export default function useProducts() {
  return useQuery(['products'], () => fetchProducts());
}
