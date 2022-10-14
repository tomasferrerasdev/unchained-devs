import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';
import { Layout } from '../components/layouts/Layout';

const contact = () => {
  return (
    <Layout title={'Unchained devs | Contact'} description={''}>
      <Container maxWidth={'xl'} disableGutters={true}>
        <Box display="flex">
          <Box
            height="100%"
            flex={1}
            py={3}
            px={1}
            display="flex"
            flexDirection="column"
            gap={1}
          >
            <Box>
              <Typography variant="h1">Send us an email</Typography>
              <Typography variant="h1">to receive more</Typography>
              <Typography variant="h1">information</Typography>
            </Box>
            <Box>
              <Typography variant="body2">
                Someone from the intake team will reach out.
              </Typography>
              <Typography variant="body2" mb={0.5}>
                You can reach the team directly at:
              </Typography>
            </Box>
            <Box display="flex" gap={0.5} alignItems="center">
              <Image
                src="/images/minified-logo.svg"
                width={49}
                height={38.68}
                alt="unchained devs logo"
              />
              <Typography
                variant="body2"
                fontWeight={800}
                className="underline"
              >
                <span>hellotomasdev@gmail.com</span>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
};

export default contact;
