import { categories } from "../utils/constants"
import { Stack } from "@mui/material"

const Sidebar = ({selectedCategory, handleClick}) => (
    <Stack 
    direction='row'
    sx={{
        height : { sx : 'auto', sm : '100%'},
        padding : { sm : '0px 4px'},
        flexDirection : { sm : 'column'},
        justifyContent : "space-between",
        overflowX : 'auto'
    }}
    >
      {
        categories.map((category)=>{
          return(
            <button style={{
              backgroundColor : selectedCategory == category.name ? 'red' : 'transparent',
              display : 'flex',
              alignItems :'center',
              borderRadius : '20px',
              padding : '3px 14px',
              border : 'none',
              color : 'white',
              cursor: 'pointer'
            }}
            onClick={()=>{handleClick(category.name)}}
            key={category.name}
            >
              <span style={{
                marginRight : '8px',
                height : 'fit-content',
                color : selectedCategory == category.name ? 'white' : 'red'
              }}>{category.icon}</span>
              <span>{category.name}</span>
            </button>
          )
        })
      }
    </Stack>
)

export default Sidebar
