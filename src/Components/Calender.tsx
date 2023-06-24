
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import React, { useState } from 'react';

export const Calender = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null)
    console.log({ selectedDate })
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar  sx={{ width:'100%',border:'1px solid',padding:'5px' ,backgroundColor:'white'}} 
             value={selectedDate} onChange={(newValue) => { setSelectedDate(newValue) }} showDaysOutsideCurrentMonth 
            />
        </LocalizationProvider>

    );
}
export default Calender