import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Results } from './Results';


export const Routing = () => {
    return (
        <div className="p-4">
                <Routes>
                    <Route exact path="/" component={<Navigate to="/search" replace/>} />
                    <Route exact path="/search" element={<Results />} />
                    <Route exact path="/images" element={<Results />} />
                    <Route exact path="/news" element={<Results />} />
                    <Route exact path="/videos" element={<Results />} />
                </Routes>
        </div>  
    );
}