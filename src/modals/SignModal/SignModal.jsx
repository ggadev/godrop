import React, {useEffect, useState} from 'react';
import '../../styles/modals/SignModal/SignInModal.scss';
import {faEye, faEyeSlash, faRightToBracket, faXmark} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import SignIn from "./SignIn.jsx";
import SignUp from "./SignUp.jsx";

function SignModal({toggleModal}) {
    const [signContent, setSignContent] = useState(window.location.hash);

    console.log(signContent);

    function switchSignContent(c) {
        setSignContent(c);
    }


    useEffect(() => {
        document.body.classList.add('lock-scroll');

        return (() => {
            document.body.classList.remove('lock-scroll');
        })
    }, []);

    return (
        <div className={'modal'}>
            <div className="modal-cover"></div>
            <div className={'sign-in-modal'}>
                <div className="sign-in-modal-wrapper">
                    <div className="promo-code">
                        <img src={'/godroppromocode.jpg'}/>
                    </div>
                    <div className="content">
                        {signContent === '#signin' && <SignIn switchSignContent={switchSignContent}/>}
                        {signContent === '#signup' && <SignUp switchSignContent={switchSignContent}/>}
                    </div>
                    <div className="close-modal" onClick={toggleModal}>
                        <FontAwesomeIcon icon={faXmark} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignModal;