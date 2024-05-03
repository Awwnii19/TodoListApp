import "./ToDoItem.css";

import ToDoItem from "./ToDoItem";

function ToDoList({list, onDelete}){
    const renderedlist = list.map((list) => {
        return (
        <ToDoItem key={list.id} list={list} onDelete={onDelete} />
        );
    });
    return (
        <div className="todo-list">
        {renderedlist}
        </div>
    );
}
export default ToDoList;