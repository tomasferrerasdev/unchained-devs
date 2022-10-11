import { AppBar, Container, Toolbar, Box, IconButton } from '@mui/material';
import Image from 'next/image';

import { MenuOutlined } from '@mui/icons-material';
import { NavList } from './NavList';

export const Navbar = () => {
  return (
    <>
      <AppBar sx={{ display: 'flex', justifyContent: 'center' }}>
        <Container disableGutters={true} maxWidth={'xl'}>
          <Toolbar
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingX: { xs: '.5rem' },
            }}
            disableGutters={true}
          >
            <Image
              src="/images/logo.svg"
              width={242}
              height={78}
              alt="unchained devs logo"
            />
            <Box sx={{ display: { xs: 'none', lg: 'flex' } }}>
              <NavList />
            </Box>
            <Box sx={{ display: { xs: 'block', lg: 'none' } }}>
              <IconButton>
                <MenuOutlined color="secondary" fontSize="large" />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
