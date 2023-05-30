import { Stack } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'

export const Features = () => {
  const [image, setImage] = useState<any | {}>({});
  const [id, setId] = useState<any>();

  
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then(res => { setImage(res.data) })
      .catch(err => { console.log(err) })
  }, [id])

  return (
    <Stack className='Datafetch' sx={{alignItems:'center', display:'flex', textAlign:'center' ,padding:'20px auto'}} >
      <label >Enter Id No</label>
      <input width='50' id='Enter Id No'  value={id} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setId(e.target.value)}/>
    
      {
        <div >
            {image.title}
            </div>}
    </Stack>
  )
}

export default Features
