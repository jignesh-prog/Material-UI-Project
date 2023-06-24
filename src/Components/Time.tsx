import { Box, Stack } from '@mui/material';
import { MultiInputTimeRangeField } from '@mui/x-date-pickers-pro/MultiInputTimeRangeField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';

import { useState } from 'react';
const date1 = ('15:30');
const date2 = ('18:30');

export const  Time= () => {
  const [selectTime,setSelectTime] = useState<any | string>(null)
  console.log(`You have selected ${selectTime}`)
  return (<>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={[
          'MultiInputTimeRangeField']
       }
      >
 <DemoItem
          label="Preferred time"
          component="MultiInputTimeRangeField"
    
        >
          <MultiInputTimeRangeField bgcolor={'white'} border={'black'} defaultValue={[date1, date2]} onChange = {(newValue) => {setSelectTime(newValue)}} />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
    <Box sx={{display:'grid', gridTemplateColumns:'1fr 1fr',marginTop:'20px',backgroundColor:'white'}}>
<Stack sx={{display:'grid',marginLeft:'0',justifyContent:'left'}}>Price</Stack>
<Stack sx={{display:'grid',justifyContent:'right'}}>Hours</Stack>
    </Box>
    </>
  );
}
export default  Time