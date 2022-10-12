import { Box, Container, Link, Typography } from '@mui/material';
import NextLink from 'next/link';

const footerLinks = [
  {
    href: 'https://github.com/tomasferrerasdev',
    text: 'Facebook',
  },
  {
    href: 'https://github.com/tomasferrerasdev',
    text: 'Twitter',
  },
  {
    href: 'https://github.com/tomasferrerasdev',
    text: 'Github',
  },
  {
    href: 'https://github.com/tomasferrerasdev',
    text: 'Discord',
  },
];

export const Footer = () => {
  return (
    <Container maxWidth={'xl'} disableGutters={true}>
      <Box
        px={1}
        py={3}
        display="flex"
        sx={{
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'flex-start', md: 'center' },
        }}
        gap={1.5}
      >
        <Typography variant="body2" fontWeight={800}>
          Follow Us on social media:
        </Typography>
        {footerLinks.map((link, index) => (
          <NextLink href={link.href} passHref key={index}>
            <Link fontSize={20} color="secondary" className="link">
              <span>{link.text}</span>
            </Link>
          </NextLink>
        ))}
      </Box>
    </Container>
  );
};
