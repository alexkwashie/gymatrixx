import React from 'react';

import './signup.styles.scss';
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import {auth, createUserProfileDocument} from './firebase/firebase.utils'

//use a class because we want to save the user login
class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async e => {
        e.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;

        //if password is not the same
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        //create new user with details from above
        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, {displayName});

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''})

        } catch (error) {
            console.log(rrror)
        }
    };


    render() {

        const {displayName, email, password, confirmPassword} = this.state;

        return (
            <div className='sign-up'>
                <h2>I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>

                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        handleChange={this.handleChange}
                        label='Name'
                        required/>

                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        handleChange={this.handleChange}
                        label='Email'
                        required/>

                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        handleChange={this.handleChange}
                        label='password'
                        required/>

                    <FormInput
                        type='password'
                        name='confirm password'
                        value={confirmPassword}
                        handleChange={this.handleChange}
                        label='Confirm Password'
                        required/>

                    <CustomButton type="submit">
                        Sign Up</CustomButton>

                </form>
            </div>
        )
    }
}

export default SignUp;