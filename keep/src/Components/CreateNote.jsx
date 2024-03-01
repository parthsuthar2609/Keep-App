import * as React from 'react';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Fingerprint from '@mui/icons-material/Fingerprint';
import './CreateNote.css';
import { useState } from 'react';


const CreateNote = (props) => {

   const [expand , setExpand] = useState(false);  
  const  [note , setNote]  = useState({
       title : "",
       content : ""
  });

  const InputEvent = (event) =>{

        const {name , value} = event.target;

     setNote((prevData)=>{
         return{
            ...prevData,
             [name] : value
         }
     });
  };

  const addEvent = () =>{
       props.passNote(note);
       setNote({
        title : "",
        content : ""
   });
  }
  const HideItem = () =>{
    setExpand(true);
  }  

    return (
        <div className='create-note'>
            <form>
            {expand ?
                <input type='text'
                placeholder='Title' 
                className="text" 
                autoComplete='off' 
                value={note.title}
                name='title'
                onChange={InputEvent}
                /> : null}
                

                <textarea rows="" 
                columns="" 
                placeholder='Write A Note...' 
                autoComplete='off' 
                className='texta'
                value={note.content}
                name='content'
                onChange={InputEvent}
                onClick={HideItem}
                >
                </textarea>
                {expand ?
                <div className='button-icon'>
                    <Stack direction="row" spacing={1}  >
                        <IconButton sx={{ width: '60px', height: '60px', fontSize: '50px' }} 
                        color="success" size="20px" onClick={addEvent} >
                    <Fingerprint fontSize="inherit" />
                        </IconButton>
                    </Stack> 
                </div> :null}
            </form>
        </div>
    )
}

export default CreateNote;
