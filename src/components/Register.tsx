import { useState } from 'react'
import { useAuth } from '../context/AuthContext.tsx'
import { useNavigate } from 'react-router-dom'

export function Register() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { handleRegister, error } = useAuth()
  const navigate = useNavigate()

  const _handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const isSuccess = await handleRegister(username, password, email)

    if (isSuccess) {
      navigate('/')
    }
  }

  return (
    <div className='register-container'>
      <h2>Register</h2>
      <form onSubmit={_handleRegister}>
        <div className='form-group'>
          <label>Username</label>
          <input
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='value'
            required
          />
        </div>

        <div className='form-group'>
          <label>Password:</label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='value'
            required
          />
        </div>

        <div className='form-group'>
          <label>Email:</label>
          <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='value' required />
        </div>
        {error && <p className='error'>{error}</p>}
        <button type='submit'>Sign up</button>
      </form>
    </div>
  )
}
