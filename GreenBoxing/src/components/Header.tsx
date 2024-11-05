import React from 'react';

const Header = () => (
  <header className="header">
    <div className="content-header">
      <div className="logo">
        <img src="/img/1.png" alt="Logo Green Boxing" />
      </div>
      <h4>GREEN BOXING</h4>
    </div>
    <nav className="btn-menu">
      <div className="menu">
        <a href="#apps"></a>
        <a href="#comunidade"></a>
      </div>
    </nav>
  </header>
);

export default Header;