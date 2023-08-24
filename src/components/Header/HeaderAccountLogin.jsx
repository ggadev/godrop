import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRightToBracket, faUser} from "@fortawesome/free-solid-svg-icons";
import ModalsContext from "../../contexts/ModalsContext.jsx";
import SignModal from "../../modals/SignModal/SignModal.jsx";

function HeaderAccountLogin({toggleModal}) {
    const { displayModal } = useContext(ModalsContext);

    return (
        <>
            <Link to={`#login`} className="login-button" onClick={() => displayModal(<SignModal/>)}>
                <FontAwesomeIcon icon={faUser} /> Login
            </Link>
            <Link to={`#signup`} className="sign-up-button" onClick={() => displayModal(<SignModal/>)}>
                <FontAwesomeIcon icon={faRightToBracket} /> Sign Up
            </Link>
        </>
    );
}

export default HeaderAccountLogin;