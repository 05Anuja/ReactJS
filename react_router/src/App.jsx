import React from 'react'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Contact from './Components/Contact'
import Posts from './Components/Posts'
import Navbar from './Components/Navbar'
import ShowPosts from './Components/APIData/ShowPosts'
import CreatePost from './Components/APIData/CreatePost'
import RootLayout from './Components/RootLayout'
import Dashboard from './Components/Dashboard/Dashboard'
import Counter from './Components/Counter'

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='contact' element={<Contact />}/>
      <Route path='counter' element={<Counter />} />
      <Route path='posts' element={<Posts />}/>
      <Route path='dashboard' element={<Dashboard />}/>
    </Route>
  ])
)

const App = () => {
  return (
    <>
        {/* <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/posts' element={<Posts />}/>
                <Route path='/posts/:id' element={<CreatePost>
                  <ShowPosts/>
                </CreatePost>}/>
                <Route path='/contact' element={<Contact />}/>
            </Routes>
        </BrowserRouter> */}
        <RouterProvider router={router}/>
    </>
  )
}

export default App