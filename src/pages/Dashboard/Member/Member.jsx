import { Outlet } from 'react-router-dom'
import CustomerSupport from '../../../components/CustomerSupport/CustomerSupport'

const Member = () => {
  return (
    <>
      <CustomerSupport/>
      <Outlet/>
    </>
  )
}

export default Member