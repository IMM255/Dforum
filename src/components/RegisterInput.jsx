import React from 'react';
import useInput from '../hooks/useInput';
import PropTypes from 'prop-types';

const RegisterInput = ({ register }) => {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  return (
    <div className="mx-auto items-center border py-4 px-8 min-w-96 ">
      <h1 className="text-2xl text-center font-semibold">Register</h1>
      <form action="" className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label htmlFor="">Name</label>
          <input
            type="text"
            className="border"
            value={name}
            onChange={onNameChange}
            placeholder="Name"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Email</label>
          <input
            type="email"
            className="border"
            value={email}
            onChange={onEmailChange}
            placeholder="Email"
            required
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
            required
          />
        </div>
        <button
          type="button"
          className="border px-2 py-1 rounded"
          onClick={() => register({ name, email, password })}
        >
          Register
        </button>
      </form>
      <span>
        Sudah punya akun ?{' '}
        <a href="/login" className="text-blue-500">
          login disini
        </a>
      </span>
    </div>
  );
};

RegisterInput.propTypes ={
  register: PropTypes.func.isRequired
};

export default RegisterInput;
