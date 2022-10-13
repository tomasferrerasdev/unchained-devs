import { Box, Typography } from '@mui/material';
import Image from 'next/image';

export const DonateInfo = () => {
  return (
    <Box
      px={1}
      display="flex"
      flexDirection="column"
      gap={0.5}
      alignItems="flex-start"
      className="section"
    >
      <Image
        src="/images/minified-logo.svg"
        alt="unchained devs logo"
        height={78.94}
        width={100}
      />
      <Typography variant="body2">
        <span className="bold">Account owner:</span> Underdog Devs, Inc.
      </Typography>
      <Box>
        <Typography variant="body2">
          <span className="bold">Bank:</span> Evolve Bank & Trust,
        </Typography>
        <Typography variant="body2">6070 Poplar Ave, Suite 200,</Typography>
        <Typography variant="body2">Memphis, TN 38119</Typography>
      </Box>
      <Typography variant="body2">
        <span className="bold">Account number:</span> 9800363760
      </Typography>
      <Typography variant="body2">
        <span className="bold">Routing number:</span> 084106768
      </Typography>
      <Box
        sx={{ backgroundColor: '#FF9900', height: '53px' }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        mt={1}
      >
        <Typography variant="body2" fontWeight={800} px={1}>
          dontate with paypal
        </Typography>
      </Box>
    </Box>
  );
};
