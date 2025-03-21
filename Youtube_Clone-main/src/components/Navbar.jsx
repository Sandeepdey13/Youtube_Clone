import { AppBar } from '@mui/material';
import { logo } from '../utils/constants';
import { SearchBox } from './';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar sx={{
        flexDirection : 'row',
        justifyContent : 'space-between',
        backgroundColor : 'black',
        alignItems : 'center',
        padding: '0 15px',
        height:'10vh',
        position : 'sticky',
        top : '0'
    }}>
      <Link to='/'>
        <img src={logo} alt="logo" height={40}/>
      </Link>
      <SearchBox/>
    </AppBar>
  )
}

export default Navbar
