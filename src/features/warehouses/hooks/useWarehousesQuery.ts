import {useQuery} from '@tanstack/react-query';
import {warehousesApi} from '../../../api/warehouses.ts';

interface UseWarehousesQueryParams {
  page: number;
  limit: number;
  search?: string;
}

export const useWarehousesQuery = ({ page, limit, search }: UseWarehousesQueryParams) => {
  return useQuery({
    queryKey: ['warehouses', { page, limit, search }],
    queryFn: async () => {
      const response = await warehousesApi.findAllWarehouses(page, limit, search);
      return response.data;
    },
  });
};
