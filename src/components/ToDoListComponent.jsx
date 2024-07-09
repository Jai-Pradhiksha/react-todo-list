import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ToDoListComponent = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleUpdate = () => {
    if (editIndex !== null) {
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = inputValue;
      setTodos(updatedTodos);
      setEditIndex(null);
    } else {
      setTodos([...todos, inputValue]);
    }
    setInputValue('');
  };

  const handleEdit = (index) => {
    setInputValue(todos[index]);
    setEditIndex(index);
  };

  const handleRemove = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <>
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="card w-50 shadow">
        <div className="card-body text-center">
          <h1 className="card-title mb-4">Todo List</h1>
          <div className="input-group mb-3">
            <input 
              type="text" 
              className="form-control" 
              value={inputValue} 
              onChange={handleInputChange} 
              placeholder="Add a new task"
            />
            <button className="btn btn-success" onClick={handleUpdate}>
              {editIndex !== null ? 'Update' : 'Add'}
            </button>
          </div>
          <ul className="list-group">
            {todos.map((todo, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                {todo}
                <div>
                  <button className="btn btn-danger me-2" onClick={() => handleEdit(index)}>Edit</button>
                  <button className="btn btn-danger" onClick={() => handleRemove(index)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    </>
  );
};

export default ToDoListComponent;
