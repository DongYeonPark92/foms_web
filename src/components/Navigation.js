// Navigation.js
import React from 'react';
import styles from '../CSS/Navigation.module.css'; // CSS 모듈을 import

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <div className={styles.logo}></div>
      <ul className={styles.navList}>
        <li>OMS</li>
        <li>ABOUT</li>
        <li>PORTFOLIO</li>
        <li>SERVICES</li>
        <li>CONTACT</li>
        <li>BLOG</li>
        <li>CAREERS</li>
        <li>CLIENT PORTAL</li>
        <li>CONSULTING</li>
        <li>EVENTS</li>
        <li>LEARN</li>
        <li>SHOP</li>
      </ul>
      <div className={styles.search}>
        <input type="text" placeholder="Search" />
        <button type="submit">
          <i className="fa fa-search"></i> {/* Font Awesome 검색 아이콘 */}
        </button>
      </div>
    </nav>
  );
};

export default Navigation;