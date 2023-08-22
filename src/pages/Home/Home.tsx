import React from 'react';
import { Checkbox } from '@mui/material';
import CustomTable from '@/components/CustomTable';
import { GridRenderCellParams } from '@mui/x-data-grid';

import useWorkerContext from '@/hooks/useWorkerContext';

const Home: React.FC = () => {
  const worker = useWorkerContext();
  const pageSize = 5;

  const columns = [
    {
      field: 'actions',
      headerName: '',
      width: 50,
      type: 'actions',
      sortable: false,
      renderCell: (params: GridRenderCellParams) => (
        <>
          <Checkbox
            size='small'
            onChange={() => worker.addFavorite(params.row)}
            checked={!!worker.favorites.find(fav => fav.id === params.row.id)}
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
    <>
      <CustomTable data={worker.people} columns={columns} pageSize={pageSize} />
    </>
  );
};

export default Home;
