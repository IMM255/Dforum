import React from 'react';
import useInput from '../hooks/useInput';

const LoginInput = ({ login }) => {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <div className="mx-auto items-center border py-4 px-8 min-w-96 ">
      <h1 className="text-2xl text-center font-semibold">Login</h1>
      <form action="" className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label htmlFor="">Email</label>
          <input
            type="email"
            value={email}
            onChange={onEmailChange}
            placeholder="Email"
            className="border"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Password</label>
          <input
            type="password"
            className="border"
            value={password}
            onChange={onPasswordChange}
            placeholder="Password"
          />
        </div>
        <button
          type="button"
          onClick={() => login({ email, password })}
          className="border px-2 py-1 rounded"
        >
          Login
        </button>
        <span>
          Belum punya akun ?{' '}
          <a href="/register" className="text-blue-500">
            Daftar disini
          </a>
        </span>
      </form>
    </div>
  );
};

export default LoginInput;
