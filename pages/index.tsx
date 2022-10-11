import type { NextPage } from 'next';
import { Layout } from '../components/Layout/Layout';

const Home: NextPage = () => {
  return (
    <Layout
      title={'Unchained Devs_'}
      description={
        'We are a group of software developers helping aspiring developers who are either formerly incarcerated or from an economically disadvantaged background. We are creating opportunities in tech for people who might not otherwise get an opportunity.'
      }
    ></Layout>
  );
};

export default Home;
