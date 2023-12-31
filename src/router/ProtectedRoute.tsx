import { PropsWithChildren } from 'react'
import { Navigate } from 'react-router'

const ProtectedRoute: React.FC<PropsWithChildren> = ({ children }) => {
  const token = localStorage.getItem('token')

  if (!token) {
    return <Navigate to='/login' replace />
  }

  return children
}

export default ProtectedRoute
