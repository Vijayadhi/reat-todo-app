import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { findIndexById } from '../common/Helper';



function EditForm({ data, setData }) {

    let [todo_item, setTask] = useState("")
    let [description, setDesc] = useState("")
    let [status, setStatus] = useState("InProgress")
    let navigate = useNavigate()
    let { id } = useParams()

    let handleSubmit = () => {
        let index = findIndexById(data, Number(id))
        let new_data = { id: Number(id), todo_item, description, status }
        data.splice(index, 1, new_data)
        setData([...data])
        navigate('/')

    }

    const getData = () => {
        let index = findIndexById(data, Number(id))
        if (index !== -1) {
            setTask(data[index].todo_item)
            setDesc(data[index].description)
            setStatus(data[index].status)
        }
        else {
            alert("Invalid task")
        }
    }

    useEffect(() => {
        if (id) {
            console.log(id);
            getData()
        }
    }, [])
    return (
        <>
            <form className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2 todo_task_form">
                <div className="col-12">
                    <div data-mdb-input-init className="form-outline">
                        <input type="text" id="form1" className="form-control" value={todo_item} onChange={(e) => setTask(e.target.value)} />
                    </div>
                </div>
                <div className="col-12">
                    <div data-mdb-input-init className="form-outline">
                        <textarea type="text" id="form1" className="form-control" value={description} onChange={(e) => setDesc(e.target.value)} />
                    </div>
                </div>
                <div className="col-12">
                    <div data-mdb-input-init className="form-outline">
                        <select class="form-select" aria-label="Default select example" onChange={(e) => setStatus(e.target.value)} defaultValue={status}>
                            <option value="Finished">Finished</option>
                            <option value="Pending">Pending</option>
                            <option value="InProgress">InProgress</option>
                            <option value="Aborted">Aborted</option>
                        </select>
                    </div>
                </div>
                <div className="col-12">
                    <button type="reset" className="btn btn-primary" onClick={() => handleSubmit()}>Save</button>
                </div>
            </form>

        </>
    )
}

export default EditForm