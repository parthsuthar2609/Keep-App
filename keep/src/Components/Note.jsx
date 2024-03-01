import React from 'react'
import "./Note.css";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';



const Note = (props) => {
 
     const deleteNote = () =>{
        props.deleteItem(props.id);
     }

    return (
        <>
        <div className='All-contents'>
            <div className='create'>
                <h1>{props.title}</h1>

                <div className='text-area'>
                    <p>{props.content}</p>
                </div>
                <IconButton aria-label="delete" size="large" className='button-1' onClick={deleteNote}>
                    <DeleteIcon fontSize="inherit" />
                </IconButton>
            </div>
        </div>  
        </>
    )
}

export default Note