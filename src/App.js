import './App.css';

import SearchTask from './SearchTask';
import ToDoList from './ToDoList';
import ToDoSearch from './ToDoSearch';
import { useState } from 'react';

function App() {
  const [toDoList, setToDoList] = useState([]);

  const handleOnSearch=(term)=>{
    if(term.trim()===''){
      setToDoList(toDoList);
    }
      const list = toDoList.filter((item)=>{
        return item.term.toLowerCase().includes(term.toLowerCase())
    
    });
    setToDoList(list);
}
console.log("todolist", toDoList);

  const createToDoItem = (term) => {
    const updatedToDoList = [
      ...toDoList,
      {
        id: Math.round(Math.random() * 9999),
        term,
      },
    ];
    setToDoList(updatedToDoList);
    console.log(updatedToDoList);
  };
  const handleDelete=(id)=>{
    const finalItems=toDoList.filter((list)=>{
      return list.id !== id;


    })
    setToDoList(finalItems);
}
  return (
    <div className='app'>
      <ToDoSearch onCreate={createToDoItem}/>
      <SearchTask toDoList={toDoList} search={handleOnSearch}/>
      <ToDoList list={toDoList} onDelete={handleDelete}/>
    </div>
  );
}

export default App;
