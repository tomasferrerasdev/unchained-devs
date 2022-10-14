import { useState } from 'react';
import Image from 'next/image';
import NextLink from 'next/link';

import {
  AppBar,
  Container,
  Toolbar,
  Box,
  IconButton,
  Link,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';

import { navLinks } from './navItems';

import { CloseOutlined, MenuOutlined } from '@mui/icons-material';
import { NavList } from './NavList';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                  priority
                />
              </Link>
            </NextLink>
            <Box sx={{ display: { xs: 'none', lg: 'flex' } }}>
              <NavList />
            </Box>
            <Box sx={{ display: { xs: 'block', lg: 'none' } }}>
              <IconButton onClick={() => setIsMenuOpen(true)}>
                <MenuOutlined color="secondary" fontSize="large" />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        open={isMenuOpen}
        onClose={() => setIsMenuOpen(!isMenuOpen)}
        anchor="right"
        sx={{
          backdropFilter: 'blur(2px)',
          transition: 'all 0.5s ease-out',
        }}
      >
        <Box sx={{ width: 260, paddingTop: 5, position: 'relative' }}>
          <IconButton
            onClick={() => setIsMenuOpen(false)}
            sx={{ position: 'absolute', top: 18, right: 10 }}
          >
            <CloseOutlined color="secondary" fontSize="large" />
          </IconButton>
          <List>
            <ListItem>
              <ListItemText>
                <Box
                  display="flex"
                  flexDirection="column"
                  height="calc(100vh - 300px)"
                  justifyContent="center"
                  gap={3}
                  px={1.5}
                >
                  {navLinks.map((link, index) =>
                    link.text === 'Merchandise' ? (
                      <Link
                        key={index}
                        fontSize={20}
                        href={link.href}
                        color="secondary"
                        className="link"
                        target="_blank"
                      >
                        <Typography fontWeight={800}>{link.text}</Typography>
                      </Link>
                    ) : (
                      <NextLink href={link.href} passHref key={index}>
                        <Link
                          fontSize={20}
                          color="secondary"
                          className="side-link"
                        >
                          <Typography fontWeight={800}>{link.text}</Typography>
                        </Link>
                      </NextLink>
                    )
                  )}
                </Box>
              </ListItemText>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};
