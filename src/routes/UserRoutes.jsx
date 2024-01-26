import React from 'react'
import { Route, Routes } from "react-router-dom";
import HomePage from '../pages/HomePage';


const userRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
            </Routes>
        </div>
    )
}

export default userRoutes;