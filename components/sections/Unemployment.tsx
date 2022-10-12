import { Grid, Typography } from '@mui/material';

export const Unemployment = () => {
  return (
    <Grid container className="section" p={1}>
      <Grid item xs={12} md={8} display="flex" flexDirection="column" gap={2}>
        <Typography variant="h1">Related and Poverty</Typography>
        <Typography variant="body2">
          Employment has long been recognized as having a negative correlation
          with crime (Uggen, 1999; Uggen et al., 2005).
        </Typography>
        <Typography variant="body2" fontWeight={800} className="underline">
          employment recidivism on <span>ebpsociety.org</span>
        </Typography>

        <Typography variant="body2">
          Researchers also have found that employment is associated with reduced
          recidivism(Skardhamar & Telle, 2012). The strongest predictor for
          recidivism: poverty + unemployment.
        </Typography>
        <Typography variant="body2" fontWeight={800} className="underline">
          poverty state capital and recidivism among women offenders on{' '}
          <span>ojp.gov</span>.
        </Typography>
      </Grid>
    </Grid>
  );
};
