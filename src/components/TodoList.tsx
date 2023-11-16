import React, { Dispatch, SetStateAction, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Task from "./Task";
import { IFormInputs, Itask } from "../types";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { fetchTodoList } from "../api";
import { SubmitHandler } from "react-hook-form";
import Pagination from "./Pagination";

const TodoList = () => {
  const [page, setPage] = useState(1);

  const {
    isLoading,
    isError,
    data: tasks,
    error,
    isFetching,
    isPreviousData,
  } = useQuery({
    queryKey: ["todos", page],
    queryFn: () => fetchTodoList(page),
  });

  if (isLoading) return <div>`Loading...`</div>;
  if (isError) return <div>`Error: {(error as Error).message}`</div>;


  return (
    <>
      <ul>
        {tasks.map((task: Itask, index: number) => {
          return <Task key={index} task={task} />;
        })}
      </ul>
        <Pagination  tasks={tasks} page={page} handlePage={setPage} isPreviousData={isPreviousData}/>
    </>
  );
};

export default TodoList;
