import { useState, useMemo } from 'react';
import type { FC } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from 'ui_library/Button';
import { DataGrid } from 'ui_library/DataGrid';
import type { GridColDef, GridPaginationModel } from 'ui_library/DataGrid';
import { useGoodsQuery } from './hooks/useGoodsQuery.ts';
import { CreateGoodDialog } from './components/CreateGoodDialog.tsx';

interface GoodsProps {
  warehouseId: string | null;
}

export const Goods: FC<GoodsProps> = ({ warehouseId }) => {
  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    page: 0,
    pageSize: 10,
  });
  const [dialogOpen, setDialogOpen] = useState(false);

  const { data, isLoading } = useGoodsQuery({
    warehouseId,
    page: paginationModel.page + 1,
    limit: paginationModel.pageSize,
  });

  const columns: GridColDef[] = useMemo(
    () => [
      { field: 'name', headerName: 'Name', flex: 1, minWidth: 140 },
      { field: 'quantity', headerName: 'Qty', width: 80, type: 'number' },
      {
        field: 'price',
        headerName: 'Price',
        width: 100,
        type: 'number',
        valueFormatter: (value: number) => `$${Number(value).toFixed(2)}`,
      },
      {
        field: 'createdAt',
        headerName: 'Created',
        width: 120,
        valueFormatter: (value: string) => new Date(value).toLocaleDateString(),
      },
    ],
    []
  );

  if (!warehouseId) {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6">Goods</Typography>
        </Box>
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px dashed',
            borderColor: 'divider',
            borderRadius: 1,
          }}
        >
          <Typography color="text.secondary">Select a warehouse to view its goods</Typography>
        </Box>
      </Box>
    );
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h6">Goods</Typography>
        <Button variant="contained" size="small" onClick={() => setDialogOpen(true)}>
          Add Good
        </Button>
      </Box>

      <DataGrid
        rows={data?.data ?? []}
        columns={columns}
        loading={isLoading}
        paginationMode="server"
        rowCount={data?.meta?.totalItems ?? 0}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        pageSizeOptions={[5, 10, 25]}
        sx={{ flex: 1 }}
        disableRowSelectionOnClick
      />

      <CreateGoodDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        warehouseId={warehouseId}
      />
    </Box>
  );
};
