import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Recipe.module.scss';
import LinesEllipsis from 'react-lines-ellipsis';


export default class Recipe extends Component {
    render(){
        
        const {image_url,title,source_url,publisher,recipe_id} = this.props.recipe;
        
        return(
            <React.Fragment>
                <div className={classes.Card} style={{height:'100%'}}>
                    
                        <img
                            src={image_url}
                            title={title}
                            alt="recipe" 
                        />
                    
                    <div>
                    <LinesEllipsis maxLine='1'
                        text={title}
                        className = {classes.Title}
                        ellipsis='...'
                        trimRight
                        basedOn='letters' />
                        <h4 className={classes.Publisher}>By {publisher}</h4>
                    </div>
                    <div className = {classes.ButtonSection}>
                        <NavLink to = {`/recipes/${recipe_id}`} className={[classes.Button,classes.ButtonPrimary].join(' ')}>Details</NavLink>
                        <a 
                            href = {source_url}
                            target = "_blank"
                            rel = "noopener noreferrer"
                            className={[classes.Button,classes.ButtonSecondary].join(' ')}
                            >Recipe URL</a>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}