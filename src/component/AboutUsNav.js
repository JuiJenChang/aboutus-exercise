import React from 'react';
import './AboutUsNav.css';
import five from './image/five.png';

function AboutUsNav() {
  return (
    <nav className="nav">
      <img src={five}
        className="nav-img"
      />
      <ul className="nav-ul">
        <li><a href="/">首頁</a></li>
        <li><a href="#">關於我們</a></li>
        <li><a href="#">大數據</a></li>
        <li><a href="#">數學化BI管理</a></li>
        <li><a href="#">資產戰略</a></li>
        <li><a href="#">聯繫我們</a></li>
      </ul>
    </nav>
  );
}

export default AboutUsNav;
