import { Container, Grid, Typography, Box } from '@mui/material';

export const Mentee = () => {
  return (
    <Box sx={{ backgroundColor: '#FF9900' }}>
      <Container maxWidth={'xl'} disableGutters={true}>
        <Grid
          container
          className="section"
          py={5}
          px={1}
          alignItems="center"
          spacing={1}
        >
          <Grid item xs={12} md={6}>
            <Typography variant="h1">What is a Mentee?</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body2">
              Our mentees are aspiring software engineers from either
              disadvantaged backgrounds or are formerly incarcerated. They are
              ambitious and determined people learning the ins-and-outs of the
              software industry in order to land full time offers.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
