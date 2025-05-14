import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import DetailPage from './pages/DetailPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncPreloadProcess } from './states/isPreload/action';
import { asyncUnsetAuthUser } from './states/authUser/action';
import LoadingBar from 'react-top-loading-bar';
import React from 'react';
import LeaderBoard from './pages/LeaderBoard';

function App() {
  const loadingBarRef = useRef(null);
  const isLoading = useSelector((state) => state.isLoading);
  const { authUser = null, isPreload = false } = useSelector(
    (states) => states
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  useEffect(() => {
    if (!loadingBarRef.current) return;
    if (isLoading) {
      loadingBarRef.current.continuousStart();
    } else {
      loadingBarRef.current.complete();
    }
  }, [isLoading]);

  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser());
  };

  if (isPreload) {
    return null;
  }

  if (authUser === null) {
    return (
      <>
        <Navbar authUser={authUser} signOut={onSignOut} />
        <main>
          <LoadingBar color="#f11946" ref={loadingBarRef} />
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
        <LoadingBar color="#f11946" ref={loadingBarRef} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/thread/:threadId" element={<DetailPage />} />
          <Route path="/leaderBoard" element={<LeaderBoard />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
