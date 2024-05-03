import "./ToDoItem.css";

import { useState } from "react";

function ToDoSearch({onCreate}) {
    const[term, setTerm] = useState('');
    
    const handleOnChange = (event) => {
        setTerm(event.target.value);

    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        setTerm('');
        if(term!==''){
            onCreate(term);

        }
    }
    return (
    <div className="combine">
        <form onSubmit={handleOnSubmit}>
        <input  className="input" placeholder="Enter Task" value={term} onChange={handleOnChange}/>
        <button className="button">Add</button>
        </form>
    </div>
    );
}
export default ToDoSearch;