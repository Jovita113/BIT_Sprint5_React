import { FaPencilAlt, FaTimes } from 'react-icons/fa';


const Book = ({ book, onDelete, onEdit }) => {
    return (
        <div>
            <div className="task">
                <div>
                    <p className="taskName">
                        <span className="textBold">Author of book :</span> {book.author}
                    </p>
                    <p className="taskDate"><span className="textBold">Title of book :</span> {book.title}</p>
                </div>
                <div>
                    <p><FaTimes onClick={() => onDelete(book.id)} className="delIcon" /></p>
                    <p><FaPencilAlt onClick={() => onEdit(book.id)} className="editIcon" /></p>
                </div>
            </div>
        </div>
    )
}

export default Book;