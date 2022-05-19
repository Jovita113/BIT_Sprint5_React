import { FaPencilAlt, FaTimes } from 'react-icons/fa';
import "./BookList.css"

const Task = ({ task, onDelete, onEdit }) => {
    return (
        <div>
            <div className="task">
                <div>
                    <p className="taskName">
                        <span className="textBold">Author Name:</span> {task.author}
                    </p>
                    <p className="taskDate"><span className="textBold">Book:</span> {task.title}</p>
                </div>
                <div>
                    <p><FaTimes onClick={() => onDelete(task.id)} className="delIcon" /></p>
                    <p><FaPencilAlt onClick={() => onEdit(task.id)} className="editIcon" /></p>
                </div>
            </div>
        </div>
    )
}

export default Task;