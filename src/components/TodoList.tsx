import React, { Dispatch, SetStateAction } from "react";
import { Link, useNavigate } from "react-router-dom";
import Task from "./Task";
import { IFormInputs, Itask } from "../types";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { createTask, fetchTodoList, updateTask } from "../api";
import { SubmitHandler } from "react-hook-form";

const TodoList = () => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodoList,
  });
  if (isLoading) return <div>`Loading...`</div>;
  if (isError) return <div>`Error: {(error as Error).message}`</div>;
  return (
    <ul>
      {data.map((task: Itask, index: number) => {
        return <Task key={index} task={task} />;
      })}
    </ul>
  );
};

export default TodoList;
