import React from 'react';
import '../../styles/components/LiveDrop/livedrop.scss';
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Livedrop() {
    return (
        <div className={'livedrop'}>
            <div className="livedrop-wrapper">
                <div className="livedrop-switch">
                    <FontAwesomeIcon icon={faAngleLeft} />
                </div>
            </div>
        </div>
    );
}

export default Livedrop;