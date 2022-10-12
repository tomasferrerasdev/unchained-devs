import { Container, Grid, Typography } from '@mui/material';

export const Mentor = () => {
  return (
    <Container maxWidth={'xl'} disableGutters={true}>
      <Grid
        container
        className="section"
        alignItems="center"
        px={1}
        spacing={1}
      >
        <Grid item xs={12} md={6}>
          <Typography variant="h1">What is a Mentor?</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="body2">
            Our mentors are industry experts. They are experienced software
            engineers from all over the industry who are committed to guiding
            the Underdog Devs. They have bi-weekly meetings with their mentees
            where they offer support in the form of encouragement, interview
            prep, resume analysis, and coding practice. The mentors develop
            relationships with the potential for referrals as their mentee
            develops and becomes job ready.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};
