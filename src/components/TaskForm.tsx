import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { IFormInputs, Itask } from "../types";
import * as yup from "yup";

interface ITaskForm {
  onSubmit: (data: IFormInputs) => void;
  updateValue?: Itask;
}

const TaskForm = ({ onSubmit, updateValue }: ITaskForm) => {
  const schema = yup
    .object({
      taskContent: yup.string().required().min(3, "minimum 3 znaki"),
    })
    .required();
  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });
  useEffect(() => {
    if (updateValue) {
      setValue("taskContent", updateValue.title);
      setValue("id", updateValue.id);
    }
  }, []);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Nazwa zadania</label>
      <input {...register("taskContent")} />
      {errors.taskContent && <p>{errors.taskContent.message}</p>}
      <input type="submit" />
    </form>
  );
};

export default TaskForm;
