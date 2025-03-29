import { loginApi, registerApi } from '../base'
import { createContext, ReactNode, useContext, useState } from 'react'

// todo: destructure

interface AuthContextType {
  // todo: add tokenExpiry
  accessToken: string | null
  isAuthenticated: boolean
  handleLogin: (username: string, password: string) => void
  handleLogout: () => void
  handleRegister: (username: string, password: string, email: string) => void
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
  handleRegister: () => {
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

  const handleRegister = async (username: string, password: string, email: string) => {
    try {
      setError('')
      const urlencoded = new URLSearchParams()
      urlencoded.append('username', username)
      urlencoded.append('password', password)
      urlencoded.append('email', email)

      const response = await fetch(registerApi, {
        method: 'POST',
        body: urlencoded
      })

      console.log('response', response)
      console.log('response123', response.status)

      if (response.ok && response.status === 201) {
        return true
      } else {
        setError('Invalid')
        return false
      }
    } catch (error) {
      console.error('Register failed:', error)
      return false
    }
  }

  const handleLogout = () => {
    setAccessToken(null)
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider value={{ accessToken, error, isAuthenticated, handleLogin, handleLogout, handleRegister }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
