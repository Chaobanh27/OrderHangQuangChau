import { Outlet } from 'react-router-dom'
import CustomerSupport from '../../../components/CustomerSupport/CustomerSupport'

const ShipOrders = () => {
  return (
    <>
      <CustomerSupport/>
      <Outlet/>
    </>
  )
}

export default ShipOrders