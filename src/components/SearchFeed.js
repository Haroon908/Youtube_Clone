import {useState,useEffect} from 'react'
import { Box,Typography } from '@mui/material'
import {Videos} from './'
import { FetchFromAPI } from '../utils/FetchFromAPI'
import { useParams } from 'react-router-dom'

const SearchFeed = () => {

  // useSate hook to change category dynamically
  const [videos,setVideos] = useState([]);
  const {searchTerm} = useParams();

  // useEffect hook to dynamically render data whenever page renders
  useEffect(()=>{
    FetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data)=>{setVideos(data.items)})
  },[searchTerm])

  return (
    <Box p={2} sx={{ overflowY:'auto',height:'90vh',flex:2}}>
        <Typography variant="h4" fontWeight='bold' mb={2} sx={{color:'white'}}>
          Search Results for:
          <span style={{color:'#F31503'}}> {searchTerm}</span> videos 
        </Typography>
        <Videos videos={videos}/>
      </Box>
  )
}

export default SearchFeed