import { useState } from 'react';
import type { FC } from 'react';
import Box from '@mui/material/Box';
import { Warehouses } from './features/warehouses/Warehouses.tsx';
import { Goods } from './features/goods/Goods.tsx';

export const Dashboard: FC = () => {
  const [selectedWarehouseId, setSelectedWarehouseId] = useState<string | null>(null);

  return (
    <Box sx={{ display: 'flex', gap: 3, p: 3, height: 'calc(100vh - 64px)' }}>
      <Box sx={{ flex: 1, minWidth: 0 }}>
        <Warehouses
          selectedWarehouseId={selectedWarehouseId}
          onSelectWarehouse={setSelectedWarehouseId}
        />
      </Box>
      <Box sx={{ flex: 1, minWidth: 0 }}>
        <Goods warehouseId={selectedWarehouseId} />
      </Box>
    </Box>
  );
};
