import React,{Component} from 'react';

import Input from './Input';

class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Please enter your text'
                },
                value:'',
                validation: {
                    required: true
                },
                valid:false
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Please enter your street'
                },
                value:'',
                validation: {
                    required: true
                }

                
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value:'fastest',displayValue:'fastest'},
                        {value:'slowest',displayValue:'slowest'}
                    ] 
                }
            }
        }
    }

    checkValidity(value,rules) {

    }

    onChangedHandler = (e,id) => {

        const content= e.target.value;
        const updatedOrderForm = {
            ...this.state.orderForm
        }
        const updatedElements = {...updatedOrderForm[id]}
        updatedElements.value = content;
        updatedOrderForm[id] = updatedElements;
        this.setState({
            orderForm: updatedOrderForm
        })
        

    }
    
    orderHandler = (e) => {
        e.preventDefault();
        const formData = {};
        for(let key in this.state.orderForm){
            formData[key] = this.state.orderForm[key].value;
        }
        console.log('formData is ',formData);

    }

    render(){
        const formElementsArray = [];

        for(let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            })
        }

        let form = formElementsArray.map(formElement=>{
            return <Input key= {formElement.id} 
                          elementType ={formElement.config.elementType}
                          elementConfig = {formElement.config.elementConfig} 
                          value={formElement.config.value}
                          changed={(e)=>this.onChangedHandler(e,formElement.id)} />
        })

        return(
            <React.Fragment>
                <form onSubmit={this.orderHandler}>
                    {form}
                    <button type="submit">Submit</button>
                </form>
              
            </React.Fragment>
        )
    }
}
export default ContactData;