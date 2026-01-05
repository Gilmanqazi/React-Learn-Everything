
import { useContext } from 'react';
import Nav2 from './Nav2';
import { ThemeDataContext } from '../Context/ThemeContext';


const Nav = () => {
const [theme] = useContext(ThemeDataContext)
  return (
    <div className={theme} >
<h1>Gilman</h1>
<Nav2 />

    </div>
  );
};

export default Nav;