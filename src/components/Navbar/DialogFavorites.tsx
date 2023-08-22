import { Dialog, DialogTitle, DialogContent } from '@mui/material';
import useWorkerContext from '@/hooks/useWorkerContext';
import CustomTable from '../CustomTable';
import { GridRenderCellParams } from '@mui/x-data-grid';
import RemoveIcon from '@mui/icons-material/Remove';

const DialogFavorites = () => {
  const { favorites, removeFavorite, toggleFavoriteModal, isFavoriteOpen } =
    useWorkerContext();

  const columns = [
    {
      field: 'actions',
      headerName: '',
      width: 50,
      type: 'actions',
      sortable: false,
      renderCell: (params: GridRenderCellParams) => (
        <>
          <RemoveIcon
            color='error'
            onClick={() => removeFavorite(params.row)}
          />
        </>
      ),
    },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      minWidth: 150,
    },
    {
      field: 'category',
      headerName: 'Category',
      flex: 1,
    },
    {
      field: 'company',
      headerName: 'Company',
      flex: 1,
    },
    {
      field: 'levelOfHappiness',
      headerName: 'Level Of Happiness',
      flex: 1,
    },
  ];
  return (
    <Dialog
      maxWidth={'md'}
      fullWidth={true}
      onClose={toggleFavoriteModal}
      open={isFavoriteOpen}
    >
      <DialogTitle>Favorites</DialogTitle>
      <DialogContent>
        <CustomTable data={favorites} columns={columns} pageSize={5} />
      </DialogContent>
    </Dialog>
  );
};

export default DialogFavorites;
