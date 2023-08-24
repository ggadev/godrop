import React, {useContext, useEffect, useState} from 'react';
import ModalsContext from "../contexts/ModalsContext.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGear, faXmark} from "@fortawesome/free-solid-svg-icons";
import '../styles/modals/ModalTemplate.scss';
import PropTypes from "prop-types";

ModalTemplate.propTypes = {
    children: PropTypes.node.isRequired,
};

function ModalTemplate({children}) {
    const { closeModal } = useContext(ModalsContext);

    useEffect(() => {
        document.body.classList.add('lock-scroll');

        return (() => {
            document.body.classList.remove('lock-scroll');
        })
    }, []);

    return (
        <div className={'modal'}>
            <div className="modal-cover" onClick={closeModal}></div>
            <div className={'modal-container'}>
                <div className="modal-wrapper">
                    {children}
                    <div className="close-modal" onClick={closeModal}>
                        <FontAwesomeIcon icon={faXmark} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalTemplate;