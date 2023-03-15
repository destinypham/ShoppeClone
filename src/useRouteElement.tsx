import { useRoutes } from 'react-router-dom'
import ProductList from './pages/ProductList/ProductList'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import RegisterLayout from './layouts/RegisterLayout/RegisterLayout'

export default function useRouteElement() {
  const routeElemennt = useRoutes([
    {
      path: '/',
      element: <ProductList />
    },
    {
      path: '/login',
      element: (
        <RegisterLayout>
          <Login />
        </RegisterLayout>
      )
    },

    {
      path: '/register',
      element: (
        <RegisterLayout>
          <Register />
        </RegisterLayout>
      )
    }
  ])
  return routeElemennt
}
