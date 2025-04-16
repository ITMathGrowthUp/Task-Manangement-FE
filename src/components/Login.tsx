import { useEffect, useState } from 'react';
import { AuthContextType, useAuth } from '../contexts/AuthContext.tsx';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isRemember, setIsRemember] = useState<boolean>(false);

  const authContext: AuthContextType = useAuth();
  const { handleLogout, handleLogin, isAuthenticated, error } = authContext;
  const navigate = useNavigate();

  const _handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleLogin(username, password, isRemember);
  };

  const handleGoogleLogin = () => {
    window.location.href =
      'https://img.docnhanh.vn/images/uploads/2023/12/02/3478946031435033537243133962557857865856882n-17015041414671485356860.jpeg';
  };

  const handleMicrosoftLogin = () => {
    window.location.href =
      'https://dermamedtic.vn/wp-content/uploads/2023/12/gai-xinh-han-quoc-2-1.jpg';
  };

  const handleAppleLogin = () => {
    window.location.href =
      'https://thanhnien.mediacdn.vn/uploaded/voba/2021_06_15/6_NPFA.jpg?width=500';
  };

  const handleSlackLogin = () => {
    window.location.href =
      'https://anhavatar.com/wp-content/uploads/2025/01/anh-chup-hotgirl-insta.jpg';
  };

  useEffect(() => {
    const userStore = localStorage.getItem('username');
    const passStore = localStorage.getItem('password');
    const rmeStore = localStorage.getItem('rememberMe');

    if (rmeStore === 'true' && userStore && passStore) {
      handleLogin(userStore, passStore, true);
    }
  }, [handleLogin]);

  // Conditional rendering based on login status
  // todo: routing to homepage
  if (isAuthenticated) {
    navigate('./home');
  }

  return (
    <div className='login-container'>
      <h1>Tittle here</h1>
      <div className='login-main-container'>
        <div className='login-picture'>
          <img src='./home.png' alt='Login home picture' />
        </div>
        <div className='login'>
          <form onSubmit={_handleLogin}>
            <div className='login-form-group'>
              <label>Username</label>
              <input
                type='text'
                value={username}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                placeholder='admin123@'
                required
              />
            </div>
            <div className='login-form-group'>
              <label>Password</label>
              <input
                type='password'
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                placeholder='Minimum 8 characters'
                required
              />
            </div>
            {error && <p className='error'>{error}</p>}
            <label>
              <input
                type='checkbox'
                checked={isRemember}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setIsRemember(e.target.checked)
                }
              />
              Remember me
            </label>
            <button type='submit'>Sign in</button>
          </form>
          <div className='login-others'>
            <div className='login-options'>
              <button type='button' onClick={handleGoogleLogin}>
                <img src={'./google.svg'} alt={'GoogleLogo'} />
                <p>Continue with Google</p>
              </button>
              <button type='button' onClick={handleMicrosoftLogin}>
                <img src={'./microsoft.svg'} alt={'MicrosoftLogo'} />
                <p>Continue with Microsoft</p>
              </button>
              <button type='button' onClick={handleAppleLogin}>
                <img src={'./apple.svg'} alt={'AppleLogo'} />
                <p>Continue with Apple</p>
              </button>
              <button type='button' onClick={handleSlackLogin}>
                <img src={'./slack.svg'} alt={'SlackLogo'} />
                <p>Continue with Slack</p>
              </button>
            </div>
            <div className='login-anothers'>
              <div>
                <a
                  href={
                    'https://icdn.24h.com.vn/upload/4-2024/images/2024-11-22/1732262807-hot-girl-xinh-dep-cham-dien-ao-lung-quan-ngan-cun-khoe-dang-hinh-2-width615height800.jpg'
                  }
                >
                  Can't log in?
                </a>
                <span> &#x2022; </span>
                <Link to='/register'>Sign up for an account</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
