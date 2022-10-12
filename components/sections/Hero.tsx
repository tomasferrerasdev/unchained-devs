import { Box, Grid, Link, Typography } from '@mui/material';
import Image from 'next/image';
import NextLink from 'next/link';

export const Hero = () => {
  return (
    <>
      <Grid
        container
        spacing={3}
        height="calc(100vh - 140px)"
        padding={1}
        justifyContent="space-between"
        className="section"
      >
        <Grid item xs={12} md={6}>
          <Box
            display="flex"
            justifyContent="center"
            height="100%"
            flexDirection="column"
            gap={3.125}
          >
            <Box>
              <Typography variant="h1">Unchained</Typography>
              <Typography variant="h1">devs_</Typography>
            </Box>
            <Typography variant="body2">
              We are a group of software engineers helping aspiring developers
              who are either formerly incarcerated or from an economically
              disadvantaged background. We are creating opportunities in tech
              for people who might not otherwise get an opportunity.
            </Typography>
            <NextLink href="/ " passHref>
              <Link color="secondary">
                <Typography
                  fontWeight={800}
                  sx={{
                    fontSize: { xs: '24px', sm: '32px' },
                    textDecoration: 'underline',
                    textDecorationColor: '#FF9900',
                  }}
                >
                  leave your chains
                </Typography>
              </Link>
            </NextLink>
          </Box>
        </Grid>
        <Grid item sx={{ display: { xs: 'none', md: 'block' } }} md={4}>
          <Box
            sx={{
              height: '100%',
              position: 'relative',
            }}
          >
            <Image
              src="/images/people.png"
              layout="fill"
              objectFit="cover"
              alt="people image"
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
