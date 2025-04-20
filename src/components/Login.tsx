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

  if (isAuthenticated) {
    navigate('./home');
  }

  return (
    <div className='min-h-screen bg-gray-100 text-gray-900 flex justify-center'>
      <div className='max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1'>
        <div className='lg:w-1/2 xl:w-5/12 p-6 sm:p-12'>
          <div>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrWh5XaD2PnjHwthUEUmB-UAwqXJFQDhJmWQ&s'
              className='w-32 mx-auto'
              alt='Logo'
            />
          </div>
          <div className='mt-12 flex flex-col items-center'>
            <h1 className='text-2xl xl:text-3xl font-extrabold'>Sign in</h1>
            <div className='w-full flex-1 mt-8'>
              <form onSubmit={_handleLogin} className='mx-auto max-w-xs'>
                <input
                  className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
                  type='text'
                  placeholder='Username'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <input
                  className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5'
                  type='password'
                  placeholder='Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label className='flex items-center mt-3 text-sm'>
                  <input
                    type='checkbox'
                    checked={isRemember}
                    onChange={(e) => setIsRemember(e.target.checked)}
                    className='mr-2'
                  />
                  Remember me
                </label>
                {error && <p className='text-red-500 mt-2 text-sm'>{error}</p>}
                <button
                  type='submit'
                  className='mt-5 tracking-wide font-semibold bg-indigo-500 text-white w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none'
                >
                  <span className='ml-3'>Sign In</span>
                </button>
              </form>

              <div className='my-6 border-b text-center'>
                <div className='leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2'>
                  Or continue with
                </div>
              </div>

              <div className='flex flex-col items-center gap-3'>
                <button
                  className='w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-white text-gray-800 flex items-center justify-center border'
                  onClick={handleGoogleLogin}
                  type='button'
                >
                  <img src='./google.svg' alt='Google Logo' className='w-5 h-5 mr-2' />
                  Continue with Google
                </button>

                <button
                  className='w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-white text-gray-800 flex items-center justify-center border'
                  onClick={handleMicrosoftLogin}
                  type='button'
                >
                  <img src='./microsoft.svg' alt='Microsoft Logo' className='w-5 h-5 mr-2' />
                  Continue with Microsoft
                </button>

                <button
                  className='w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-white text-gray-800 flex items-center justify-center border'
                  onClick={handleAppleLogin}
                  type='button'
                >
                  <img src='./apple.svg' alt='Apple Logo' className='w-5 h-5 mr-2' />
                  Continue with Apple
                </button>

                <button
                  className='w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-white text-gray-800 flex items-center justify-center border'
                  onClick={handleSlackLogin}
                  type='button'
                >
                  <img src='./slack.svg' alt='Slack Logo' className='w-5 h-5 mr-2' />
                  Continue with Slack
                </button>
              </div>

              <p className='mt-6 text-xs text-gray-600 text-center'>
                I agree to abide by hehe's{' '}
                <a href='#' className='border-b border-gray-500 border-dotted'>
                  Terms of Service
                </a>{' '}
                and its{' '}
                <a href='#' className='border-b border-gray-500 border-dotted'>
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className='flex-1 bg-indigo-100 text-center hidden lg:flex'>
          <div
            className='m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat'
            style={{
              backgroundImage:
                "url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')"
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Login;
