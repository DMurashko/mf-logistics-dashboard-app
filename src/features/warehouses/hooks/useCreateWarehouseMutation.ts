import { useMutation, useQueryClient } from '@tanstack/react-query';
import { warehousesApi } from '../../../api/warehouses.ts';
import type { CreateWarehouseDto } from '../../../api/generated/models';

export const useCreateWarehouseMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (dto: CreateWarehouseDto) => warehousesApi.createWarehouse(dto),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['warehouses'] });
    },
  });
};
