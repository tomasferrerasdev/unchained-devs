import { Box, Container } from '@mui/material';
import { Layout } from '../components/layout/Layout';

const contact = () => {
  return (
    <Layout title={'Unchained devs | Contact'} description={''}>
      <Container maxWidth={'xl'} disableGutters={true}>
        <Box height="calc(100vh - 222px)" sx={{ backgroundColor: 'red' }}></Box>
      </Container>
    </Layout>
  );
};

export default contact;
