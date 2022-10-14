import {
  Grid,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';
import { FC } from 'react';

interface Props {
  options: { optionLabel: string; value: string }[];
  label: string;
}

export const FormRadio: FC<Props> = ({ options, label }) => {
  return (
    <Grid item xs={8}>
      <Typography variant="body2" fontWeight={500} mb={0.5}>
        {label}
      </Typography>
      <RadioGroup>
        {options.map((option, index) => (
          <FormControlLabel
            key={index}
            control={<Radio />}
            color="secondary"
            label={option.optionLabel}
            value={option.value}
          />
        ))}
      </RadioGroup>
    </Grid>
  );
};
