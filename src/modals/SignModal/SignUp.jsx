import {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRightToBracket} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

function SignUp({switchSignContent}) {
    const searchParams = new URLSearchParams(location.search);

    const [formData, setFormData] = useState({
        bak: searchParams.get('bak') || '',
        username: '',
        email: '',
        password: '',
        repeatPassword: ''
    })


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
                    <h2>Sign Up <FontAwesomeIcon icon={faRightToBracket}/></h2>
                    <p>Closed beta! Sign up only with beta access key.</p>
                </div>
            </div>
            <form>
                <div className="input-group">
                    <input name={'bak'}
                           className={'input-field'}
                           type={'text'}
                           id={'input-beta-access-key'}
                           placeholder={'Username / Email'}
                           value={formData.bak}
                           onChange={handleInputChange}/>
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
                               onChange={handleInputChange}/>
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
                               onChange={handleInputChange}/>
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
                               onChange={handleInputChange}/>
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
                               onChange={handleInputChange}/>
                        <label htmlFor={'input-repeat-password'} className={'input-label'}>Repeat Password</label>
                        <div className="input-hint right">
                            Repeat your password
                        </div>
                    </div>
                </div>
                <button type={'submit'}>Sign In</button>
            </form>
            <hr/>
            <p className={'sign-footer'}>Already a member? <Link to={'#signin'} className={'modal-link'} onClick={() => {switchSignContent('#signin')}}>Sign in</Link></p>
        </div>
    );
}

export default SignUp;