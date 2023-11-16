import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { useQueryClient, useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { createTask, deleteTask, updateTask } from "../api";
import { Itask, IFormInputs } from "../types";

export const useTaskList = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const [isEdit, setIsEdit] = useState(false);

  const createTaskMutation = useMutation({
    mutationFn: (newTask: Itask) => createTask(newTask),
    onSuccess(data, variables, context) {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const handleSubmitForm: SubmitHandler<IFormInputs> = (data) => {
    createTaskMutation.mutate({
      id: uuidv4(),
      title: data.taskContent,
    });
    return navigate("/");
  };

  const deleteTaskMutation = useMutation({
    mutationFn: deleteTask,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const handleDeleteTask = (id: string) => {
    deleteTaskMutation.mutate(id);
    return navigate("/");
  };

  const updateTaskMutation = useMutation({
    mutationFn: (updatedTask: Itask) => updateTask(updatedTask),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      setIsEdit(false);
    },
  });

  const handleUpdateForm: SubmitHandler<IFormInputs> = ({
    id,
    taskContent,
  }) => {
    updateTaskMutation.mutate({
      id: id,
      title: taskContent,
    });
    return navigate("/");
  };

  return {
    handleSubmitForm,
    handleDeleteTask,
    handleUpdateForm,
    isEdit,
    setIsEdit,
  };
};
