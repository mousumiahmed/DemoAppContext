import { useContext } from "react";
import ThemeContext from "./ThemeContext";


import React from 'react'

export default function TodoApp() {
    const user= useContext(ThemeContext);
    console.log(user);
  return (
    <div>TodoApp {user.name}</div>
  )
}
