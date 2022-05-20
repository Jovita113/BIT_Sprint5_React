import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Swal from "sweetalert2";
import "../Booklist/BookList.css";
import Header from '../Booklist/Header';
import Books from '../Booklist/Books';
import AddBook from '../Booklist/AddBook';


function BookList() {

    const [loading, setloading] = useState(true); 
    const [books, setBooks] = useState([]); 
    const [showAddBook, setShowAddBook] = useState(false); 

  
    useEffect(() => {
        setTimeout(() => {
            setloading(false);
        }, 3500);
    }, [])


    const getBooks = JSON.parse(localStorage.getItem("bookAdded"));

    useEffect(() => {
        if (getBooks == null) {
            setBooks([])
        } else {
            setBooks(getBooks);
        }
        // eslint-disable-next-line 
    }, [])

  
    const addBook = (book) => {
        const id = uuidv4();
        const newBook = { id, ...book }

        setBooks([...books, newBook]);

        Swal.fire({
            icon: 'success',
            title: 'Yay...',
            text: 'You have successfully added a new book!'
        })

        localStorage.setItem("bookAdded", JSON.stringify([...books, newBook]));
    }

    
    const deleteBook = (id) => {
        const deleteBook = books.filter((book) => book.id !== id);

        setBooks(deleteBook);

        Swal.fire({
            icon: 'success',
            title: 'Oops...',
            text: 'You have successfully deleted a book!'
        })

        localStorage.setItem("bookAdded", JSON.stringify(deleteBook));
    }

   
    const editBook = (id) => {

        const author = prompt("Author name");
        const title = prompt("Book title");
        let data = JSON.parse(localStorage.getItem('bookAdded'));

        const myData = data.map(x => {
            if (x.id === id) {
                return {
                    ...x,
                    author: author,
                    title: title,
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

        localStorage.setItem("bookAdded", JSON.stringify(myData));
        window.location.reload();
    }

    return (
        <>
        {/* <div className="bodycont"> */}
            {
                loading
                    ?
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
                    </div>
                    :
                    <div className="container">
                        <Header showForm={() => setShowAddBook(!showAddBook)} changeTextAndColor={showAddBook} />
                        {showAddBook && <AddBook onSave={addBook} />}
                        <h3>Number of book: {books.length}</h3>
                        {
                            books.length > 0
                                ?
                                (<Books books={books} onDelete={deleteBook} onEdit={editBook} />)
                                :
                                ('No Book Found!')
                        }
                    </div>
            }
        {/* </div> */}
        </>
    )
}

export default BookList;