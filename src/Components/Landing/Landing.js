import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { requestUserData } from '../../ducks/userReducer';
import { useHistory } from 'react-router';
import './Landing.css';

const Landing = (props) => {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const history = useHistory();

    useEffect(() => {

    }, []);
    
    async function userLogin() {
        let body = { userEmail, userPassword };
        try {
            await axios
                .post('/auth/login', body)
            props.requestUserData()
            history.push('/Home')
        } catch (err) {
            console.log(err)
        }
    };

    async function userRegister() {
        let body = { userEmail, userPassword };
        try {
            await axios
                .post('/auth/register', body)
            props.requestUserData()
            history.push('/Home')
        } catch (err) {
            console.log(err)
        }
    };

    return (
        <div className='landing'>
            <div className='auth'>
                <h1 className='login-text'>LOGIN</h1>
                <form className='login' onSubmit={userLogin}>
                    <input
                        className='login-email'
                        type='text'
                        placeholder='Email'
                        onChange={e => setUserEmail(e.target.value)}
                    />
                    <input
                        className='login-pass'
                        type='password'
                        placeholder='Password'
                        onChange={e => setUserPassword(e.target.value)}
                    />
                    <button className='login-btn' type='submit'>LOGIN</button>
                </form>

                <h1 className='register-text'>OR SIGN UP</h1>

                <form className='register' onSubmit={userRegister}>
                    <input
                        className='register-email'
                        type='text'
                        placeholder='Email'
                        onChange={e => setUserEmail(e.target.value)}
                    />
                    <input
                        className='register-pass'
                        type='password'
                        placeholder='Password'
                        onChange={e => setUserPassword(e.target.value)}
                    />
                    <button className='register-btn' type='submit'>SIGN UP</button>
                </form>
            </div>
        </div>
    );
}

export default connect(null, { requestUserData })(Landing);