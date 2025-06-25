import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul style={{ display: 'flex', gap: '20px', listStyle: 'none' }}>
        <li><Link to="/">Trang chủ</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        <li><Link to="/layout">layout</Link></li>
        <li><Link to="/contact">Liên hệ</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;