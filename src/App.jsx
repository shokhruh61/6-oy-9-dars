import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/Products'
import Contact from './pages/Cart'
import ErrorPage from './pages/ErrorPage'
import MainLayout from './Layouts/MainLayout'
import Products from './pages/Products'
import Cart from './pages/Cart'


function App() {
  
// https://strapi-store-server.onrender.com/api/products/19
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainLayout><Home></Home></MainLayout>} />
        <Route path='/About' element={<MainLayout><About></About></MainLayout>}></Route>
        <Route path='/Products' element={<MainLayout><Products></Products></MainLayout>} />
        <Route path='/Cart' element={<MainLayout><Cart></Cart></MainLayout>}></Route>
        <Route path='*' element={<MainLayout><ErrorPage></ErrorPage></MainLayout>} />
      </Routes>

    </div>
  )
}

export default App
