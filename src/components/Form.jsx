import React, { useState } from 'react'

function Form({ data, setData }) {
    let [todo_item, setTask] = useState("")
    let [description, setDesc] = useState("")
    let status = "InProgress"
    let handleSubmit = () => {

        let new_data = { todo_item, description, status }
        console.log(new_data.todo_item);
        if (new_data.todo_item !== "") {
            new_data.id = data.length ? data[data.length - 1].id + 1 : 1
            data.push(new_data)
            setData([...data])
        }
        else{
            alert("Please Enter the task and description")
        }

    }
    return (
        <>
            <form className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2 todo_task_form">
                <div className="col-12">
                    <div data-mdb-input-init className="form-outline">
                        <input type="text" id="task" className="form-control" onChange={(e) => setTask(e.target.value)} placeholder='Enter a task here' required/>
                    </div>
                </div>
                <div className="col-12">
                    <div data-mdb-input-init className="form-outline">
                        <textarea type="text" id="desc" className="form-control" onChange={(e) => setDesc(e.target.value)} placeholder='Enter Description' required/>
                    </div>
                </div>
                <div className="col-12">
                    <button type="reset" className="btn btn-primary" onClick={(e) => handleSubmit()}>Save</button>
                </div>
            </form>

        </>
    )
}

export default Form