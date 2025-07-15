import './App.css'
import Dashboard from './Components/Dashboard/Dashboard'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'


// React Router Dom Import
import {
  createBrowserRouter,
  RouterProvider
}from 'react-router-dom'

// Router Creation
const router = createBrowserRouter([
   {
    path: '/',
    element: <div><Login/></div>
  },
  {
    path: '/register',
    element: <div><Register/></div>
  },
  {
    path: '/dashboard',
    element: <div><Dashboard/></div>
  }
])







function App() {

  return (
    <div>
      
      <RouterProvider router={router}/>

     test 3
    </div>
  )
}
export default App


