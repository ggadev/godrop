import {useContext, useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRightToBracket} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import {API_URL} from "../../data/variables.js";
import axios from "axios";
import {useAddNotification} from "../../contexts/NotificationContext.jsx";
import ModalsContext from "../../contexts/ModalsContext.jsx";

function SignUp({switchSignContent}) {
    const searchParams = new URLSearchParams(location.search);
    const [error, setError] = useState(null);

    const [formData, setFormData] = useState({
        bak: searchParams.get('bak') || '',
        username: '',
        email: '',
        password: '',
        repeatPassword: ''
    })

    const addNotification = useAddNotification();

    function handleSubmit(e) {
        e.preventDefault();

        axios.post(`${API_URL}/auth/signup`, formData)
            .then(res => {
                console.log(res.data);
                addNotification({title: 'Signed Up', desc: 'Check your email to activate your account.', status: 'success'});
                setFormData({
                    bak: '',
                    username: '',
                    email: '',
                    password: '',
                    repeatPassword: ''
                });
            })
            .catch(err => {
                console.error(err);
                const errorMessage = err.response.data.error;
                addNotification({title: 'Error', desc: errorMessage, status: 'error'});
            });
    }

    function handleInputChange(e) {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    return (
        <div className={'content-wrapper'}>
            <div className="content-header">
                <div className="col">
                    <h2><FontAwesomeIcon icon={faRightToBracket}/> Sign Up</h2>
                    <p>Closed beta! Sign up only with beta access key.</p>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <input name={'bak'}
                           className={'input-field'}
                           type={'text'}
                           id={'input-beta-access-key'}
                           placeholder={'Username / Email'}
                           value={formData.bak}
                           onChange={handleInputChange} required/>
                    <label htmlFor={'input-beta-access-key'} className={'input-label'}>Beta Access Key</label>
                    <div className="input-hint right">
                        Individual BAK provided by the site owner
                    </div>
                </div>
                <div className="grid-form">
                    <div className="input-group">
                        <input name={'username'}
                               className={'input-field'}
                               type={'text'}
                               id={'input-username'}
                               placeholder={'Username / Email'}
                               value={formData.username}
                               onChange={handleInputChange} required/>
                        <label htmlFor={'input-username'} className={'input-label'}>Username</label>
                        <div className="input-hint left">
                            Consists only of letters and numbers (3-15)
                        </div>
                    </div>
                    <div className="input-group">
                        <input name={'email'}
                               className={'input-field'}
                               type={'text'}
                               id={'input-username'}
                               placeholder={'Email'}
                               value={formData.email}
                               onChange={handleInputChange} required/>
                        <label htmlFor={'input-username'} className={'input-label'}>Email</label>
                        <div className="input-hint right">
                            Your valid e-mail address
                        </div>
                    </div>
                    <div className="input-group">
                        <input name={'password'}
                               className={'input-field'}
                               type={'password'}
                               id={'input-password'}
                               placeholder={'Password'}
                               value={formData.password}
                               onChange={handleInputChange} required/>
                        <label htmlFor={'input-password'} className={'input-label'}>Password</label>
                        <div className="input-hint left">
                            Consists of letters, numbers and special characters (8-40)
                        </div>
                    </div>
                    <div className="input-group">
                        <input name={'repeatPassword'}
                               className={'input-field'}
                               type={'password'}
                               id={'input-repeat-password'}
                               placeholder={'Repeat Password'}
                               value={formData.repeatPassword}
                               onChange={handleInputChange} required/>
                        <label htmlFor={'input-repeat-password'} className={'input-label'}>Repeat Password</label>
                        <div className="input-hint right">
                            Repeat your password
                        </div>
                    </div>
                </div>
                <button type={'submit'}>Sign Up</button>
            </form>
            <hr/>
            <p className={'sign-footer'}>Already a member? <Link to={'#login'} className={'modal-link'} onClick={() => {switchSignContent('#login')}}>Login</Link></p>
        </div>
    );
}

export default SignUp;