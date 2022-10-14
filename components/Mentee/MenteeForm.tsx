import { Grid, Box, Typography } from '@mui/material';
import { FormInput, FormRadio } from '../ui';
import { experience, requirement } from './menteeFormData';

export const MenteeForm = () => {
  return (
    <Grid container columnSpacing={2.375} rowSpacing={3.188} p={1}>
      <FormInput label={'Email'} size={4} />
      <FormInput label={'Your name'} size={4} />
      <FormInput label={'Your location'} size={8} />
      <FormRadio
        options={requirement}
        label={
          'What Unchained Devs requirement for membership do you fall under?'
        }
      />
      <FormInput label={'List your convictions if comfortable:'} size={8} />
      <FormRadio
        options={experience}
        label={' What is your level of experience?'}
      />
      <FormInput label={'How did you hear about Unchained Devs?'} size={8} />
      <FormInput label={'Anything else you want us to know?'} size={8} />
      <Grid item xs={8}>
        <Box
          sx={{
            backgroundColor: '#FF9900',
            height: '50px',
            cursor: 'pointer',
            borderRadius: '4px',
            width: 'fit-content',
          }}
          display="flex"
          justifyContent="left"
          alignItems="center"
          mt={1}
        >
          <Typography variant="body2" fontWeight={500} px={1}>
            Become a Mentee
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};
