import React from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export default function AddTodo() {
  const [title, setTitle] = React.useState("");
  const [about, setAbout] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title !== "" && about !== "") {
      await addDoc(collection(db, "todos"), {
        title,
        about,
        completed: false,
      });
      setTitle("");
      setAbout("");
    } 
  };
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
        <input type="file" />
      </div>
      <div className="btn_container">
        <button>Add</button>
      </div>
    </form>
  );
}