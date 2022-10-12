import { Box, Typography } from '@mui/material';
import { Layout } from '../components';

const Custom404 = () => {
  return (
    <>
      <Layout title={'Unchained devs | 404'} description={''}>
        <Box
          sx={{
            height: 'calc(100vh - 240px)',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography fontSize={120}>404</Typography>
          <Typography fontSize={50}>not found</Typography>
        </Box>
      </Layout>
    </>
  );
};

export default Custom404;
