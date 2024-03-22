import { useState } from 'react'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Home from "./components/Home.jsx"
import About from "./components/About.jsx" 
import Labs from "./components/Labs.jsx"
import Support from "./components/Support.jsx" 
import NotFound from "./components/NotFound.jsx"  
import { NavLink,Link } from 'react-router-dom'

function App() {
 

  return (
    <div className='App'>

      <nav>
        <ul>
          {/* Link ki jagah NavLink isliye use karte hai kuki agar NavLink hai toh jis link par click krege usme active class add ho jati hai   */}

          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/labs">Labs</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/support">Support</NavLink></li>
        </ul>
      </nav>


      {/* To create several routes embed emebed the route inside routes */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/labs' element={<Labs></Labs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/support' element={<Support></Support>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>

        {/* given path ke alawa koi aurpath agar daloge toh use * */}
        <Route path='*' element={<div>Galat aa gye Bhai</div>}></Route>
      </Routes>


    </div>
  )
}

export default App
