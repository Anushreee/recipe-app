/* eslint-disable default-case */
import React from 'react';


    
const input = (props) => {
    let inputEl = null;

    switch(props.elementType) {
        case ('input'):
        inputEl = <input {...props.elementConfig} 
                    value={props.value}
                    onChange={props.changed}
                    />
        break;

        case('select'):
        inputEl = <select>
            {props.elementConfig.options.map(option=>{
                return <option 
                value={option}>{option.displayValue}</option>
            })}
        </select>
        break;

        case('default'):
        inputEl = <input {...props.elementConfig} />
        break;
    }

    
    
    return(
        <div>
        {inputEl}
        </div>
       
    )
    
}

export default input;