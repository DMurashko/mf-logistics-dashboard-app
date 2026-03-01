import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { Button } from 'ui_library/Button';
import { Input } from 'ui_library/Input';
import Box from '@mui/material/Box';
import { useCreateWarehouseMutation } from '../hooks/useCreateWarehouseMutation.ts';

interface CreateWarehouseDialogProps {
  open: boolean;
  onClose: () => void;
}

export const CreateWarehouseDialog = ({ open, onClose }: CreateWarehouseDialogProps) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');

  const { mutate: createWarehouse, isPending } = useCreateWarehouseMutation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createWarehouse(
      {
        name,
        address,
        ...(description ? { description } : {}),
      },
      {
        onSuccess: () => {
          setName('');
          setAddress('');
          setDescription('');
          onClose();
        },
      }
    );
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Create Warehouse</DialogTitle>
      <Box component="form" onSubmit={handleSubmit}>
        <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Input
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            fullWidth
            autoFocus
          />
          <Input
            label="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            fullWidth
          />
          <Input
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
            multiline
            rows={3}
          />
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button variant="text" onClick={onClose} disabled={isPending}>
            Cancel
          </Button>
          <Button type="submit" variant="contained" disabled={isPending}>
            {isPending ? 'Creating...' : 'Create'}
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};
