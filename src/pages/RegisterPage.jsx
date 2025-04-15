import React from 'react';
import RegisterInput from '../components/RegisterInput';
import { useDispatch } from 'react-redux';
import { asyncRegisterUser } from '../states/users/action';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));
    navigate('/');
  };
  return (
    <div className=" h-screen grid  place-items-center">
      <RegisterInput register={onRegister} />
    </div>
  );
};

export default RegisterPage;
