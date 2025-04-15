import React from 'react';
import LoginInput from '../components/LoginInput';
import { useDispatch } from 'react-redux';
import { asyncSetAuthUser } from '../states/authUser/action';

const LoginPage = () => {
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };
  return (
    <div className="grid h-screen place-items-center">
      <LoginInput login={onLogin} />
    </div>
  );
};

export default LoginPage;
