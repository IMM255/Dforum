import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import DetailPage from './pages/DetailPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncPreloadProcess } from './states/isPreload/action';
import { asyncUnsetAuthUser } from './states/authUser/action';

function App() {
  const { authUser = null, isPreload = false } = useSelector(
    (states) => states
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser());
  };

  if (isPreload) {
    return null;
  }
  console.log(authUser);
  if (authUser === null) {
    return (
      <>
        <Navbar authUser={authUser} signOut={onSignOut} />
        <main>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar authUser={authUser} signOut={onSignOut} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/threads" element={<DetailPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
