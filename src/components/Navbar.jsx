import React from 'react';

const Navbar = ({ authUser, signOut }) => {
  return (
    <header className="bg-black w-full h-16 flex items-center">
      <nav className="text-white px-8 items-center flex justify-between w-full">
        <div className="flex gap-4">
          <h1 className="text-4xl font-semibold ">D-FORUM</h1>
          <input className="bg-white rounded-md" type="text" />
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

export default Navbar;
