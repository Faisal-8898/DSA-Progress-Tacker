import { useState } from 'react'
import { Button } from '@mui/material';


export const MultiButton = () =>{
    return(
        <div className='allButtons'>
            <div className='leftbtn'>
            <Button className='addTitle' variant="contained">Add a Title</Button>
            <Button className='addRow' variant="contained">Add a Row</Button>
            </div>
            <div className='rightbtn'>
            <Button className='deleteRow' variant="contained" color='error'>Delete a Title</Button>
            <Button className='addRow' variant="contained" color='error'>Delete a Row</Button>
            </div>
        </div>
    )
}cv