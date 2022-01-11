import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [allNotes,setallNotes] = useState([]);


  function addNote(event,createBox,setcreateBox){
    setallNotes(preValue=>{
      return [...preValue,createBox];
    });
    setcreateBox({title:"",content:""});
    event.preventDefault();
  }

  function deleteNote(id){
     setallNotes(()=>{
       return allNotes.filter((item,index)=>{
            return index !== id;
       });
     });
  }

  return (
    <div>
      <Header />
      <CreateArea clicked = {addNote} />
      {allNotes.map((item,index)=>{
        return <Note key={index} id = {index} title={item.title} content={item.content} deleteNote = {deleteNote} />
      })}

      <Footer />
    </div>
  );
}

export default App;
