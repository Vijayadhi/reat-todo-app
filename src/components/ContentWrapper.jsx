import React, { useState } from 'react'
import Form from './Form'

import TodoList from '../TodoList'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import EditForm from './EditForm'

function ContentWrapper() {
    let [todo_data, setData] = useState([
        {
            id: 1,
            todo_item: "Buy Groceries",
            description: "Need to buy grocieries for the next week.",
            status: "InProgress"
        },
        {
            id: 2,
            todo_item: "Complete Assessments",
            description: "Need to complete the assessments given.",
            status: "InProgress"
        },
        {
            id: 3,
            todo_item: "College Automation pending",
            description: "Need to finish the automation software",
            status: "InProgress"
        },
    ])
    return (
        <>
            <section className="vh-100" >
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-lg-9 col-xl-9">
                            <div className="card rounded-3">
                                <div className="card-body p-9">

                                    <h3 className="text-center my-3 pb-3 fw-bold">To Do App</h3>
                                    <BrowserRouter>
                                        <Routes>
                                            <Route path='/' element={<Form data={todo_data} setData={setData} />} />
                                            <Route path='/edit_task/:id' element={<EditForm data={todo_data} setData={setData} />} />
                                        </Routes>
                                        <TodoList data={todo_data} setData={setData} />
                                    </BrowserRouter>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContentWrapper