import { GoodsApi } from './generated/api/goods-api.ts';
import { Configuration } from './generated/configuration.ts';
import { ConfigService } from '../config/ConfigService.ts';
import { apiAxiosInstance } from 'login_app/api';

export const goodsApi = new GoodsApi(
  new Configuration({
    basePath: ConfigService.apiUrl,
  }),
  undefined,
  apiAxiosInstance
);
