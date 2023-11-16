import { Link } from "react-router-dom";
import { Itask } from "../types";
import TaskForm from "./TaskForm";
import { useTaskList } from "../hooks/useTaskList";

interface ITaskProps {
  task: Itask;
  handleUpdate?: (updateTask: Itask) => void;
}

const Task = ({ task, handleUpdate }: ITaskProps) => {
  const { handleDeleteTask, handleUpdateForm, isEdit, setIsEdit } =
    useTaskList();

  const { title, id } = task;
  if (isEdit) {
    return (
      <li>
        <TaskForm updateValue={task} onSubmit={(e) => handleUpdateForm(e)} />{" "}
      </li>
    );
  } else
    return (
      <li>
        {title}
        <Link to={`/task/${id}/edit`} onClick={() => setIsEdit(!isEdit)}>
          Edytuj
        </Link>
        <button type="button" onClick={() => handleDeleteTask(id!)}>
          Usuń
        </button>
      </li>
    );
};

export default Task;
