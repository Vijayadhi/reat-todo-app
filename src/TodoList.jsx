import React from 'react'
import { findIndexById } from './common/Helper'
import { Form, useNavigate } from 'react-router-dom'



function TodoList({ data, setData }) {


    let navigate = useNavigate();


    const handleDelete = (id) => {
        let index = findIndexById(data, id)
        if (index !== -1) {
            data.splice(index, 1)
            setData([...data])
        }
        else {
            alert("Invalid Id")
        }

    }
    return (
        <>
            <table className="table mb-4 table-info justify-content-center">
                <thead>
                    <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Todo item</th>
                        <th scope="col">Description</th>
                        <th scope="col">Status</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((e) => {
                            return <>
                                <tr>
                                    <th scope="row-auto">{e.id}</th>
                                    <td>{e.todo_item}</td>
                                    <td>{e.description}</td>
                                    {e.status === "Finished" ? <td className='text-success'>{e.status}</td> : <td className='text-danger'>{e.status}</td>}
                                    <td>
                                        <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn del-btn" onClick={() => handleDelete(e.id)}><i class="fa-solid fa-trash"></i></button>
                                        <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn edit-btn ms-1" onClick={() => navigate(`/edit_task/${e.id}`)}><i class="fa-solid fa-pen"></i></button>
                                    </td>
                                </tr>
                            </>
                        })
                    }
                </tbody>
            </table>
        </>
    )
}
export default TodoList