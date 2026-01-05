import React, { useContext } from 'react'
import { ThemeDataContext } from '../Context/ThemeContext'

const Button = () => {

const [theme,setTheme] = useContext(ThemeDataContext)

  const changeTheme = ()=>{
 setTheme("Dark")
  }
  return (
    <div onClick={changeTheme}>
      Change Theme {theme}
    </div>
  )
}

export default Button