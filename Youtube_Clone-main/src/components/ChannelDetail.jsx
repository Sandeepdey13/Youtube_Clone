import { Box } from '@mui/material'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFromApi } from '../utils/api';
import { ChannelCard, Videos } from './'

const ChannelDetail = () => {

    const {id} = useParams();
    
    const [ channelInfo, setChannelInfo ] = useState([])
    const [ videos, setVideos ] = useState([])

    useEffect(()=>{
        fetchFromApi(`channels?part=snippet,statistics&id=${id}`)
        .then(({data})=>setChannelInfo(data.items[0]))
    },[])

    useEffect(()=>{
        fetchFromApi(`search?channelId=${id}&part=snippet,id`)
        .then(({data})=>setVideos(data.items))
    },[])

    return (
    <>
        <Box sx={{
        background: 'rgb(251,33,235)',
        background: 'linear-gradient(90deg, rgba(251,33,235,1) 0%, rgba(0,206,255,1) 100%)',
        height: '200px', 
        width: '100vw'
        }}/>
        <ChannelCard channel={channelInfo} background='transparent' marginTop='-100px'/>
        <Videos videos={videos}/>
    </>
    )
}

export default ChannelDetail;
