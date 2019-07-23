import React,{Component} from 'react';
import Recipe from '../Recipe/Recipe';
import classes from './RecipeList.module.scss';

export default class RecipeList extends Component {
    

    render(){
        const {recipes} = this.props;
      
        return(
            <React.Fragment>
                <h1 className={classes.MainHeading}>Our Recipes</h1>
                <div className={classes.Wrapper}>
                    <div className={classes.Cards}>
                        {recipes.map(recipe=>{
                            return <Recipe recipe= {recipe} key= {recipe.recipe_id}>
                                </Recipe>
                        })}
                
                    </div>
                </div>
            </React.Fragment>
        )
    }
}