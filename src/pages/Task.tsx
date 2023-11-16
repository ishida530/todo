import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IFormInputs, Itask, TaskStatus } from '../types'
import TaskForm from '../components/TaskForm'
import { error } from 'console'
import { SubmitHandler } from 'react-hook-form'
import { useMutation, isError, useQueryClient } from 'react-query'
import { deleteTask, updateTask } from '../api'

interface ITaskProps {
  task: Itask,
  handleUpdate?: (updateTask:Itask) => void,
}

const Task = ({ task,handleUpdate }: ITaskProps) => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const updateTaskMutation = useMutation({
    mutationFn: (updatedTask:Itask)=>updateTask(updatedTask),
    onSuccess() {
        queryClient.invalidateQueries({queryKey:['todos']})
        setIsEdit(false)
    },
  })
 
  const handleUpdateForm: SubmitHandler<IFormInputs> = (updatedTask) => {
    updateTaskMutation.mutate({
        id:task.id,
        title:updatedTask.taskContent,
    })
     return navigate('/')
}
const deleteTaskMutation = useMutation({
  mutationFn: deleteTask,
  onSuccess() {
      queryClient.invalidateQueries({queryKey:['todos']})
  },
})
const handleDeleteTask = (id:string) => {
  deleteTaskMutation.mutate(id)
   return navigate('/')
}
  const [isEdit,setIsEdit]=useState(false)

  const { title, id, status } = task
  if (isEdit) {
    return (
      <li ><TaskForm updateValue={task} onSubmit={(e)=>handleUpdateForm(e)}/> </li>
    )
  } else return (
    <li >{title} <Link to={`/task/${id}/edit`} onClick={()=>setIsEdit(!isEdit)}>Edytuj</Link> <button type='button' onClick={()=>handleDeleteTask(id!)}>Usuń</button></li>
  )
}

export default Task