import { Itask, TaskStatus } from "./types";

export const fetchTodoList = async () => {
  try {
    const request = await fetch('http://localhost:3000/tasks')
    const response = await request.json()
    return response
  } catch (error) {
    console.log(error)
  }
}

export const createTask = async (newTask: Itask) => {
  try {
    const request = await fetch('http://localhost:3000/tasks', {
      method: "POST",
      body: JSON.stringify(newTask),
      headers: {
        "Content-Type": "application/json",
      },
    })
    const response = await request.json()
    return response
  } catch (error) {
    console.log(error)
  }
}
export const updateTask = async (updateTask: Itask) => {
  console.log('updateTask w fetchu',updateTask)
  try {
    const request = await fetch(`http://localhost:3000/tasks/${updateTask.id}`, {
      method: "PUT",
      body: JSON.stringify(updateTask),
      headers: {
        "Content-Type": "application/json",
      },
    })
    const response = await request.json()
    return response
  } catch (error) {
    console.log(error)
  }
}

