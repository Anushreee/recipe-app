import React,{Component} from 'react';
import {NavLink } from 'react-router-dom';
import classes from './SingleRecipe.module.scss';
import Spinner from '../components/UI/Spinner/Spinner';
import axios from 'axios';

export default class SingleRecipe extends Component {
  state = {
    recipe: {},
    id: this.props.match.params.id,
    loading: true,
    error: false
  };

  componentDidMount(){
    axios.get(`https://www.food2fork.com/api/get?key=${process.env.REACT_APP_API_KEY}&rId=${this.state.id}`)
          .then(response=>{
            this.setState({
              recipe: response.data.recipe,
              loading: false
            })  
          })
          .catch(error=>{
            this.setState({
              error: true
            })
          })
  }

  render() {
    const {
      image_url,
      publisher_url,
      source_url,
      title,
      ingredients
    } = this.state.recipe;

    if (this.state.loading) {
      return (
        <Spinner />
      );
    }
    return (
      <div className={classes.Wrapper}>
        <div className={classes.ImageContent}>
          <img
              src={image_url}
              alt="single recipe"
          />
        </div>
        <div className={classes.Content}>
          <NavLink
              to="/recipes"
              className={[classes.Button, classes.ButtonWarning].join(' ')}
            >
            Back to Recipes 
          </NavLink>
          <div className={classes.Title}><strong>{title}</strong></div>
          <div className = {classes.ButtonSection}>
            <a className={[classes.Button, classes.ButtonPrimary].join(' ')}
                href={publisher_url}
                target="_blank"
                rel="noopener noreferrer">
                Publisher Webpage
            </a>
            <a  className={[classes.Button, classes.ButtonSecondary].join(' ')}
                href={source_url}
                target="_blank"
                rel="noopener noreferrer">
                Recipe Url
            </a>
          </div>
          <ul className={classes.Lists}>
            <h2>Ingredients</h2>
            {ingredients.map((item, index) => {
              return (
                <li key={index}>
                  {item}
                </li>
              );
            })}
          </ul>
      </div>
      </div>
    );
  }
}
