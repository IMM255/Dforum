import React from 'react';

const RegisterInput = () => {
  return (
    <div className="mx-auto items-center border py-4 px-8 min-w-96 ">
      <h1 className="text-2xl text-center font-semibold">Register</h1>
      <form action="" className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label htmlFor="">Name</label>
          <input type="text" className="border" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Email</label>
          <input type="email" className="border" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Password</label>
          <input type="password" className="border" />
        </div>
        <button className="border px-2 py-1 rounded">Register</button>
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

export default RegisterInput;
