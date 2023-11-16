import TaskForm from "../components/TaskForm";
import TodoList from "../components/TodoList";
import { useTaskList } from "../hooks/useTaskList";
const Home = () => {
  const { handleSubmitForm } = useTaskList();

  return (
    <div>
      <h1>TODO APP</h1>
      <TaskForm onSubmit={handleSubmitForm} />
      <TodoList />
    </div>
  );
};

export default Home;
