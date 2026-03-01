import {useState} from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import {Button} from 'ui_library/Button';
import {Input} from 'ui_library/Input';
import Box from '@mui/material/Box';
import {useCreateGoodMutation} from '../hooks/useCreateGoodMutation.ts';

interface CreateGoodDialogProps {
  open: boolean;
  onClose: () => void;
  warehouseId: string;
}

export const CreateGoodDialog = ({ open, onClose, warehouseId }: CreateGoodDialogProps) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');

  const { mutate: createGood, isPending } = useCreateGoodMutation(warehouseId);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createGood(
      {
        name,
        quantity: Number(quantity),
        price: Number(price),
        ...(description ? { description } : {}),
      },
      {
        onSuccess: () => {
          setName('');
          setDescription('');
          setQuantity('');
          setPrice('');
          onClose();
        },
      }
    );
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Add Good</DialogTitle>
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
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
            multiline
            rows={2}
          />
          <Input
            label="Quantity"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
            fullWidth
            slotProps={{ htmlInput: { min: 0, step: 1 } }}
          />
          <Input
            label="Price"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            fullWidth
            slotProps={{ htmlInput: { min: 0, step: 0.01 } }}
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
