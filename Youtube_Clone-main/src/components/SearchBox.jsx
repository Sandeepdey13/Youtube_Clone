import { Box } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';

const SearchBox = () => {

    const [ searchValue, setSearchValue ] = useState("");

    const changeHandler = (e) => {
        setSearchValue(e.target.value)
    }

    return (
        <Box sx={{
            backgroundColor : 'white',
            height : 'fit-content',
            borderRadius : '20px',
            padding : '4px 10px'
        }}>
            <form style={{
                display : 'flex',
                alignItems : 'center',
            }}>
                <input value={searchValue} onChange={changeHandler}/>
                <SearchIcon sx={{
                    color : 'black'
                }}/>
            </form>
        </Box>
    )
}

export default SearchBox
