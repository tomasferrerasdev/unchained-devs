import { Grid, TextField, Typography } from '@mui/material';
import { FC } from 'react';

interface Props {
  label: string;
  size: number;
}

export const FormInput: FC<Props> = ({ label, size }) => {
  return (
    <Grid item xs={size}>
      <Typography variant="body2" fontWeight={500} mb={0.5}>
        {label}
      </Typography>
      <TextField />
    </Grid>
  );
};
