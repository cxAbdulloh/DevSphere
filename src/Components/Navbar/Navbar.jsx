import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faMoon } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {

    function toggleMenu() {
      const menu = document.querySelector('.menu-links');
      const icon = document.querySelector('.hamburger-icon');
      menu.classList.toggle("open");
      icon.classList.toggle("open");
    }

    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
      setDarkMode(!darkMode);

    };

    useEffect(() => {
        if (darkMode) {
          document.body.classList.add('dark-mode');
        } else {
          document.body.classList.remove('dark-mode');
        }
      }, [darkMode]);


  return (
    <>
    <nav id='desktop-nav' className={darkMode ? 'dark-mode' : ''}>
        <div className="nav-logo">Dev<span style={{color:"#4F46E5"}}>Sphere</span></div>
        <div className="nav-links">
            <ul>
                <li><a href="#Ijtmoiy-Tarmoqlar">Ijtmoiy Tarmoqlar</a></li>
                <li><a href="#Kurslar">Kurslar</a></li>
                <li><a href="#Mentorlar">Mentorlar</a></li>
                <li><a href="#FAQ">FAQ</a></li>
            </ul>
        </div>
        <div className="nav-btn">
          {/* <div className="light-dark-mode">
             <div onClick={toggleDarkMode} style={{display:"none"}}>
             <FontAwesomeIcon
            icon={darkMode ? faLightbulb : faMoon}
            style={{ color: darkMode ? '#fff' : '#020817', height:"27px", marginTop:"5px", cursor:"pointer"}}
          />
              </div>
             
          </div> */}
          <button>Kirish</button>
        </div>
    </nav>



    <nav id='hamburger-nav'>
        <div className="hamburger-logo">Dev<span style={{color:"#4F46E5"}}>Sphere</span></div>
        <div className="hamburger-menu" >
            <div className="hamburger-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>     
            </div>
        <div className="menu-links">
            <ul>
                <li onClick={toggleMenu}><a href="" >Ijtmoiy Tarmoqlar</a></li>
                <li onClick={toggleMenu}><a href="" >Kurslar</a></li>
                <li onClick={toggleMenu}><a href="" >Mentorlar</a></li>
                <li onClick={toggleMenu}><a href="" >FAQ</a></li>
            </ul>
        </div> 
         <div className="nav-btn">
            <button>Kirish</button>
        </div>  
        </div>
    </nav>
   

    </>
  )
}

export default Navbar