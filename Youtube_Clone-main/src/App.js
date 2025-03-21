import { Route, Routes } from "react-router-dom";
import { ChannelDetail, Feed, Navbar, VideoDetail } from './components'

const App = () => (
    <>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Feed/>}/>
            <Route path="/videos/:id" element={<VideoDetail/>}/>
            <Route path="/channels/:id" element={<ChannelDetail/>}/>
            <Route path="/" element={<Feed/>}/>
            <Route path="/" element={<Feed/>}/>
        </Routes>
    </>
)

export default App;
