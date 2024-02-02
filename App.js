// import logo from './logo.svg';

import './App.css';
import ThemeContext from './ThemeContext';
//import TodoApp from './TodoApp';
import {Suspense, useState} from "react";
import React from "react";
import { lazy } from "react";
const TodoApp=lazy(()=>import("./TodoApp"));

function App() {

  const [user,setUser]=useState({"name":"myName","id":17866});
  return (
    <div className="App">
      <ThemeContext.Provider value= {user}>
        <Suspense fallback={<div>loading....</div>}>
        <TodoApp/>
        </Suspense>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;



// import { useState} from "react";
// // import ReactDOM from "react-dom/client";
// import ThemeContext from "./ThemeContext";
// import TodoApp from "./TodoApp";

// //const UserContext = createContext();

// export default function App() {
//   const [user, setUser] = useState("Jesse Hall");

//   return (
//     <ThemeContext.Provider value={user}>
//       <h1>{`Hello ${user}!`}</h1>
//       <TodoApp />
//     </ThemeContext.Provider>
//   );
// }
