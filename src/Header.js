import React from 'react';
import './App.css';
import { FaBeer } from 'react-icons/fa';


class Header extends React.Component {

  render() {
    return (
      <div>
            <header className="text-center">
            <h1 className="titleheader">PACK AN UMBRELLA 
            </h1>
          
            </header>
            <h3> Lets go for a <FaBeer />? </h3>
        </div>

    );
  }
}

export default Header