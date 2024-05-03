import "./ToDoItem.css";
import 'font-awesome/css/font-awesome.min.css';

function ToDoItem({list, onDelete}){

    const handleOnDelete = () =>{
        onDelete(list.id);
    }
    return (
        <div className='todo-item'>
            {list.term}
            <button className="fa fa-trash-o delete-icon" onClick={handleOnDelete}></button>
        </div>
    );
}
export default ToDoItem;