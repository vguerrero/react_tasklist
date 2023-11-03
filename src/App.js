import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { useState } from "react";
import { TaskList } from "./components/TaskList";
import { AddTask } from "./components/AddTask";
import "./App.css";

//https://codebook-ul.vercel.app/
//DOC -- https://react.dev/reference/react/useState
//https://github.com/ShubhamSarda/react-ul
/*Resources
https://unwiredlearning.notion.site/unwiredlearning/React-Resources-4fdd421a603747b18f6c8824326c8a2b
*/
const App = () => {
  //using prop drilling
  const [tasks, setTasks] = useState([
    // { id: 5271, name: "Record React Lectures", completed: true },
    // { id: 7825, name: "Edit React Lectures", completed: false },
    // { id: 8391, name: "Watch Lectures", completed: false },
  ]);

  return (
    <div className="App">
      <Header />
      <main>
        <AddTask tasks={tasks} setTasks={setTasks} />
        <TaskList tasks={tasks} setTasks={setTasks} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
