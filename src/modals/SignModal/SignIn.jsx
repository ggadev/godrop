import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash, faRightToBracket} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

function SignIn({switchSignContent}) {

    const [showPassword, setShowPassword] = useState(false);

    function toggleShowPswd() {
        setShowPassword(prevState => !prevState);
    }

    return (
        <div className={'content-wrapper'}>
            <div className="content-header">
                <div className="col">
                    <h2>Sign In <FontAwesomeIcon icon={faRightToBracket}/></h2>
                    <p>Welcome back! You've been missed.</p>
                </div>
            </div>
            <form>
                <div className="input-group">
                    <input className={'input-field'} type={'text'} id={'input-username'} placeholder={'Username / Email'}/>
                    <label htmlFor={'input-username'} className={'input-label'}>Username / Email</label>
                    <p className={'input-info'}></p>
                </div>
                <div className="input-group">
                    <input className={'input-field'}
                           type={showPassword ? 'text' : 'password'}
                           id={'input-username'}
                           placeholder={'Password'}/>
                    <label htmlFor={'input-username'} className={'input-label'}>Password</label>
                    <p className={'forgot-password'}>Forgot password</p>
                    <div className={'toggle-pswd-show'} onClick={toggleShowPswd}>
                        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                    </div>
                </div>
                <button type={'submit'}>Sign In</button>
            </form>
            <hr/>
            <p className={'sign-footer'}>Not a member? <Link to={'#signup'} className={'modal-link'} onClick={() => {switchSignContent('#signup')}}>Sign up now</Link></p>
        </div>
    );
}

export default SignIn;