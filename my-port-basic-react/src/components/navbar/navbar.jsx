import React from 'react';
import styles from '../navbar/navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
<a href="#">about me </a>
<a href="#">my skill</a>
<a href="#">portfolio</a>
<a href="#">contacts</a>
    </div>
  );
};

export default Navbar;