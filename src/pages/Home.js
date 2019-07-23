import React,{Component} from 'react';
import Header from '../components/Header/Header';
import classes from './Home.module.scss';

class Home extends Component {
  render(){
    return( 
        <React.Fragment>
            <Header title="Welcome to Amazing Recipes">
              <div className={classes.TestimonialQuote}>
                <blockquote>
                    <p>Humor keeps us alive. Humor and food. Don't forget food. You can go a week without laughing.”</p>
                </blockquote>  
                <cite>Joss Wehdon</cite>
              </div>
            </Header>
        </React.Fragment>
    )
  } 
}

export default Home;  
