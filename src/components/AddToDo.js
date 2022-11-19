import React, { useRef } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export default function AddTodo() {
  const [title, setTitle] = React.useState("");
  const [about, setAbout] = React.useState("");
  const [date, setDate] = React.useState("");
  const [files, setFiles] = React.useState();
  const fileInput = React.useRef(null);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title !== "" && about !== "") {
        await addDoc(collection(db, "todos"), {
        title,
        about,
        completed: false,
        files,
        date
      })
      setTitle("");
      setAbout("");
      setDate("");
      fileInput.current.value = null; // очищаем input от файлов
    }
  };
  const handleChange = ({target}) => {
    const fileNames  = Array.from(target.files).map(file => file.name)
    console.log(`Selected files - ${fileNames.join(', ')}`);
    setFiles(fileNames);
  }



  return (
    <form onSubmit={handleSubmit}>
      <div className="input_container">
        <input
          type="text"
          placeholder="Enter title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter about..."
          value={about}
          onChange={(e) => setAbout(e.target.value)}
        />
       <input
         type="file"
         multiple={true}
         ref={fileInput}
         onChange={handleChange}
         />
         <input type="date" value={date} onChange={(e) => setDate(e.target.value)}/>
      </div>
      <div className="btn_container">
        <button>Add</button>
      </div>
    </form>
  );
} 