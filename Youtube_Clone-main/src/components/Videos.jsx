import { Box, Stack } from '@mui/material'
import { VideoCard } from './'
import { ChannelCard } from './'

const Videos = ({videos}) => (
    <Stack direction='row' flexWrap='wrap' justifyContent='center' gap={2} color='white'>
        {
            videos.map((video, idx)=>(
                <Box key={idx}>
                    {video.id.videoId && <VideoCard video={video}/>}
                    {video.id.channelId && <ChannelCard channel={video} background='#1e1e1e'/>}
                </Box>
            ))
        }
    </Stack>
)   

export default Videos;
