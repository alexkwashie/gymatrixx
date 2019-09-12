import React from 'react';
import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state={
            email:'',
            password:''
        }
    }

    //handle the submit function
    handleSubmit = e =>{
        e.preventDefault();

        //clear fields when submit
        this.setState({email:'', password:''})

    }


    handleChange = e =>{
        const {value, name} = e.target;

        this.setState({[name]: value});
        /*this means, the name value will be equal to the event target
            name:value e.g. email: (value typed in)
        */
    };



    render(){
        return(
            <div className='sign-in'>
                <h2>I have already an account</h2>
                <span>Sign in with you username and password</span>

                <form onSubmit={this.handleSubmit}>
                    {/*Email input*/}
                    <FormInput
                    type="email"
                    name="email"
                    label="Email"
                    handleChange={this.handleChange}
                    value={this.state.email} required/>

                    {/*Password input*/}
                    <FormInput
                    type="password"
                    name="password"
                    label="Password"
                    handleChange={this.handleChange}
                    value={this.state.password} required/>


                    <CustomButton type="submit">Submit Form</CustomButton> {/*Submit Form acts as the children*/}
                </form>
            </div>
        )
    }
}



export default SignIn;