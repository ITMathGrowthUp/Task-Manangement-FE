import { useState } from 'react'

export function Login() {
  // State for form inputs and login status
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // Mock authentication function (replace with real API call in production)
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault() // Prevent form refresh
    setError('') // Clear previous errors

    // Simulate authentication (e.g., email: "test@example.com", password: "password123")
    if (email === 'test@example.com' && password === 'password123') {
      setIsLoggedIn(true)
      console.log('Login successful!')
    } else {
      setError('Invalid email or password')
    }
  }

  // Logout function
  const handleLogout = () => {
    setIsLoggedIn(false)
    setEmail('')
    setPassword('')
    setError('')
  }

  // Conditional rendering based on login status
  if (isLoggedIn) {
    return (
      <div className='login-container'>
        <h2>Welcome!</h2>
        <p>You are logged in as {email}.</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    )
  }

  return (
    <div className='login-container'>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className='form-group'>
          <label>Email:</label>
          <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='value' required />
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
        {error && <p className='error'>{error}</p>}
        <label>
          <input type='checkbox' />
          Remember me
        </label>
        <button type='submit'>Sign in</button>

        <div>
          <button type='submit'>
            <img src={'./google.svg'} />
            Continue with Google
          </button>
          <button type='submit'>
            <img src={'./microsoft.svg'} />
            Continue with Microsoft
          </button>
          <button type='submit'>
            <img src={'./apple.svg'} />
            Continue with Apple
          </button>
          <button type='submit'>
            <img src={'./slack.svg'} />
            Continue with Slack
          </button>
        </div>
        <div>
          <label>Can't log in?</label>
          <label>Sign up for an account</label>
        </div>
      </form>
    </div>
  )
}

export default Login
