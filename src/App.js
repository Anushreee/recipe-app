import React,{Component} from 'react';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import SingleRecipe from './pages/SingleRecipe';
import Default from './pages/Default';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import classes from './App.module.scss';

class App extends Component {
  render(){
    return(
      <Router>
        <main className={classes.App}>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/recipes" exact component={Recipes} />
            <Route path="/recipes/:id" component={SingleRecipe} />
            <Route component={Default} />
          </Switch>
        </main>
      </Router>
      
    )
  }
}

export default App;
