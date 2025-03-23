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
            <img src={'./google.svg'} alt={'GoogleLogo'} />
            Continue with Google
          </button>
          <button type='submit'>
            <img src={'./microsoft.svg'} alt={'MicrosoftLogo'} />
            Continue with Microsoft
          </button>
          <button type='submit'>
            <img src={'./apple.svg'} alt={'AppleLogo'} />
            Continue with Apple
          </button>
          <button type='submit'>
            <img src={'./slack.svg'} alt={'SlackLogo'} />
            Continue with Slack
          </button>
        </div>
        <div>
          <a
            href={
              'https://icdn.24h.com.vn/upload/4-2024/images/2024-11-22/1732262807-hot-girl-xinh-dep-cham-dien-ao-lung-quan-ngan-cun-khoe-dang-hinh-2-width615height800.jpg'
            }
          >
            Can't log in?
          </a>
          <a
            href={
              'https://icdn.24h.com.vn/upload/4-2024/images/2024-11-22/1732262807-hot-girl-xinh-dep-cham-dien-ao-lung-quan-ngan-cun-khoe-dang-hinh-2-width615height800.jpg'
            }
          >
            Sign up for an account
          </a>
        </div>
      </form>
    </div>
  )
}

export default Login
