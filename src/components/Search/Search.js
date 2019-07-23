import React,{Component} from 'react';

export default class Search extends Component {
    render(){
        const {search,handleChange,handleSubmit} = this.props;
        
        return(
            <React.Fragment>
            <h1 style={{width:'500px',margin:'0 auto'}}>
              Search Recipes with <strong>food2Fork</strong>
            </h1>
            <form style={{width:'500px',margin:'0 auto'}}>
                <label htmlFor = "search">Separate with commas</label>
                <input type = "text" 
                       name = "search"
                       onChange = {handleChange}
                       value = {search}
                       onSubmit = {handleSubmit}
                       style={{width:'100%',height:'50px'}}
                        ></input>
                <button type="submit">Search</button>
            </form>
            </React.Fragment>
        )
    }
}