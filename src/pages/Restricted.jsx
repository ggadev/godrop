import {faAngleLeft, faBan, faCircleNotch} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";
import '../styles/pages/Restricted.scss';
import SignModal from "../modals/SignModal/SignModal.jsx";
import React, {useContext} from "react";
import ModalsContext from "../contexts/ModalsContext.jsx";

function Restricted() {
    const { displayModal } = useContext(ModalsContext);

    return (
        <div className={'restricted'}>
            <main>
                <Helmet>
                    <title>Restricted | GOdrop</title>
                    <meta name="description" content="Page not found" />
                </Helmet>
                <div className={'restricted-wrapper container content'}>
                    <h1 className={'page-header'}><FontAwesomeIcon icon={faBan} /></h1>
                    <h2>Access Denied</h2>
                    <p>Please login to access this page.</p>
                    <Link to={`#login`} className="button-primary login-button" onClick={() => displayModal(<SignModal/>)}>Login</Link>
                    <Link className={'go-back-link'} to={'/'}><FontAwesomeIcon icon={faAngleLeft} /> Go back</Link>
                </div>
            </main>
        </div>
    );
}

export default Restricted;