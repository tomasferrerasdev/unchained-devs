import NextLink from 'next/link';
import { Link } from '@mui/material';
import { Box } from '@mui/material';

const navLinks = [
  {
    href: '/become/mentee',
    text: 'Become a mentee',
  },
  {
    href: '/become/mentor',
    text: 'Become a mentor',
  },
  {
    href: '/donate',
    text: 'Donate',
  },
  {
    href: '/contact-us',
    text: 'Contact Us',
  },
  {
    href: 'https://unbridled-spirits.herokuapp.com/category/unchained-devs',
    text: 'Merchandise',
  },
];

export const NavList = () => {
  return (
    <>
      <Box display="flex" alignItems="center" gap={1.5}>
        {navLinks.map((link, index) =>
          link.text === 'Merchandise' ? (
            <Link
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
