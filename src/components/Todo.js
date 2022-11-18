import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Todo({ todo, toggleComplete, handleDelete, handleEdit,}) {
  const [newTitle, setNewTitle] = React.useState(todo.title);
  const [newAbout, setNewAbout] = React.useState(todo.about);

  const handleChange =  (e) => {
    e.preventDefault();
    if (todo.complete === true) {
      setNewTitle(todo.title);  
      setNewAbout(todo.about);
    } else {
      todo.title = "";
      todo.about = "";
      setNewTitle(e.target.value); 
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
        onChange={handleChange}
      />
          <input
        style={{ textDecoration: todo.completed && "line-through" }}
        type="text"
        value={todo.about === "" ? newAbout : todo.about}
        className="list"
        onChange={handleChange}
      />
      <div>
        <button
          className="button-complete"
          onClick={() => toggleComplete(todo)}
        >
          <CheckCircleIcon id="i" />
        </button>
        <button
          className="button-edit"
          onClick={() => handleEdit(todo, newTitle)}
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