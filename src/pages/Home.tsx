import React, { useEffect, useState } from 'react'
import TaskForm from '../components/TaskForm'
import { SubmitHandler } from 'react-hook-form'
import { IFormInputs, Itask, TaskStatus } from '../types'
import TodoList from './TodoList'
import { QueryClient, useMutation, useQuery, useQueryClient } from 'react-query'
import { fetchTodoList, createTask} from '../api'
import { useNavigate } from 'react-router-dom'

const Home = () => {
const queryClient = useQueryClient()
const navigate =useNavigate()
    const [taskList, setTaskList] = useState<Itask[] | []>([])

    const createTaskMutation = useMutation({
        mutationFn: (newTask:Itask)=>createTask(newTask),
        onSuccess(data, variables, context) {
            queryClient.invalidateQueries({queryKey:['todos']})
        },
      })

    const handleSubmitForm: SubmitHandler<IFormInputs> = (data) => {
        createTaskMutation.mutate({
            id:taskList.length++,
            title:data.taskContent,
        })
         return navigate('/')
    }
    return (
        <div>
            <h1>TODO APP</h1>
            <TaskForm onSubmit={handleSubmitForm} />
            <TodoList  />
        </div>
    )
}

export default Home