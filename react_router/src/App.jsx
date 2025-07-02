import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Contact from './Components/Contact'
import Posts from './Components/Posts'
import Navbar from './Components/Navbar'
import ShowPosts from './Components/ShowPosts'

const App = () => {
  return (
    <>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/posts' element={<Posts />}/>
                <Route path='/posts/:id' element={<ShowPosts />}/>
                <Route path='/contact' element={<Contact />}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App