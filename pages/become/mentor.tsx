import { Container, Box, Typography } from '@mui/material';
import { Layout, MentorForm } from '../../components';

const mentor = () => {
  return (
    <Layout
      title={'Unchained Devs_ / Mentor'}
      description={
        'We are a group of software developers helping aspiring developers who are either formerly incarcerated or from an economically disadvantaged background. We are creating opportunities in tech for people who might not otherwise get an opportunity.'
      }
    >
      <Container maxWidth={'xl'} disableGutters={true}>
        <Box py={3}>
          <Typography
            variant="h1"
            px={0.5}
            mb={3}
            sx={{ textDecoration: 'underline', textDecorationColor: '#FF9900' }}
          >
            Become a Mentor
          </Typography>
          <MentorForm />
        </Box>
      </Container>
    </Layout>
  );
};

export default mentor;
