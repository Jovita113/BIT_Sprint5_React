import { useState } from 'react';
import Swal from "sweetalert2"

const AddTask = ({onSave}) => {
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (!author && !title) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Fill in your author and title or close the form!'
            })
        } else if (!author && title) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Fill in your author!'
            })
        } else if (author && !title) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Fill in your title!'
            })
        } else {
            onSave({ author, title });
        }
        setAuthor('');
        setTitle('');
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Author name</label>
                <input type="text" placeholder="add author" value={author} onChange={(e) => setAuthor(e.target.value)} />
            </div>
            <div className="form-control">
                <label> Book title</label>
                <input type="text" placeholder="add your book" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <input type="submit" className="btn btn-block" value="Save Book" />
        </form>
      )
  };
  export default AddTask;