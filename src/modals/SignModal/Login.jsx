import React, {useContext, useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash, faRightToBracket, faUser} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import axios from "axios";
import {API_URL} from "../../data/variables.js";
import {useAddNotification} from "../../contexts/NotificationContext.jsx";
import AuthContext from "../../contexts/AuthContext.jsx";
import ModalsContext from "../../contexts/ModalsContext.jsx";

function Login({switchSignContent, toggleModal}) {
    const searchParams = new URLSearchParams(location.search);
    const verifyCode = searchParams.get('verify');
    const addNotification = useAddNotification();

    const { login } = useContext(AuthContext);

    const { closeModal } = useContext(ModalsContext);

    useEffect(() => {
        if(verifyCode) {
            axios.post(`${API_URL}/auth/verify`, {verificationCode: verifyCode})
                .then(res => {
                    console.log(res.data);
                    addNotification({title: 'Account Verified', desc: 'Your account has been verified. You may now sign in.', status: 'success'});
                })
                .catch(err => {
                    console.error(err);
                    const errorMessage = err.response.data.error;
                    addNotification({title: 'Error', desc: errorMessage, status: 'error'});
                });
        }
    }, [verifyCode])

    const [showPassword, setShowPassword] = useState(false);
    function toggleShowPswd() {
        setShowPassword(prevState => !prevState);
    }

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })
    function handleInputChange(e) {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }
    function handleSubmit(e) {
        e.preventDefault();

        axios.post(`${API_URL}/auth/signin`, formData)
            .then(res => {
                addNotification({title: 'Welcome back!', desc: "You've signed in successfully.", status: 'success'});
                closeModal();
                console.log(res.data);
                login(res.data);
            })
            .catch(err => {
                console.error(err);
                const errorMessage = err.response.data.error;
                addNotification({title: 'Error', desc: errorMessage, status: 'error'});
            });
    }

    return (
        <div className={'content-wrapper'}>
            <div className="content-header">
                <div className="col">
                    <h2><FontAwesomeIcon icon={faUser}/> Login</h2>
                    <p>Welcome back! You've been missed.</p>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <input className={'input-field'}
                           type={'text'}
                           id={'input-username'}
                           placeholder={'Username / Email'}
                           name={'username'}
                           value={formData.username}
                           onChange={handleInputChange} required/>
                    <label htmlFor={'input-username'} className={'input-label'}>Username / Email</label>
                </div>
                <div className="input-group">
                    <input className={'input-field'}
                           type={showPassword ? 'text' : 'password'}
                           id={'input-username'}
                           placeholder={'Password'}
                           name={'password'}
                           value={formData.password}
                           onChange={handleInputChange} required/>
                    <label htmlFor={'input-username'} className={'input-label'}>Password</label>
                    <p className={'forgot-password'}>Forgot password</p>
                    <div className={'toggle-pswd-show'} onClick={toggleShowPswd}>
                        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                    </div>
                </div>
                <button type={'submit'}>Login</button>
            </form>
            <hr/>
            <p className={'sign-footer'}>Not a member? <Link to={'#signup'} className={'modal-link'} onClick={() => {switchSignContent('#signup')}}>Sign up now</Link></p>
        </div>
    );
}

export default Login;