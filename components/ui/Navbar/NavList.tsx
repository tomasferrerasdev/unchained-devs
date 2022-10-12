import NextLink from 'next/link';
import { Link } from '@mui/material';
import { Box } from '@mui/material';

const navLinks = [
  {
    href: 'become-a-mentee',
    text: 'Become a mentee',
  },
  {
    href: 'become-a-mentor',
    text: 'Become a mentor',
  },
  {
    href: 'donate',
    text: 'Donate',
  },
  {
    href: 'contact-us',
    text: 'Contact Us',
  },
  {
    href: 'merchandise',
    text: 'Merchandise',
  },
];

export const NavList = () => {
  return (
    <>
      <Box display="flex" alignItems="center" gap={1.5}>
        {navLinks.map((link, index) => (
          <NextLink href={link.href} passHref key={index}>
            <Link fontSize={20} color="secondary" className="link">
              <span>{link.text}</span>
            </Link>
          </NextLink>
        ))}
      </Box>
    </>
  );
};
