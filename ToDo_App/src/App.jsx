import Header  from "./components/Header";
import { useState } from "react";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Comp Exam',
      day: 'December 9th at 2pm' ,
      reminder: true,
    },
    {
      id: 2,
      text: 'Gym' ,
      day: 'December 7th at 6:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'React project' ,
      day: 'December 30th at 6:30pm',
      reminder: false,
    }
  ])

  // Delete Task
  const deleteTask = (id) => {
    console.log('Delete the Task: ', id)
  }
  return (
    <div className="container">
      <Header title='Task Tracker' />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
 