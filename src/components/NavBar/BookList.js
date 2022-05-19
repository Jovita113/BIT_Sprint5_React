import React from 'react';
import Header from '../Booklist/Header';
import Tasks from '../Booklist/Tasks';
import AddTask from '../Booklist/AddTask';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Swal from "sweetalert2";
import '../Booklist/BookList.css';

function BookList() {

    const [tasks, setTasks] = useState([]);
    const [showAddTask, setShowAddTask] = useState(false); 
    
    const addTask = (task) => {
      const id = uuidv4();
      const newTask = { id, ...task }

      setTasks([...tasks, newTask]);

      Swal.fire({
          icon: 'success',
          title: 'Yay...',
          text: 'You have successfully added a new book!'
      })

      localStorage.setItem("bookAdded", JSON.stringify([...tasks, newTask]));
    }

    const deleteTask = (id) => {
      const deleteTask = tasks.filter((task) => task.id !== id);

      setTasks(deleteTask);

      Swal.fire({
          icon: 'success',
          title: 'Oops...',
          text: 'You have successfully deleted a task!'
      })

      localStorage.setItem("bookAdded", JSON.stringify(deleteTask));
  }

      useEffect(() => {
        alert("Welcome to our App");
    }, []);
    
    return (
        <>
          <div className="container">
            <Header showForm={() => setShowAddTask(!showAddTask)} changeTextAndColor={showAddTask} />
           
            {showAddTask && <AddTask onSave={addTask} />}
            
           
            {
              tasks.length > 0 
              ?
              (<Tasks tasks={tasks} onDelete={deleteTask} />)
              :
              ('No Book Found!')
            }
          </div>
        </>
    )
}
export default BookList;
