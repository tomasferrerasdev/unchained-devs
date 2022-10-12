import { Grid, List, ListItem, Typography } from '@mui/material';

export const Recidivism = () => {
  return (
    <Grid container className="section" padding={1}>
      <Grid item xs={12} md={8} display="flex" flexDirection="column" gap={2}>
        <Typography variant="h1">Recidivism</Typography>
        <Typography variant="body2">
          According to data from the U.S. Bureau of Justice Statistics (BJS),
          67.8% of released state prisoners were arrested for a new crime within
          three years, and 76.7% were arrested within five. Reducing recidivism
          not only protects society at large, but also improves the life quality
          of individual ex-prisoners.
        </Typography>
        <Typography variant="body2">
          Incarceration rates in the U.S. began increasing dramatically in the
          1990s. The U.S. has the highest prison population of any country,
          comprising 25% of the world’s prisoners.
        </Typography>
        <Typography variant="body2" fontWeight={800}>
          Out of a sample of 401,288 prisoners state prisoners released in 2005:
        </Typography>
        <List>
          <ListItem disablePadding={true}>
            68% of released prisoners were arrested within 3 years.
          </ListItem>
          <ListItem disablePadding={true}>
            79% of released prisoners were arrested within 6 years.
          </ListItem>
          <ListItem disablePadding={true}>
            83% of released prisoners were arrested within 9 years.
          </ListItem>
        </List>
        <Typography variant="body2" fontWeight={800}>
          recidivism and reentry on{' '}
          <span className="underline">prisonpolicy.org</span> recidivism the
          ultimate guide on <span className="underline">prisoninsight.com</span>
        </Typography>
      </Grid>
    </Grid>
  );
};
