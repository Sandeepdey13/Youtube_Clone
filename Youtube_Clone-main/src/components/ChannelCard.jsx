import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { demoThumbnailUrl, demoChannelTitle } from "../utils/constants";

const ChannelCard = ({channel, background, marginTop}) => (
    <Card sx={{height:'270px', width:'320px', backgroundColor:background, display:"flex", alignItems:'center', justifyContent:'center',margin:'auto',marginTop}} >
        <Link to={`/channels/${channel.id?.channelId}`}>
            <CardMedia image={channel.snippet?.thumbnails?.high?.url || demoThumbnailUrl} sx={{ height:'160px', width:'160px', borderRadius:'50%'}}/>
            <CardContent sx={{display:"flex", alignItems:'center', flexDirection:'column'}}>
                <Typography variant='body2' sx={{color:'white'}}>
                    {channel.snippet?.title?.slice(0,60) || demoChannelTitle.slice(0,60)}
                    <span> <CheckCircleIcon sx={{height:'12px', color:'gray'}}/></span>
                </Typography>
                <Typography variant="caption" color='gray'>{channel.statistics?.subscriberCount? `${channel.statistics.subscriberCount} Subscribers` : null}</Typography>
            </CardContent>
        </Link>
    </Card>
)

    


export default ChannelCard
