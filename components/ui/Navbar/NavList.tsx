import NextLink from 'next/link';
import { Link } from '@mui/material';
import { Box } from '@mui/material';
import { navLinks } from './navItems';

export const NavList = () => {
  return (
    <>
      <Box display="flex" alignItems="center" gap={1.5}>
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
              <span>{link.text}</span>
            </Link>
          ) : (
            <NextLink href={link.href} passHref key={index}>
              <Link fontSize={20} color="secondary" className="link">
                <span>{link.text}</span>
              </Link>
            </NextLink>
          )
        )}
      </Box>
    </>
  );
};
