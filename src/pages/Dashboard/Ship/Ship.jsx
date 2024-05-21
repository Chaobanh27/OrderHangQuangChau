import { Outlet } from 'react-router-dom'
import CustomerSupport from '../../../components/CustomerSupport/CustomerSupport'

const Ship = () => {
  return (
    <>
      <CustomerSupport/>
      <Outlet/>
    </>
  )
}

export default Ship