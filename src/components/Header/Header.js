import React from 'react';
import classes from './Header.module.scss';

const Header = ({children,styleClass,title}) =>{
    return (
       <header className={styleClass}>
            <h1 className={classes.Title}>{title}</h1>
            {children}
       </header>
    )
   
}

Header.defaultProps = {
    title: 'default title',
    styleClass: 'HeaderHero'
} 

export default Header;