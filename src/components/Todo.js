import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Todo({ todo, toggleComplete, handleDelete, handleEdit,}) {
  const [newTitle, setNewTitle] = React.useState(todo.title);
  const [newAbout, setNewAbout] = React.useState(todo.about);
  const currDate = new Date();
  const todoDate = todo.date;

  const handleChangeTitle =  (e) => {
    e.preventDefault();
    if (todo.complete === true) {
      setNewTitle(todo.title);  
    } else {
      todo.title = "";
      setNewTitle(e.target.value); 
    }   
  };
  const handleChangeAbout = (e) => {
    e.preventDefault();
    if (todo.complete === true) {
      setNewAbout(todo.about);  
    } else {
      todo.about = "";
      setNewAbout(e.target.value); 
    }   
  };

  return (
    <div className="todo">
      <input
        style={{ textDecoration: todo.completed && "line-through" }}
        type="text"
        value={todo.title === "" ? newTitle : todo.title}
        className="list"
        onChange={handleChangeTitle}
      />
          <input
        style={{ textDecoration: todo.completed && "line-through" }}
        type="text"
        value={todo.about === "" ? newAbout : todo.about}
        className="list-about"
        onChange={handleChangeAbout}
      />
      <div>{todo.files}</div>
       {
            new Date(todoDate).getTime() > currDate.getTime() ?  <div>{todoDate}</div> :  <div className="timeUp">Time is up</div>
        }
      <div>
      {console.log('todo' , new Date(todoDate).getTime())}
      {console.log('today', currDate.getTime())}
        <button
          className="button-complete"
          onClick={() => toggleComplete(todo)}
        >
          <CheckCircleIcon id="i" />
        </button>
        <button
          className="button-edit"
          onClick={() => handleEdit(todo, newTitle, newAbout)}
        >
          <EditIcon id="i" />
        </button>
        <button className="button-delete" onClick={() => handleDelete(todo.id)}>
          <DeleteIcon id="i" />
        </button>
      </div>
    </div>
  );
}