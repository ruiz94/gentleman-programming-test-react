import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import useWorkerContext from '@/hooks/useWorkerContext';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Navbar: React.FC = () => {
  const { toggleFavoriteModal } = useWorkerContext();
  return (
    <AppBar position='fixed'>
      <Toolbar>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          Gentleman Programming Test
        </Typography>
        <FavoriteIcon onClick={toggleFavoriteModal} />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
