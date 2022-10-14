import { Box, Grid, Typography } from '@mui/material';
import { FormInput, FormRadio } from '../ui';
import { location, techStack } from './mentorFormData';

export const MentorForm = () => {
  return (
    <Grid container columnSpacing={2.375} rowSpacing={3.188} p={1}>
      <FormInput label={'Email'} size={4} />
      <FormInput label={'Your name'} size={4} />
      <FormInput label={'How did you hear about Unchained Devs?'} size={8} />
      <FormRadio options={location} label={'Do you live in the US?'} />
      <FormInput label={'Location'} size={8} />
      <FormInput label={'Current company / position?'} size={8} />
      <FormRadio options={techStack} label={'What is your tech stack?'} />
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
            Become a Mentor
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};
