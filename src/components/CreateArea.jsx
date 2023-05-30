import React ,{useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [createBox,setcreateBox] = useState({title:"",content:""});
  const [renderState,setrenderState] = useState(false);

  function createBoxChange(event){
    let {name,value} = event.target;
    setcreateBox(preValue=>{
       return {
         ...preValue,
         [name]: value
       };
    });
  }
  function changeState(){
    setrenderState(true);
  }


  return (
    <div>
      <form className = "create-note" onSubmit = {(event)=>{
        return props.clicked(event,createBox,setcreateBox)}}>
        {renderState?
        <input name="title"
        value = {createBox.title}
        placeholder="Title"
        onChange = {createBoxChange} />:null}
        <textarea name="content"
        value = {createBox.content}
        placeholder="Take a note..."
        rows={renderState?"3":"1"}
        onChange = {createBoxChange}
        onClick = {changeState} />
        <Zoom in={renderState}>
        <Fab size = "small" type="submit">
        <AddIcon />
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
