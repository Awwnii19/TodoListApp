import "./ToDoItem.css";

import { useState } from "react";

function SearchTask({search}){
    const [term, setTerm] = useState('');

    const handleOnChange = (event)=>{
        const term = event.target.value;
        if(term !== ''){
            search(term);
        }
        setTerm(term);
    }


    return (
        <div className="combine">
            <form>
            <input className="input" placeholder="serach your task" value ={term} onChange={handleOnChange}/>
            </form>
        </div>
    );
}
export default SearchTask;