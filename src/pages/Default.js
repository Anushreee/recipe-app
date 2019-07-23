import React,{Component} from 'react';
import Header from '../components/Header/Header';
import {NavLink} from 'react-router-dom';
import classes from './Default.module.scss';

 
class Default extends Component {
  render(){
    return(
      <Header title="404" styleClass="DefaultHero">
        <h2>You are in the wrong place</h2>
        <NavLink to="/" className={classes.Button}>Return Home</NavLink>
      </Header>
      
    )
  }
}

export default Default;
