import { Link } from 'react-router-dom';
import { UserRound, Sun, Moon, Github, Linkedin, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    document.body.classList = darkMode ? 'dark' : '';
  }, [darkMode]);

  return (
    <div className='header'>
      <div className='logo'>
        <UserRound />
        <h3>My Portfolio</h3>
      </div>

      <ul className='nav'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/skills'>Skills</Link>
        </li>
        <li>
          <Link to='/projects'>Projects</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>

      <div className='social'>
        <button>Download Resume</button>
        <a href='https://linkedin.com' target='_blank' rel='noreferrer'>
          <Linkedin />
        </a>
        <a href='https://github.com/Sahej98' target='_blank' rel='noreferrer'>
          <Github />
        </a>
        <div
          className='theme-toggle'
          onClick={() => {
            setDarkMode((prev) => !prev);
          }}>
          {darkMode ? <Moon /> : <Sun />}
        </div>
        <div
          className='menu-toggle'
          onClick={() => setVisible((prev) => !prev)}>
          {visible ? <X /> : <Menu />}
        </div>
      </div>

      <ul className='mobile-nav' style={{ display: visible ? 'flex' : 'none' }}>
        <li>
          <Link to='/' onClick={() => setVisible((prev) => !prev)}>
            Home
          </Link>
        </li>
        <li>
          <Link to='/about' onClick={() => setVisible((prev) => !prev)}>
            About
          </Link>
        </li>
        <li>
          <Link to='/skills' onClick={() => setVisible((prev) => !prev)}>
            Skills
          </Link>
        </li>
        <li>
          <Link to='/projects' onClick={() => setVisible((prev) => !prev)}>
            Projects
          </Link>
        </li>
        <li>
          <Link to='/contact' onClick={() => setVisible((prev) => !prev)}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
