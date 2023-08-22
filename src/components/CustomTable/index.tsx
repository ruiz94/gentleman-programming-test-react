import { DataGrid, GridColDef } from '@mui/x-data-grid';
import styles from './styles.module.css';
import React from 'react';

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: GridColDef<any>[];
  pageSize: number;
}
const CustomTable = (props: Props) => {
  const { data, columns, pageSize } = props;
  const [paginationModel, setPaginationModel] = React.useState({
    pageSize: pageSize,
    page: 0,
  });

  return (
    <div className={styles.table_section}>
      <DataGrid
        rows={data}
        columns={columns}
        autoHeight
        pagination
        disableColumnSelector
        disableRowSelectionOnClick
        pageSizeOptions={[pageSize]}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        getRowId={(row: any) => row.id}
      />
    </div>
  );
};

export default CustomTable;
