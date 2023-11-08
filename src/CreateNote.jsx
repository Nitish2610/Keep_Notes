import React from "react";
import Button from "@material-ui/core/Button";
import AddIcon from '@material-ui/icons/Add';
import { useState } from "react";


const CreateNote = (props) =>{

    const[expand,setExpand] = useState(false);

    const [note,setNote] = useState({
        title:"",
        content:""
    });

    const inputEvent = (event)=>{

        // const value = event.target.value;
        // const name = event.target.name;

        const {name, value} = event.target;

        setNote((prevData)=>{
            return {
                ...prevData,
                [name]:value,
            }
        })
    }
    
    const addEvent = () =>{
        props.passNote(note);

        setNote({
            title:"",
            content:""
        });
    }

    const expandIt = () =>{
        setExpand(true);
    }

    const btoNormal=()=>{
        setExpand(false);
    }


      return(
        <>
          <div className="main-note" onDoubleClick={btoNormal}>
               <form className="form">
               {expand?
                <input type="text" value={note.title} name="title" onChange={inputEvent} placeholder="Title" autoComplete="off"/>:null}
                <textarea rows="" column="" value={note.content}  name="content" onChange={inputEvent} placeholder="write a note..." onClick={expandIt}/>
                {expand?
                <Button className="MuiButton-root" onClick={addEvent}>
                    <AddIcon className="plus-sign"/>
                </Button>:null}
               </form>
          </div>
        </>
      )
}

export default CreateNote;