import Delete from '@mui/icons-material/Delete'
import React from 'react'

function Button() {
  return (
    <>
      <div style={{ display: "flex ", justifyContent: "space-around" }}>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </div>
      <div style={{ display: "flex ", justifyContent: "space-around" ,marginTop : '20px'}}>
        <Button 
        color="secondary"
        startIcon={<Delete/>}
        >Secondary</Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="outlined" color="error">
          Error
        </Button>
      </div>
      
    </>
  )
}

export default Button
