import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';

interface Props {}

const Navbar = (props: Props) => {
  return (
    <nav className="d-flex justify-content-end">
      <div className="">Login</div>
      <a href="" className="">
        Signup
      </a>
    </nav>
  );
};
export default Navbar;
