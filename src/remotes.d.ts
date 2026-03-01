declare module 'ui_library/Button' {
  import type { ButtonProps as MuiButtonProps } from '@mui/material';

  export interface ButtonProps
    extends Omit<MuiButtonProps, 'color'> {
    color?:
      | 'primary'
      | 'secondary'
      | 'inherit'
      | 'success'
      | 'error'
      | 'info'
      | 'warning';
  }

  export const Button: React.FC<ButtonProps>;
}

declare module 'ui_library/Input' {
  import type { TextFieldProps } from '@mui/material';

  export type InputProps = TextFieldProps;
  export const Input: React.FC<InputProps>;
}

declare module 'ui_library/Theme' {
  import type { Theme } from '@mui/material';

  export interface ThemeProviderProps {
    children: React.ReactNode;
  }

  export const ThemeProvider: React.FC<ThemeProviderProps>;
  export const theme: Theme;
}

declare module 'ui_library/DataGrid' {
  export {
    DataGrid,
    type DataGridProps,
    type GridColDef,
    type GridRowParams,
    type GridPaginationModel,
    type GridRowSelectionModel,
    type GridRenderCellParams,
    type GridSlots,
  } from '@mui/x-data-grid';
}

declare module 'login_app/auth' {
  export const useAuth: () => { isAuthenticated: boolean };
  export class AuthService {
    static get isAuthenticated(): boolean;
    static getAccessToken(): string | null;
    static getRefreshToken(): string | null;
    static setTokens(accessToken: string, refreshToken: string): void;
    static clearTokens(): void;
  }
  export enum StorageKey {
    ACCESS_TOKEN = 'accessToken',
    REFRESH_TOKEN = 'refreshToken',
  }
}

declare module 'login_app/api' {
  import type { AxiosInstance } from 'axios';

  export const apiAxiosInstance: AxiosInstance;

  export interface IRefreshService {
    interceptReq(): void;
    interceptRes(): void;
  }

  export class RefreshTokenService implements IRefreshService {
    static initialize(axiosInstance: AxiosInstance): RefreshTokenService;
    static getInstance(): RefreshTokenService | null;
    interceptReq(): void;
    interceptRes(): void;
    destroy(): void;
  }

  export class InvalidRefreshTokenError extends Error {
    constructor(message?: string);
  }
}
