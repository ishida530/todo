import React from 'react'
import { useForm, Controller } from 'react-hook-form';


export interface TaskFormData {
    task: string;
}


const TaskForm = ({ onSubmit }: { onSubmit: (data: TaskFormData) => void }) => {
    const { handleSubmit, control } = useForm<TaskFormData>();

    const submitForm = (data:TaskFormData) => {
        onSubmit(data);
    };

    return (
        <form onSubmit={handleSubmit(submitForm)}>
            <div>
                <label>Treść zadania</label>
                <Controller
                    name="task"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <input {...field} />}
                />
            </div>

            {/* Inne pola formularza, jeśli są potrzebne */}

            <button type="submit">Zapisz zmiany</button>
        </form>
    )
}

export default TaskForm