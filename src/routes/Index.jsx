import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Dashboard from '../pages/Dashboard/Dashboard'
import RegisterForm from '../pages/Dashboard/Auth/RegisterForm'
import LoginForm from '../pages/Dashboard/Auth/LoginForm'
import Home from '../pages/Home/Home'
import HomePage from '../pages/Home/HomePage/HomePage'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '',
        element: <Home/>,
        children: [
          {
            path: '/',
            element: <HomePage />
          }
        ]
      },
      {
        path: 'dashboard',
        element: <Dashboard/>,
        children: [
          {
            path: '',
            element: <LoginForm/>
          },
          {
            path: 'login',
            element: <LoginForm/>
          },
          {
            path: 'register',
            element: <RegisterForm/>
          }
        ]
      }
    ]
  }
])

export default router


