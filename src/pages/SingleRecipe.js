import React,{Component} from 'react';
import { recipeData } from '../data/tempDetails';
import { NavLink } from 'react-router-dom';
import classes from './SingleRecipe.module.scss';

export default class SingleRecipe extends Component {
  state = {
    recipe: recipeData,
    id: this.props.match.params.id,
    loading: false
  };

  render(){
    
    const {
      image_url,
      publisher_url,
      source_url,
      title,
      ingredients
    } = this.state.recipe;
    
    
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
                rel="noopener noreferrer"
                
              >
                Publisher Webpage
            </a>
            <a  className={[classes.Button, classes.ButtonSecondary].join(' ')}
                href={source_url}
                target="_blank"
                rel="noopener noreferrer"
                
            >
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


