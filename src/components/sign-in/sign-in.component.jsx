import React from 'react';
import './sign-in.styles.scss';




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
                    <input type="email" name="email" onChange={this.handleChange} value={this.state.email} required/>
                    <label>Email</label>
                    <input type="password" name="password" onChange={this.handleChange} value={this.state.password} required/>
                    <label>Password</label>
                    <input type="submit" value="Submit Form"/>
                </form>
            </div>
        )
    }
}



export default SignIn;