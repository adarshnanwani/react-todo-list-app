import React from 'react';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <h2 className='site-name'>React Todo List</h2>
      <ul>
        <li>
          <a href='#'>Login</a>
        </li>
        <li>
          <a href='#'>Signup</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
