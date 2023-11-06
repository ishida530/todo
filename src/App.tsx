

import './App.css';
import { Routes, Route } from 'react-router-dom';
import TodoList from './pages/TodoList';
import Task from './pages/Task';
import EditTask from './pages/EditTask';





function App() {

  // const info = useQuery('todos', fetchTodoList)

  return (
      <div className="App">
        <h1>TODO APP</h1>
        <Routes>
          <Route path='/' element={< TodoList />} />
          <Route path='/task/:id' element={< Task />} />
          <Route path='/task/:id/edit' element={< EditTask />} />
        </Routes>
      </div>


  );
}

export default App;
