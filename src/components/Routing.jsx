import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Home from '../pages/Home';

export const Routing = () => {
    return (
        <div className="p-4">
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />}>
                        <Navigate replace to="/search" />
                    </Route>
                </Routes>
            </Router>
        </div>
    );
}