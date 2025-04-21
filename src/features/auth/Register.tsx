import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext.tsx';
import { useNavigate } from 'react-router-dom';

export function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { handleRegister, error } = useAuth();
  const navigate = useNavigate();

  const _handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isSuccess = await handleRegister(username, password, email);
    if (isSuccess) {
      navigate('/');
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4'>
      <div className='w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 space-y-6'>
        <h1 className='text-2xl font-bold text-gray-900 dark:text-white text-center'>
          Create your account
        </h1>

        <form className='space-y-4' onSubmit={_handleRegister}>
          <div>
            <label
              htmlFor='username-icon'
              className='block mb-1 text-sm font-medium text-gray-900 dark:text-white'
            >
              Username
            </label>
            <div className='relative'>
              <div className='absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none'>
                <svg
                  className='w-5 h-5 text-gray-500 dark:text-gray-400'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z'
                  />
                </svg>
              </div>
              <input
                type='text'
                id='username-icon'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder='Enter your username'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white'
              />
            </div>
          </div>

          <div>
            <label
              htmlFor='email-address-icon'
              className='block mb-1 text-sm font-medium text-gray-900 dark:text-white'
            >
              Email
            </label>
            <div className='relative'>
              <div className='absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none'>
                <svg
                  className='w-4 h-4 text-gray-500 dark:text-gray-400'
                  fill='currentColor'
                  viewBox='0 0 20 16'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z' />
                  <path d='M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z' />
                </svg>
              </div>
              <input
                type='email'
                id='email-address-icon'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='admin@example.com'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white'
              />
            </div>
          </div>

          <div>
            <label
              htmlFor='password-icon'
              className='block mb-1 text-sm font-medium text-gray-900 dark:text-white'
            >
              Password
            </label>
            <div className='relative'>
              <div className='absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none'>
                <svg
                  className='w-5 h-5 text-gray-500 dark:text-gray-400'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M12 15v2m6 4H6a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2ZM8 11V7a4 4 0 1 1 8 0v4'
                  />
                </svg>
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                id='password-icon'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='••••••••'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full ps-10 pr-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white'
              />
              <button
                type='button'
                onClick={() => setShowPassword((prev) => !prev)}
                className='absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 dark:text-gray-400 active:scale-95 transition-transform'
              >
                {showPassword ? (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-5 h-5'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M3 3l18 18M9.88 9.88A3 3 0 0114.12 14.12M3.98 8.223C5.285 5.29 8.863 3 12 3s6.715 2.29 8.02 5.223c.235.566.363 1.182.363 1.777 0 .595-.128 1.211-.363 1.777C18.715 16.71 15.137 19 12 19s-6.715-2.29-8.02-5.223A4.478 4.478 0 013.98 10c0-.595.128-1.211.363-1.777z'
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-5 h-5'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M12 4.5c-4.136 0-7.76 2.818-9.067 6.75C4.24 15.182 7.864 18 12 18s7.76-2.818 9.067-6.75C19.76 7.318 16.136 4.5 12 4.5z'
                    />
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M12 9.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z'
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {error && (
            <p className='text-sm text-red-500 font-medium'>{error}</p>
          )}

          <div>
            <button
              type='submit'
              className='w-full text-grey-700 bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-md text-sm px-5 py-2.5 text-center dark:bg-purple-500 dark:hover:bg-purple-600 dark:focus:ring-purple-800 transition-transform active:scale-95'
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
