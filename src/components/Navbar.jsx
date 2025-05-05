import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
const Navbar = ({ authUser, signOut }) => {
  return (
    <header className="bg-black w-full h-16 flex items-center">
      <nav className="text-white px-8 items-center flex justify-between w-full">
        <div className="flex gap-4">
          <Link to="/">
            <h1 className="text-4xl font-semibold ">D-FORUM</h1>
          </Link>
        </div>
        {authUser ? (
          <button type="button" onClick={signOut}>
            Sign Out
          </button>
        ) : (
          <button className="border px-2 py-1 rounded-sm">Login</button>
        )}
      </nav>
    </header>
  );
};

Navbar.propTypes = {
  authUser: PropTypes.string.isRequired,
  signOut: PropTypes.func.isRequired,
};

export default Navbar;
