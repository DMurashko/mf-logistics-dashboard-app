import {useQuery} from '@tanstack/react-query';
import {goodsApi} from '../../../api/goods.ts';

interface UseGoodsQueryParams {
  warehouseId: string | null;
  page: number;
  limit: number;
  search?: string;
}

export const useGoodsQuery = ({ warehouseId, page, limit, search }: UseGoodsQueryParams) => {
  return useQuery({
    queryKey: ['goods', warehouseId, { page, limit, search }],
    queryFn: async () => {
      const response = await goodsApi.findAllGoods(warehouseId!, page, limit, search);
      return response.data;
    },
    enabled: !!warehouseId,
  });
};
