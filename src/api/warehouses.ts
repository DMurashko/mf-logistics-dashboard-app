import { WarehousesApi } from './generated/api/warehouses-api.ts';
import { Configuration } from './generated/configuration.ts';
import { ConfigService } from '../config/ConfigService.ts';
import { apiAxiosInstance } from 'login_app/api';

export const warehousesApi = new WarehousesApi(
  new Configuration({
    basePath: ConfigService.apiUrl,
  }),
  undefined,
  apiAxiosInstance
);
