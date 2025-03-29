import { useState } from 'react'
import { useAuth } from '../context/AuthContext.tsx'
import { Link } from 'react-router-dom'

// todo: convert JSX -> React Node

export function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const authContext = useAuth()
  const { handleLogout, handleLogin, isAuthenticated, error } = authContext

  const _handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault() // Prevent form refresh
    handleLogin(username, password)
  }

  const handleGoogleLogin = () => {
    // Replace with your actual Google OAuth URL
    window.location.href =
      'https://img.docnhanh.vn/images/uploads/2023/12/02/3478946031435033537243133962557857865856882n-17015041414671485356860.jpeg'
  }

  const handleMicrosoftLogin = () => {
    window.location.href = 'https://dermamedtic.vn/wp-content/uploads/2023/12/gai-xinh-han-quoc-2-1.jpg'
  }

  const handleAppleLogin = () => {
    window.location.href = 'https://thanhnien.mediacdn.vn/uploaded/voba/2021_06_15/6_NPFA.jpg?width=500'
  }

  const handleSlackLogin = () => {
    window.location.href = 'https://anhavatar.com/wp-content/uploads/2025/01/anh-chup-hotgirl-insta.jpg'
  }

  // Conditional rendering based on login status
  if (isAuthenticated) {
    return (
      <div className='login-container'>
        <h2>Welcome!</h2>
        <p>You are logged in as {username}.</p>
        <button onClick={() => handleLogout()}>Logout</button>
      </div>
    )
  }

  return (
    <div className='login-container'>
      <h1>Tittle here</h1>
      <div className='login-main-container'>
        <div className='login-picture'>
          <img src="./home.png" alt="Login home picture" />
        </div>
        <div className='login'>
          <form onSubmit={_handleLogin}>
            <div className='login-form-group'>
              <label>Username</label>
              <input
                type='text'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder='Guest 123'
                required
              />
            </div>
            <div className='login-form-group'>
              <label>Password</label>
              <input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Minimum 8 characters'
                required
              />
            </div>
            {error && <p className='error'>{error}</p>}
            <label>
              <input type='checkbox' />
              Remember me
            </label>
            <button type='submit'>Sign in</button>
          </form>
          <div className="login-others">
            <div className="login-options">
              <button type='submit' onClick={handleGoogleLogin}>
                <img src={'./google.svg'} alt={'GoogleLogo'} />
                <p>Continue with Google</p>
              </button>
              <button type='submit' onClick={handleMicrosoftLogin}>
                <img src={'./microsoft.svg'} alt={'MicrosoftLogo'} />
                <p>Continue with Microsoft</p>
              </button>
              <button type='submit' onClick={handleAppleLogin}>
                <img src={'./apple.svg'} alt={'AppleLogo'} />
                <p>Continue with Apple</p>
              </button>
              <button type='submit' onClick={handleSlackLogin}>
                <img src={'./slack.svg'} alt={'SlackLogo'} />
                <p>Continue with Slack</p>
              </button>
            </div>
            <div className="login-anothers">
              <div>
                <a
                  href={
                    'https://icdn.24h.com.vn/upload/4-2024/images/2024-11-22/1732262807-hot-girl-xinh-dep-cham-dien-ao-lung-quan-ngan-cun-khoe-dang-hinh-2-width615height800.jpg'
                  }
                >
                  Can't log in?
                </a>
                <span> &#x2022; </span>
                <a
                  href={
                    'https://icdn.24h.com.vn/upload/4-2024/images/2024-11-22/1732262807-hot-girl-xinh-dep-cham-dien-ao-lung-quan-ngan-cun-khoe-dang-hinh-2-width615height800.jpg'
                  }
                >
                  Sign up for an account
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
