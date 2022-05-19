import React from 'react';
import Header from '../Booklist/Header';
import Tasks from '../Booklist/Tasks';
import AddTask from '../Booklist/AddTask';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Swal from "sweetalert2";
import '../Booklist/BookList.css';

function BookList() {
  const [loading, setloading] = useState(true);
  const [tasks, setTasks] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 3500);
  }, [])

  const getTasks = JSON.parse(localStorage.getItem("bookAdded"));
  useEffect(() => {
    if (getTasks == null) {
      setTasks([])
    } else {
      setTasks(getTasks);
    }
  }, [])

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
      text: 'You have successfully deleted a book!'
    })

    localStorage.setItem("bookAdded", JSON.stringify(deleteTask));
  }

  const editTask = (id) => {
    const text = prompt("Author name");
    const day = prompt("Book title");
    const myData = tasks.map(x => {
      if (x.id === id) {
        return {
          ...x,
          text: text,
          day: day,
          id: uuidv4()
        }
      }
      return x;
    })
    Swal.fire({
      icon: 'success',
      title: 'Yay...',
      text: 'You have successfully edited an existing book!'
    })
    localStorage.setItem("BookAdded", JSON.stringify(myData));
    window.location.reload();
  }
  return (
    <>
      {
        loading ?
          <div className="spinnerContainer">
            <div className="spinner-grow text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-secondary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-success" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-danger" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-warning" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div> :
          <div className="container">
            <Header showForm={() => setShowAddTask(!showAddTask)} changeTextAndColor={showAddTask} />

            {showAddTask && <AddTask onSave={addTask} />}

            <h3>Number of Tasks: {tasks.length}</h3>

            {
              tasks.length > 0
                ?
                (<Tasks tasks={tasks} onDelete={deleteTask} onEdit={editTask} />)
                :
                ('No Book Found!')
            }
          </div>
        }
    </>
  )
}
export default BookList;
