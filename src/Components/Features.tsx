import { Stack,Box } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Image } from './Image'
export const Features = () => {
  const [image, setImage] = useState<any | {}>({});
  const [id, setId] = useState<any>();


  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then(res => { setImage(res.data) })
      .catch(err => { console.log(err) })
  }, [id])

  return (
    <>
    <Stack className='Datafetch' sx={{ alignItems: 'center', display: 'flex',
     textAlign: 'center', padding: '20px auto',position:'absolute', left:'500px' }} >
      <label >Enter Id No</label>
      <input width='50' id='Enter Id No' value={id} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setId(e.target.value)} />

      {
        <div >
          {image.title}
        </div>}
    </Stack>
    <Box  sx={{width:'100%',border:'1px solid'}}>
    <Image />
  </Box>
  </>
  )
}

export default Features
