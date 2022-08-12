import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './Login.css';
import { login } from '../redux/auth-reducer';
import { Navigate } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

class LoginForm extends React.Component {
    state = {
        login: '',
        password: '',
        loginError: '',
        passwordError: '',        
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onLogIn(this.state);

        this.setState({
            login: '',
            password: '',
            loginError: '',
            passwordError: '',
        })
    }

    render(props) {
        let { 
            login, 
            password,
            loginError,
            passwordError,
        } = this.state;

        return (
            <div className='form'>
                <form onSubmit={this.handleSubmit}>
                    <div className='form__input'>
                        <label>
                          Login:
                          <input 
                            // component='input'
                            name={'email'}
                            type="text" 
                            className={`login ${loginError ? 'is_danger' : ''}`} 
                            value={login} 
                            placeholder='Login'
                            onChange={(event) => {
                                this.setState({ login: event.target.value });
                                console.log(login, event.target.value);
                                if (login.search(/[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/) !== -1) {
                                    this.setState({ loginError: '' });
                                } else {
                                    this.setState({ loginError: 'Please, enter the correct login' });
                                }
                            }}
                            onBlur={() => {
                                if (!login) {
                                    this.setState({ loginError: 'Login is required' });
                                } else if (login.search(/[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/) !== -1) {
                                    this.setState({ loginError: '' });
                                } else {
                                    this.setState({ loginError: 'Please, enter the correct login' });
                                }
                            }}
                          /> 
                        </label>
                        <p className='error'>{ loginError }</p>
                    </div>
                           
                    <div className='form__input'>
                        <label>
                          Password:
                          <Field 
                            component='input'
                            name={'password'}
                            type="password" 
                            className={`password ${passwordError ? 'is_danger' : ''}`}  
                            value={password} 
                            placeholder='Password'
                            onChange={(event) => {
                                this.setState({ password: event.target.value });
                                if (password.length < 5 || password.length > 20) {
                                    this.setState({ passwordError: 'Password must be between 5 and 12 characters' });
                                } else {
                                    this.setState({ passwordError: '' });
                                }
                            }}
                            onBlur={() => {
                                if (!password) {
                                    this.setState({ passwordError: 'Password is required' });
                                } else if (password.length < 5 || password.length > 20) {
                                    this.setState({ passwordError: 'Password must be between 5 and 12 characters' });
                                } else {
                                    this.setState({ passwordError: '' });
                                }
                            }}
                          />
                        </label>
                        <p className='error'>{ passwordError }</p>
                    </div>

                    <div className='form__input form__checkbox'>
                        <label>
                            <Field type="checkbox" component='input' name={'rememberMe'} />
                            remember me
                        </label>
                    </div>
                    {/* {this.props.error && (
                        <div className='form__error'>
                            {this.props.error}
                        </div>
                    )} */}
                                       
                    <button 
                      type='submit' 
                      className='auth__button'
                      disabled={!login || !password || passwordError || loginError ? true : false}
                    >
                        Log in
                    </button>
                </form>
            </div>
        )
    }
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = ({email, password, rememberMe}) => {
        props.login(email, password, rememberMe);
    };

    if (props.isAuth) {
        return <Navigate to={'/profile'} />
    }

    return (
        <div>
            <h1 className='login__title'>Login</h1>
            <LoginReduxForm onLogIn={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, {login})(Login);
