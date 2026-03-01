import { useMutation, useQueryClient } from '@tanstack/react-query';
import { goodsApi } from '../../../api/goods.ts';
import type { CreateGoodDto } from '../../../api/generated/models';

export const useCreateGoodMutation = (warehouseId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (dto: CreateGoodDto) => goodsApi.createGood(warehouseId, dto),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['goods'] });
    },
  });
};
