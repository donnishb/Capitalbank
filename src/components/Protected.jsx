import { Navigate,Outlet } from 'react-router-dom'

function Protected({ isSignedIn }) {
    if (!isSignedIn) {
      return <Navigate to="/signin" replace />
    }
    return <Outlet />
  }

  export default Protected