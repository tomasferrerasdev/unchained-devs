import {
  AppBar,
  Container,
  Toolbar,
  Box,
  IconButton,
  Link,
} from '@mui/material';
import Image from 'next/image';
import NextLink from 'next/link';

import { MenuOutlined } from '@mui/icons-material';
import { NavList } from './NavList';

export const Navbar = () => {
  return (
    <>
      <AppBar
        sx={{
          display: 'flex',
          justifyContent: 'center',
          borderBottom: '1px solid #CBCBCB',
        }}
      >
        <Container disableGutters={true} maxWidth={'xl'}>
          <Toolbar
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingX: { xs: '.5rem' },
            }}
            disableGutters={true}
          >
            <NextLink href="/" passHref>
              <Link sx={{ cursor: 'pointer' }}>
                <Image
                  src="/images/logo.svg"
                  width={242}
                  height={78}
                  alt="unchained devs logo"
                />
              </Link>
            </NextLink>
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
