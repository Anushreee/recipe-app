import React from 'react';
import logo from '../../images/logo.png';
import {NavLink} from 'react-router-dom';
import classes from './Navbar.module.scss';
import NavigationItem from './NavigationItem/NavigationItem';

const Navbar = (props) => {
  
    return(
        <nav className={classes.Nav}>
            <NavLink to="/">
                <img src={logo} alt="logo"></img>
            </NavLink>
            <div>
                <ul className={classes.List}>
                    <NavigationItem link="/" active>Home</NavigationItem>
                    <NavigationItem link="/recipes">Recipes</NavigationItem>
                   
                    
                </ul>
            </div>
      </nav>
    )
  
}

export default Navbar;
