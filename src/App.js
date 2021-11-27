import { useState } from 'react';

import './App.css';
import Header from './components/header';
import Main from './view/main';
import TaskList from './view/taskLists';

function App() {
  const [taskList, settaskList] = useState([]);
  const handleTaskUpdation = (vals) => {
    settaskList(taskList.concat([vals]));
    console.log(taskList)
  }
  return (
    <>
      <Header />
      <Main updateData={handleTaskUpdation} />
      <TaskList taskList={taskList} />
    </>
  );
}

export default App;
