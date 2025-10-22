import React from 'react';
import styles from '../hero/hero.module.css'
const Hero = () => {
  return (
    <>
    <div className={styles.hero}>
      <h1>hi there! my name is gilman qazi and <br/> i'm a <span>full stack developer</span></h1>
      <button>Download the CV</button>
    </div>

    </>
  );
};

export default Hero;