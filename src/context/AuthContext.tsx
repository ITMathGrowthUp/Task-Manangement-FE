import { loginApi } from '../base'
import { createContext, ReactNode, useState } from 'react'

// todo: destructure

interface AuthContextType {
  // todo: add tokenExpiry
  accessToken: string | null
  isAuthenticated: boolean
  handleLogin: (username: string, password: string) => void
  handleLogout: () => void
  error: string
}

interface AuthProviderProps {
  children: ReactNode
}

const defaultAuthContext: AuthContextType = {
  accessToken: null,
  isAuthenticated: false,
  handleLogin: () => {
    throw new Error('AuthContext is not initialized. Did you forget the Provider?')
  },
  handleLogout: () => {
    throw new Error('AuthContext is not initialized. Did you forget the Provider?')
  },
  error: ''
}

export const AuthContext = createContext<AuthContextType>(defaultAuthContext)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [accessToken, setAccessToken] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [error, setError] = useState('')

  const handleLogin = async (username: string, password: string) => {
    try {
      setError('')
      const urlencoded = new URLSearchParams()
      urlencoded.append('username', username)
      urlencoded.append('password', password)

      const response = await fetch(loginApi, {
        method: 'POST',
        body: urlencoded
      })

      const { access_token } = await response.json()

      if (!access_token) {
        setError('Invalid username or password')
      } else {
        setAccessToken(access_token)
        setIsAuthenticated(true)
      }
    } catch (error) {
      console.error('Login failed:', error)
    }
  }

  const handleLogout = () => {
    setAccessToken(null)
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider value={{ accessToken, error, isAuthenticated, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  )
}
