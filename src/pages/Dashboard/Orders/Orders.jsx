import { Outlet } from 'react-router-dom'
import CustomerSupport from '../../../components/CustomerSupport/CustomerSupport'

const Orders = () => {
  return (
    <>
      <CustomerSupport/>
      <Outlet/>
    </>
  )
}

export default Orders