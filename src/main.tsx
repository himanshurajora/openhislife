import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'
import App from './App'
import Login from '../components/Login'
import Home from '../components/Home'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route
        path="/login" element={<Login/>}>
      </Route>
      <Route
        path="/" element={<Home/>}>
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)
