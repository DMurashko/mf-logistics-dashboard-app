import { useState, useMemo } from 'react';
import type { FC } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from 'ui_library/Button';
import { DataGrid } from 'ui_library/DataGrid';
import type { GridColDef, GridPaginationModel, GridRowParams } from 'ui_library/DataGrid';
import { useWarehousesQuery } from './hooks/useWarehousesQuery.ts';
import { CreateWarehouseDialog } from './components/CreateWarehouseDialog.tsx';

interface WarehousesProps {
  selectedWarehouseId: string | null;
  onSelectWarehouse: (id: string) => void;
}

export const Warehouses: FC<WarehousesProps> = ({ selectedWarehouseId, onSelectWarehouse }) => {
  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    page: 0,
    pageSize: 10,
  });
  const [dialogOpen, setDialogOpen] = useState(false);

  const { data, isLoading } = useWarehousesQuery({
    page: paginationModel.page + 1,
    limit: paginationModel.pageSize,
  });

  const columns: GridColDef[] = useMemo(
    () => [
      { field: 'name', headerName: 'Name', flex: 1, minWidth: 150 },
      { field: 'address', headerName: 'Address', flex: 1, minWidth: 150 },
      {
        field: 'createdAt',
        headerName: 'Created',
        width: 120,
        valueFormatter: (value: string) => new Date(value).toLocaleDateString(),
      },
    ],
    []
  );

  const handleRowClick = (params: GridRowParams) => {
    onSelectWarehouse(params.id as string);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h6">Warehouses</Typography>
        <Button variant="contained" size="small" onClick={() => setDialogOpen(true)}>
          Add Warehouse
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
        onRowClick={handleRowClick}
        getRowClassName={(params) =>
          params.id === selectedWarehouseId ? 'Mui-selected' : ''
        }
        sx={{
          flex: 1,
          '& .MuiDataGrid-row': { cursor: 'pointer' },
        }}
        disableRowSelectionOnClick
      />

      <CreateWarehouseDialog open={dialogOpen} onClose={() => setDialogOpen(false)} />
    </Box>
  );
};
