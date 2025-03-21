import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom'
import { demoThumbnailUrl, demoChannelTitle, demoVideoTitle, demoVideoUrl, demoChannelUrl } from '../utils/constants';


const VideoCard = ({video : { id : {videoId}, snippet} }) => (
    <Card sx={{height:'270px', width:'320px', backgroundColor:'#1e1e1e'}} >
        <Link to={ videoId ? `/videos/${videoId}` : demoVideoUrl }>
            <CardMedia image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} sx={{ height:'180px', width:'350px'}}/>
        </Link>
        <CardContent>
            <Link to={ videoId ? `/videos/${videoId}` : demoVideoUrl }>
                <Typography variant='body2' sx={{color:'white'}}>{snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}</Typography>
            </Link>
            <Link style={{alignItems:'center', display:'flex'}} to={ snippet?.channelId? `/channels/${snippet?.channelId}` : demoChannelUrl}>
                <Typography variant='caption' sx={{color:'gray'}}>{snippet?.channelTitle.slice(0,60) || demoChannelTitle.slice(0,60)}</Typography>
                <CheckCircleIcon sx={{height:'12px', color:'gray'}}/>
            </Link>
        </CardContent>
    </Card>
)

export default VideoCard;
