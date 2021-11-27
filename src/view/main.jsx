import React from 'react';
import Button from '../components/button';
import InputField from '../components/inputfield';
import TextAreaField from '../components/textArea';
import { useState } from 'react'
function Main({ updateData }) {
    const [formFields, setformFields] = useState({
        task: '',
        taskDate: '',
        location: ''
    })
    const { task, taskDate, location } = formFields
    const isFormValid = () => {
        return task && taskDate && location
    }
    const submitHandler = () => {
        if (isFormValid()) {
            updateData(formFields);
        }
    }
    const setFormData = (e) => {
        setformFields({ ...formFields, [e.target.name]: e.target.value })

    }
    return (
        <div className="card">
            <div className="main-task">
                <div className="form-field">
                    <TextAreaField
                        name="task"
                        handleChange={setFormData}
                        value={task}
                        placeholder="enter the task"
                    />
                </div>
            </div>
            <div className="rest-task">
                <div className="form-field">
                    <InputField
                        name="taskDate"
                        type="date"
                        value={taskDate}
                        placeholder="enter date"
                        minDate={true}
                        handleChange={setFormData}
                    />
                </div>
                <div className="form-field">
                    <InputField
                        name="location"
                        type="text"
                        placeholder="location"
                        value={location}
                        handleChange={setFormData}
                    />
                </div>
            </div>
            <div>
                <Button disabled={!isFormValid()} clickHandler={() => submitHandler()} text="Add Task" />
            </div>
        </div>
    )
}


export default Main
