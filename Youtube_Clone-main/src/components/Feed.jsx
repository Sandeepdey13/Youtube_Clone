import { Stack, Typography, Box } from '@mui/material'
import { useEffect, useState } from 'react'
import { Sidebar, Videos } from './'
import { fetchFromApi } from '../utils/api'

const Feed = () => {

  const [ selectedCategory, setSelectedCategory ] = useState('New')
  const [ videos, setVideos ] = useState([]);

  useEffect(()=>{
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
    .then(({data})=>setVideos(data.items))
  },[selectedCategory])

  const handleClick = (category) => {
    setSelectedCategory(category)
  }
  
  return(
    <Stack 
    height='88vh'
    sx={{
      flexDirection : { sm:'row'},
      overflow:{sm:'hidden'}
    }}
    >
      <Box
      padding='2px 8px'
      borderRight='1px solid #80808087'
      color='white'
      flexBasis='15%'
      >
        <Sidebar selectedCategory={selectedCategory} handleClick={handleClick}/>
      </Box>
      <Box 
      flexBasis='90%'
      sx={{
        overflowY:'scroll'
      }}
      >
        <Typography variant='h4' color='red' fontWeight='bold' textAlign='center' pb={2}><span style={{color:'white'}}>{selectedCategory}</span> Videos</Typography>
        <Videos videos={videos}/>
      </Box>
    </Stack>
  )

}

export default Feed 