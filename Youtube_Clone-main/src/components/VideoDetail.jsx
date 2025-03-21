import { useEffect, useState } from 'react'
import { fetchFromApi } from '../utils/api'
import { useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Box, Stack, Typography } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {Videos} from './'

const VideoDetail = () => {

    const { id } = useParams();

    const [ videos, setVideos ] = useState([]);
    const [ videoDetail, setVideoDetail ] = useState(null)

    console.log(videos)
    console.log(videoDetail)

    useEffect(()=>{
        fetchFromApi(`search?part=id,snippet&type=video&relatedToVideoId=${id}`)
        .then(({data})=>setVideos(data.items))
        .catch((err)=>{console.log(err)})
    },[])

    useEffect(()=>{
        fetchFromApi(`videos?part=contentDetails,snippet,statistics&id=${id}`)
        .then(({data})=>setVideoDetail(data.items[0]))
    },[id])

    return (
        <Stack spacing={3}
        sx={{
            position:'relative',
            justifyContent:'space-between',
            maxHeight: {md:'90vh'},
            flexDirection : { md : 'row'}
        }}>
            <Box color='white'>
                <Box 
                width='100%'
                sx={{
                    width:{ md:'65vw'}
                }}>
                    <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} width='100%' height='450px' controls/>
                </Box>
                <Typography variant='h5' margin='10px 0'>{videoDetail?.snippet?.title}</Typography>
                <Typography variant='body1'>{videoDetail?.snippet?.channelTitle} <span><CheckCircleIcon sx={{height:'16px'}}/></span></Typography>
                <Typography variant='caption' color='gray'>{videoDetail?.statistics?.viewCount} Views</Typography>
            </Box>
            <Box sx={{
                overflowY:{md:'scroll'},
                overflowX:'hidden'
            }}>
                <Videos videos={videos}/>
            </Box>
        </Stack>
    )
}

export default VideoDetail;
