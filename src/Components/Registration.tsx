import {
  Box, Button, Checkbox,
  FormControlLabel,
  Paper, Stack, TextField,
  Typography, 
} from '@mui/material'
import { useNavigate } from 'react-router-dom';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import Calender from './Calender';

export const Registration = () => {
  const navigate = useNavigate();

  return (<Box className='parent'>
    <Box className='parent1' sx={{
      height: 'fit-content',
      alignItems: "center"
    }}>
      <Paper sx={{ border: 'dark', padding: '0 20px' }}>
        <Box sx={{ paddingLeft: '30px' }}>
          <Box textAlign="left" sx={{ width: '100%', }}>
            <Button onClick={() => navigate(-1)} startIcon={<ArrowLeftIcon/>} variant="contained" size='small' sx={{ marginBottom: '40px', bgcolor: 'grey', display: 'absolute', left: '0', bottom: '0', colors: 'black', fontSize: '10px' }}>
             Back to webpage
            </Button>
          </Box>
          <Stack sx={{ spacing: '2' }}>
            <Typography variant='h6' sx={{ textAlign: "left", fontWeight: '500px', marginBottom: '15px' }}>
              Registration form for personal Consultancy
            </Typography>
            <Typography variant='body1' color='error' sx={{ textAlign: 'left', width: '50%', fontWeight: '200px', marginBottom: '35px' }}>
              Please fill the correct details as per the passport/License. Please make sure you provide your current correct medical details.
            </Typography>
          </Stack>
          <Typography variant="h6" sx={{ textAlign: "left", marginBottom: '25px' }}>
            1. General details
          </Typography>
          <Stack spacing={4} >
            <TextField label='FirstName' variant='standard' >
              FistName
            </TextField>
            <TextField label='LastName' variant='standard'>
              LastName
            </TextField>
            <Stack sx={{ display: 'inline' }}>
              <TextField label='Email Id' variant='standard' sx={{ width: '50%', paddingRight: '15px' }}>
                Email Id
              </TextField>
              <TextField label='Contact No' variant='standard' sx={{ width: '50%' }} >
                Contact No
              </TextField>
            </Stack>
            <TextField label='Residential Add' variant='standard'>Residential Add</TextField>
            <Stack sx={{ display: 'inline' }}>
              <TextField label='City' variant='standard' sx={{ width: '50%', paddingRight: '15px' }}>
                City
              </TextField>
              <TextField label='Suburb/State' variant='standard' sx={{ width: '50%' }} >
                Suburb/State
              </TextField>
            </Stack>
            <Stack sx={{ display: 'inline' }}>
              <TextField label='Postcode/Area Code' variant='standard' sx={{ width: '50%', paddingRight: '15px' }}>
                Postcode/Area Code
              </TextField>
              <TextField label='Country' variant='standard' sx={{ width: '50%' }}>
                Country
              </TextField>
            </Stack>
          </Stack>
          <Typography variant="h6" sx={{ textAlign: "left", margin: '35px 0' }}>
            2. Emergency Contact Details
          </Typography>
          <Stack spacing={4} >
            <TextField label='FirstName' variant='standard' >
              FistName
            </TextField>
            <TextField label='LastName' variant='standard'>
              LastName
            </TextField>
            <Stack sx={{ display: 'inline' }}>
              <TextField label='Who is s/he for you?' variant='standard' sx={{ width: '50%', paddingRight: '15px' }}>
                Who is s/he for you?
              </TextField>
              <TextField label='Contact No' variant='standard' sx={{ width: '50%' }}>
                Contact No
              </TextField>
            </Stack>
            <Typography variant="h6" sx={{ textAlign: "left" }}>
              3. Please detail the main purpose for your consultation, testing and/or goals you want to achieve.
            </Typography>
            <TextField variant='standard'></TextField>
            <TextField variant='standard'></TextField>
            <TextField variant='standard'></TextField>
            <Typography variant="h6" sx={{ textAlign: "left", margin: '35px 0' }}>
              4. Medical details
            </Typography>
            <Typography variant="subtitle2" color="error" sx={{ textAlign: "left", margin: '25px 0' }}> Please detail the main purpose for your consultation, testing and/or goals you want to achieve.
              Plesae provide you current medical details as per your current health state as background context in order to effectvely work with you.
            </Typography>
            <Typography variant="h6" sx={{ textAlign: "left", margin: '35px 0' }}>
              Usual Gp Name and Clinic
            </Typography>
            <TextField variant='standard'></TextField>
            <Typography variant="h6" sx={{ textAlign: "left", margin: '35px 0' }}>
              Have you ever had adverse effect (side effects or allergy) to any medication, suppements,herbs or foods? if so, please describe
            </Typography>
            <TextField variant='standard'></TextField>
            <Typography variant="h6" sx={{ textAlign: "left", margin: '35px 0' }}>
              Do you have any medical condition that you are currently under treatment for?
            </Typography>
            <TextField variant='standard'></TextField>
            <Typography variant="h6" sx={{ textAlign: "left", margin: '35px 0' }}>
              Are you currently using any medication? if so, please list.
            </Typography>
            <TextField variant='standard'></TextField>
            <Typography variant="h6" sx={{ textAlign: "left", margin: '35px 0' }}>
              Afre you taking any supplements, herbs or specialised food? if so please list?
            </Typography>
            <TextField variant='standard'></TextField>
            <Typography variant="h6" sx={{ textAlign: "left", margin: '35px 0' }}>
              Please list any previous health condition that you think we should aware of
            </Typography>
            <TextField variant='standard'></TextField>
            <Typography variant="h6" sx={{ textAlign: "left", margin: '25px 0' }}>
              5. Acknowledgement
            </Typography>
          </Stack>
          <Stack direction='row' spacing={2} sx={{ padding: '25px 0' }}>
            <FormControlLabel control={<Checkbox />} label='' sx={{ marginBottom: "90px" }} />
            <Typography variant='subtitle2' color="error" sx={{ textAlign: 'left', padding: '25px 0' }}>
              The service provided to you is with the best intention to aid your health and well-being.Your consultation or session,
              depending on the services you have chosen,well be with doctor,health professional,health or lifystyle coach,health
              facilitator or a knowledgeale practitioner. Hence the consultacy may or may not have an academic or medical background
              but experience in the related field.
            </Typography>
          </Stack>
          <Stack direction='row' spacing={2} sx={{ padding: '25px 0' }}>
            <FormControlLabel control={<Checkbox />} label='' sx={{ marginBottom: "90px" }} />
            <Typography variant='subtitle2' color="error" sx={{ textAlign: 'left', padding: '25px 0' }}>
              I confirm the details I give are true and correct. I have discussed my true identity and the tru purpose of my consultation
              and I am acting in my capicity as a private citizen. I realise that if I give false information before or during this consultation
              then no information from before or during this consultation can be used in any way. I understand that my doctor/health professional/health
              facilitator will kepp the contents of my consulation confidential and that I agree to do the same.
            </Typography>
          </Stack>
          <Stack direction='row' spacing={2} sx={{ padding: '25px 0' }}>
            <FormControlLabel control={<Checkbox />} label='' sx={{ marginBottom: "90px" }} />
            <Typography variant='subtitle2' color="error" sx={{ textAlign: 'left', padding: '25px 0' }}>
              I have read and agree to the Right,Privacy & Consent commitments
            </Typography>
          </Stack>
          <Stack direction='row' spacing={2} sx={{ justifyContent: 'space-between', padding: '20px 0', textAlign: 'center', borderRadius: ' 10PX' }} >
            <Button sx={{padding: '10px', textAlign: 'center', bgcolor: 'black', color: 'white' }}>Email  Request</Button>
            <Button sx={{ padding: '10px', textAlign: 'center', bgcolor: 'black', color: 'white' }}>Request to book</Button>
            <Button sx={{ padding: '10px', textAlign: 'center', bgcolor: 'black', color: 'white' }}>Request to Pay</Button>
          </Stack>
        </Box>
      </Paper>
    </Box>
    <Box className='parent2' >
      <Paper sx={{width:'auto',height:'auto'}}>
        <Calender/>
      </Paper>
    </Box>
  </Box>
  )
}

export default Registration