import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Dashboard from '../pages/Dashboard/Dashboard'
import RegisterForm from '../pages/Dashboard/Auth/RegisterForm'
import LoginForm from '../pages/Dashboard/Auth/LoginForm'
import Home from '../pages/Home/Home'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: 'home',
        element: <Home/>
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


