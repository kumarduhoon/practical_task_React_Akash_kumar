import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './pages/userauth/register/Register'
import Login from './pages/userauth/login/Login'
import UserProflle from './pages/home/UserProflle'
import CreatePost from "./pages/posts/CreatePost"
import AllPost from './pages/posts/AllPost'
import Layout from './containers/Layout/Layout'
import Home from './pages/home/Home'

function App() {


  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/regitser" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user-profile" element={<UserProflle />} />
          <Route path="/create-new-post" element={<CreatePost />} />
          <Route path="/all-posts" element={<AllPost />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
