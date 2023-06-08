import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash, faRightToBracket} from "@fortawesome/free-solid-svg-icons";

function SignUp({switchSignContent}) {
    return (
        <div className={'content-wrapper'}>
            <div className="content-header">
                <div className="col">
                    <h2>Sign Up <FontAwesomeIcon icon={faRightToBracket}/></h2>
                    <p>Closed beta! Sign up only with beta access key.</p>
                </div>
            </div>
            <form>
                <div className="input-group">
                    <input className={'input-field'} type={'text'} id={'input-username'} placeholder={'Username / Email'}/>
                    <label htmlFor={'input-username'} className={'input-label'}>Beta Access Key</label>
                    <p className={'input-info'}></p>
                </div>
                <div className="grid-form">
                    <div className="input-group">
                        <input className={'input-field'} type={'text'} id={'input-username'} placeholder={'Username / Email'}/>
                        <label htmlFor={'input-username'} className={'input-label'}>Username</label>
                        <p className={'input-info'}></p>
                    </div>
                    <div className="input-group">
                        <input className={'input-field'} type={'text'} id={'input-username'} placeholder={'Username / Email'}/>
                        <label htmlFor={'input-username'} className={'input-label'}>Email</label>
                        <p className={'input-info'}></p>
                    </div>
                    <div className="input-group">
                        <input className={'input-field'}
                               type={'password'}
                               id={'input-username'}
                               placeholder={'Password'}/>
                        <label htmlFor={'input-username'} className={'input-label'}>Password</label>
                    </div>
                    <div className="input-group">
                        <input className={'input-field'}
                               type={'password'}
                               id={'input-username'}
                               placeholder={'Repeat Password'}/>
                        <label htmlFor={'input-username'} className={'input-label'}>Repeat Password</label>
                    </div>
                </div>
                <button type={'submit'}>Sign In</button>
            </form>
            <hr/>
            <p>Already a member? <span onClick={() => {switchSignContent('signin')}}>Sign in</span></p>
        </div>
    );
}

export default SignUp;