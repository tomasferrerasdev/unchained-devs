import { Container } from '@mui/material';
import type { NextPage } from 'next';
import {
  Hero,
  Layout,
  Mentee,
  Mentor,
  Recidivism,
  Unemployment,
} from '../components';

const Home: NextPage = () => {
  return (
    <Layout
      title={'Unchained Devs_'}
      description={
        'We are a group of software developers helping aspiring developers who are either formerly incarcerated or from an economically disadvantaged background. We are creating opportunities in tech for people who might not otherwise get an opportunity.'
      }
    >
      <Container maxWidth={'xl'} disableGutters={true}>
        <Hero />
        <Recidivism />
        <Unemployment />
      </Container>
      <Mentee />
      <Mentor />
    </Layout>
  );
};

export default Home;
