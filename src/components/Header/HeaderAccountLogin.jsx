import React from 'react';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRightToBracket, faUser} from "@fortawesome/free-solid-svg-icons";

function HeaderAccountLogin({toggleModal}) {
    return (
        <>
            <Link to={`#login`} className="login-button" onClick={toggleModal}>
                <FontAwesomeIcon icon={faUser} /> Login
            </Link>
            <Link to={`#signup`} className="sign-up-button" onClick={toggleModal}>
                <FontAwesomeIcon icon={faRightToBracket} /> Sign Up
            </Link>
        </>
    );
}

export default HeaderAccountLogin;