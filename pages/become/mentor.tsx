import { Container, Grid, Typography, Box } from '@mui/material';
import { NextPage } from 'next';
import { Layout } from '../../components';

const mentor: NextPage = () => {
  return (
    <Layout
      title={'Unchained Devs_ / Mentor'}
      description={
        'We are a group of software developers helping aspiring developers who are either formerly incarcerated or from an economically disadvantaged background. We are creating opportunities in tech for people who might not otherwise get an opportunity.'
      }
    >
      <Container maxWidth={'xl'} disableGutters={true}>
        <Grid container className="section" p={1} xs={8} spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="body2" fontWeight={500} mb={0.5}>
              Email
            </Typography>
            <Box sx={{ backgroundColor: '#E1E1E1', height: '50px' }} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body2" fontWeight={500} mb={0.5}>
              Your name
            </Typography>
            <Box sx={{ backgroundColor: '#E1E1E1', height: '50px' }} />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" fontWeight={500} mb={0.5}>
              Your location
            </Typography>
            <Box sx={{ backgroundColor: '#E1E1E1', height: '50px' }} />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" fontWeight={500} mb={0.5}>
              Please list your convictions if comfortable:
            </Typography>
            <Box sx={{ backgroundColor: '#E1E1E1', height: '50px' }} />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" fontWeight={500} mb={0.5}>
              How did you hear about Unchained Devs?
            </Typography>
            <Box sx={{ backgroundColor: '#E1E1E1', height: '50px' }} />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" fontWeight={500} mb={0.5}>
              Anything else you want us to know?
            </Typography>
            <Box sx={{ backgroundColor: '#E1E1E1', height: '50px' }} />
          </Grid>
          <Grid item xs={4}>
            <Box
              sx={{ backgroundColor: '#FF9900', height: '60px' }}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Typography variant="body2" fontWeight={800}>
                leave your chains
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default mentor;
