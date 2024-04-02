import { useState } from 'react';
import Register from './pages/Register';
import Home from './pages/Home';
import Login from './pages/Login';
import { Route, Routes, Navigate } from "react-router-dom";
import "./index.css"

function App() {
	const user = localStorage.getItem("token");
	return (
		<Routes>
			{user ? (<Route path="/" exact element={<Home />} />) : (<Route path="/"
			element={<Navigate replace to="/login" />} />)}
			{user ? (<Route path="/register" element={<Navigate replace to="/" />} />) :
			(<Route path="/register"
			exact element={<Register />} />)}
			{user ? (<Route path="/login" element={<Navigate replace to="/" />} />) :
			(<Route path="/login"
			exact element={<Login />} />)}
		</Routes>
	);
}

export default App
