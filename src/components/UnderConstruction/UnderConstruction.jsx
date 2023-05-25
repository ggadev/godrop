import React from 'react';
import '../../styles/components/UnderConstruction/UnderConstruction.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faPersonDigging} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

function UnderConstruction(props) {
    return (
        <div className="under-construction">
            <FontAwesomeIcon icon={faPersonDigging} />
            <h2>Under Construction</h2>
            <p>This {props.pageType || 'page'} is currently under construction and will be available soon.</p>
            <p>Sign up for our newsletter to get notified about new features.</p>
            <Link className={'go-back-link'} to={'/'}><FontAwesomeIcon icon={faAngleLeft} /> Go back</Link>
        </div>
    );
}

export default UnderConstruction;