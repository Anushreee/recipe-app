import React,{Component} from 'react';
import RecipeList from '../components/RecipeList/RecipeList';
import {recipeData} from '../data/tempList';

class Recipes extends Component {

  state = {
    recipes: recipeData,
    search: ''
  }

  handleChange = (e) =>{
    this.setState({
      search: e.target.value
    })
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    
  }

  render(){
    return(
      <React.Fragment>
        <RecipeList recipes={this.state.recipes}  />
      </React.Fragment>
    )
  }
}

export default Recipes;
