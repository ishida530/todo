import React from 'react'
import TaskForm, { TaskFormData } from '../components/TaskForm'




interface EditTaskProps {
    // Dodaj odpowiednie typy dla danych i funkcji obsługujących
}

const EditTask = () => {
    const onSubmit = (data: TaskFormData) => {
        console.log('data wysylka', data)
        // Obsługa edycji zadania, np. wywołanie funkcji do zapisu zmian
    };
    return (
        <div>
            <h2>Edycja zadania</h2>
            <TaskForm onSubmit={onSubmit} />
        </div>
    )
}

export default EditTask