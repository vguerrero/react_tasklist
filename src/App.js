

import { Footer } from './components/Footer';
import { Header } from './components/Header';
import {useState} from 'react';
import { TaskList } from "./components/TaskList";
import { AddTask } from './components/AddTask';
import './App.css';

//https://codebook-ul.vercel.app/
//DOC -- https://react.dev/reference/react/useState
//https://github.com/ShubhamSarda/react-ul
/*Resources
https://unwiredlearning.notion.site/unwiredlearning/React-Resources-4fdd421a603747b18f6c8824326c8a2b
*/
const App = () => {
  const info="random";//using prop drilling
  //const username="Victor";
  //const [count, setCount] = useState(0);
  

  // function handleAdd(){
  //   setCount(count => count+1); 
  //   setCount(count => count+1); 
  //   setCount(count => count+1); 
  //   console.log("adding " + count);
  // }
  // function handleSub(){
  //   setCount(count-1);
  //   console.log("substracting " + count);
  // }

  // const handleReset = () => {
  //   setCount(0);
  // }

  return (
    
    <div className="App">
    <Header />
    <AddTask/>
    <TaskList info={info} />
    <Footer/>
  </div>
    
    
  );
}

export default App




