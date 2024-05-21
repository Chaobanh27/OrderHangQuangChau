/* eslint-disable no-console */
import { API_ROOT } from '../utils/constants'
import authorizedAxiosInstance from '../utils/authorizeAxios'
import { toast } from 'react-toastify'

/** Users */
export const registerUserAPI = async (data) => {
  const response = await authorizedAxiosInstance.post(`${API_ROOT}/v1/users/register`, data)
  toast.success('Account created successfully! Please check and verify your account before logging in!', { theme: 'colored' })
  return response.data
}

export const verifyUserAPI = async (data) => {
  const response = await authorizedAxiosInstance.put(`${API_ROOT}/v1/users/verify`, data)
  toast.success('Account verified successfully! Now you can login to enjoy our services! Have a good day!', { theme: 'colored' })
  return response.data
}

export const refreshTokenAPI = async () => {
  const response = await authorizedAxiosInstance.get(`${API_ROOT}/v1/users/refresh_token`)
  return response.data
}