import { Box, Typography, Container } from '@mui/material';
import { NextPage } from 'next';
import { DonateInfo, Layout } from '../components';

const donate: NextPage = () => {
  return (
    <Layout title={'Unchained devs | Donate'} description={''}>
      <Container maxWidth={'xl'} disableGutters={true}>
        <Box
          display="flex"
          flexDirection="column"
          sx={{ height: 'calc(100vh - 100px)' }}
          gap={1.5}
        >
          <Box pt={6}>
            <Typography variant="h1">We appreciate your</Typography>
            <Typography variant="h1">commitment to helping</Typography>
            <Typography variant="h1">us combat recidivism</Typography>
          </Box>
          <Box display="flex">
            <Typography variant="body2" flex={0.5}>
              Your donation will directly help supply mentees in our program
              with much needed equipment to aid them in their learning and help
              fund Project Underdog.
            </Typography>
          </Box>
        </Box>
        <DonateInfo />
      </Container>
    </Layout>
  );
};

export default donate;
