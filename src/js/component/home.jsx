import React, {useState, useEffect} from "react";

import ReactDOM from 'react-dom/client'

const Home = () => {
	const [task, setTask] = useState("");
	const [taskList, setTaskList] = useState ([]);
	const [taskCount, setTaskCount] = useState( );

  
  useEffect(() => {
    setTaskCount(taskList.length);
  }, [taskList]); 

	const handleSubmit = e => {
		e.preventDefault();
	
		setTaskList([...taskList, task]);
		setTask('');
	}
	const handleChange = e =>{
		setTask (e.target.value)
	}

	const handleDelete = (index) =>{
		setTaskList(taskList.filter((_, i)=>i!= index));
	};
		return (
			<div className="text-center">
				<h1 className="text-center mt-5">todos</h1>
				<form onSubmit={handleSubmit}>
				<input type="text" value={task} onChange={handleChange} 
				placeholder="Add a new task" />
				<button>Add task</button>
				</form>

				<ul>
				{taskList.length > 0 
           ? taskList.map((task, i) => 
               <li key={i}>
        {task}
        <i className="fa-solid fa-xmark" onClick={() => handleDelete(i)} /> 
      </li>) 
  : <li>Add task</li>}
<div className="task-count">
        {taskCount === 1 ? `${taskCount} item task added` : `${taskCount} items task added`}
      </div>
				</ul>
				
			</div>
		);
};



export default Home;
const root = ReactDOM.createRoot(document.querySelector('#app'));
root.render(<Home />)

