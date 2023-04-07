import React, {useState} from 'react'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'

import './Navbar.css'
import logo from '..//..//assets//logo.png'

const Menu = () => (
  <>
  <p><a href='home'>Home</a></p>
  <p><a href='analysis'>Analysis</a></p>
  <p><a href='model_specification'>Model Specification</a></p>
  <p><a href='performance'>Performance</a></p>
  <p><a href='backtest'>Backtest</a></p>
  <p><a href='performance'>Links</a></p>

  </>
)

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='ezm__navbar '>

      <div className='ezm__navbar-links'>

        <div className='ezm__navbar-links_logo'>
          <img src={logo} alt='logo'></img>
        </div>

        <div className='ezm__navbar-links_container'>
          <Menu />
        </div>

      </div>

      <div className='ezm__navbar-menu'>
        {
          toggleMenu
          ? <RiCloseLine color='#fff' size = {27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='#fff' size = {27} onClick={() => setToggleMenu(true)} />
        }

        {
          toggleMenu && (
            <div className='ezm__navbar-menu_container scale-up-center'>
              <div className='ezm__navbar-menu_container-links'>
                <Menu />
              </div>
            </div>
          )
        }

      </div>
    </div>
  )
}

export default Navbar