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
            <svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='100' height='100' viewBox='0 0 48 48'>
              <path
                fill='#FFC107'
                d='M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z'
              ></path>
              <path
                fill='#FF3D00'
                d='M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z'
              ></path>
              <path
                fill='#4CAF50'
                d='M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z'
              ></path>
              <path
                fill='#1976D2'
                d='M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z'
              ></path>
            </svg>
            Continue with Google
          </button>
          <button type='submit'>
            <svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='100' height='100' viewBox='0 0 48 48'>
              <path fill='#ff5722' d='M6 6H22V22H6z' transform='rotate(-180 14 14)'></path>
              <path fill='#4caf50' d='M26 6H42V22H26z' transform='rotate(-180 34 14)'></path>
              <path fill='#ffc107' d='M26 26H42V42H26z' transform='rotate(-180 34 34)'></path>
              <path fill='#03a9f4' d='M6 26H22V42H6z' transform='rotate(-180 14 34)'></path>
            </svg>
            Continue with Microsoft
          </button>
          <button type='submit'>
            <svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='100' height='100' viewBox='0 0 30 30'>
              <path d='M25.565,9.785c-0.123,0.077-3.051,1.702-3.051,5.305c0.138,4.109,3.695,5.55,3.756,5.55 c-0.061,0.077-0.537,1.963-1.947,3.94C23.204,26.283,21.962,28,20.076,28c-1.794,0-2.438-1.135-4.508-1.135 c-2.223,0-2.852,1.135-4.554,1.135c-1.886,0-3.22-1.809-4.4-3.496c-1.533-2.208-2.836-5.673-2.882-9 c-0.031-1.763,0.307-3.496,1.165-4.968c1.211-2.055,3.373-3.45,5.734-3.496c1.809-0.061,3.419,1.242,4.523,1.242 c1.058,0,3.036-1.242,5.274-1.242C21.394,7.041,23.97,7.332,25.565,9.785z M15.001,6.688c-0.322-1.61,0.567-3.22,1.395-4.247 c1.058-1.242,2.729-2.085,4.17-2.085c0.092,1.61-0.491,3.189-1.533,4.339C18.098,5.937,16.488,6.872,15.001,6.688z'></path>
            </svg>
            Continue with Apple
          </button>
          <button type='submit'>
            <svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='100' height='100' viewBox='0 0 100 100'>
              <path
                fill='#ee4267'
                d='M39,53L39,53c4.418,0,8,3.582,8,8v18c0,4.418-3.582,8-8,8h0c-4.418,0-8-3.582-8-8V61 C31,56.582,34.582,53,39,53z'
              ></path>
              <path
                fill='#8cc78c'
                d='M59,13L59,13c4.418,0,8,3.582,8,8v18c0,4.418-3.582,8-8,8h0c-4.418,0-8-3.582-8-8V21 C51,16.582,54.582,13,59,13z'
              ></path>
              <path
                fill='#31c4f3'
                d='M47,41L47,41c0,4.418-3.582,8-8,8H21c-4.418,0-8-3.582-8-8v0c0-4.418,3.582-8,8-8h18 C43.418,33,47,36.582,47,41z'
              ></path>
              <path
                fill='#ead032'
                d='M85,59L85,59c0,4.418-3.582,8-8,8H59c-4.418,0-8-3.582-8-8v0c0-4.418,3.582-8,8-8h18 C81.418,51,85,54.582,85,59z'
              ></path>
              <path
                fill='#ead032'
                d='M59,87L59,87c-4.418,0-8-3.582-8-8v-8h8c4.418,0,8,3.582,8,8v0C67,83.418,63.418,87,59,87z'
              ></path>
              <path
                fill='#ee4267'
                d='M19,69L19,69c-4.418,0-8-3.582-8-8v0c0-4.418,3.582-8,8-8h8v8C27,65.418,23.418,69,19,69z'
              ></path>
              <path
                fill='#8cc78c'
                d='M79,47h-8v-8c0-4.418,3.582-8,8-8h0c4.418,0,8,3.582,8,8v0C87,43.418,83.418,47,79,47z'
              ></path>
              <path
                fill='#31c4f3'
                d='M47,29h-8c-4.418,0-8-3.582-8-8v0c0-4.418,3.582-8,8-8h0c4.418,0,8,3.582,8,8V29z'
              ></path>
              <path
                fill='#1f212b'
                d='M39,88c-4.962,0-9-4.038-9-9V61c0-4.962,4.038-9,9-9s9,4.038,9,9v18C48,83.962,43.962,88,39,88z M39,54c-3.86,0-7,3.14-7,7v18c0,3.86,3.14,7,7,7s7-3.14,7-7V61C46,57.14,42.86,54,39,54z'
              ></path>
              <path
                fill='#1f212b'
                d='M59,48c-4.962,0-9-4.038-9-9V21c0-4.962,4.038-9,9-9s9,4.038,9,9v18C68,43.962,63.962,48,59,48z M59,14c-3.86,0-7,3.14-7,7v18c0,3.86,3.14,7,7,7s7-3.14,7-7V21C66,17.14,62.86,14,59,14z'
              ></path>
              <path
                fill='#1f212b'
                d='M39,50H21c-4.962,0-9-4.038-9-9s4.038-9,9-9h18c4.962,0,9,4.038,9,9S43.962,50,39,50z M21,34 c-3.86,0-7,3.14-7,7s3.14,7,7,7h18c3.86,0,7-3.14,7-7s-3.14-7-7-7H21z'
              ></path>
              <path
                fill='#1f212b'
                d='M77,68H59c-4.962,0-9-4.038-9-9s4.038-9,9-9h18c4.962,0,9,4.038,9,9S81.962,68,77,68z M59,52 c-3.86,0-7,3.14-7,7s3.14,7,7,7h18c3.86,0,7-3.14,7-7s-3.14-7-7-7H59z'
              ></path>
              <path
                fill='#1f212b'
                d='M59,88c-4.962,0-9-4.038-9-9v-8c0-0.552,0.448-1,1-1h8c4.962,0,9,4.038,9,9S63.962,88,59,88z M52,72v7c0,3.86,3.14,7,7,7s7-3.14,7-7s-3.14-7-7-7H52z'
              ></path>
              <path
                fill='#1f212b'
                d='M19,70c-4.962,0-9-4.038-9-9s4.038-9,9-9h8c0.552,0,1,0.448,1,1v8C28,65.962,23.962,70,19,70z M19,54c-3.86,0-7,3.14-7,7s3.14,7,7,7s7-3.14,7-7v-7H19z'
              ></path>
              <path
                fill='#1f212b'
                d='M79,48h-8c-0.552,0-1-0.448-1-1v-8c0-4.962,4.038-9,9-9s9,4.038,9,9S83.962,48,79,48z M72,46h7 c3.86,0,7-3.14,7-7s-3.14-7-7-7s-7,3.14-7,7V46z'
              ></path>
              <path
                fill='#1f212b'
                d='M47,30h-8c-4.962,0-9-4.038-9-9s4.038-9,9-9s9,4.038,9,9v8C48,29.552,47.552,30,47,30z M39,14 c-3.86,0-7,3.14-7,7s3.14,7,7,7h7v-7C46,17.14,42.86,14,39,14z'
              ></path>
            </svg>
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
