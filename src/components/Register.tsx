import {useState} from "react";
import {BackEndAPI} from "../consts";

export function Register() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault() // Prevent form refresh
    setError('') // Clear previous errors

    // todo:
  }

  return (
    <div className='register-container'>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div className='form-group'>
          <label>Full Name</label>
          <input
            type='text'
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder='value'
            required
          />
        </div>

        <div className='form-group'>
          <label>Email:</label>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        {error && <p className='error'>{error}</p>}
        <button type='submit'>Sign up</button>
      </form>
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
    </div>
  )
}
