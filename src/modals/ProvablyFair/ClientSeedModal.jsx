import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGear, faPenToSquare, faXmark} from "@fortawesome/free-solid-svg-icons";
import "../../styles/modals/ProvablyFair/ClientSeedModal.scss";

function ClientSeedModal({toggleModal}) {
    return (
        <div className={'modal'}>
            <div className="modal-cover"></div>
            <div className={'client-seed-modal'}>
                <div className="client-seed-modal-wrapper">
                    <div className="content">
                        <div className="content-header">
                            <div className="col">
                                <h2><FontAwesomeIcon icon={faPenToSquare} /> Client Seed</h2>
                                <p>Edit your client seed.</p>
                            </div>
                        </div>
                        <div className={'client-seed-container'}>
                            <input type='text'/>
                            <button>Save</button>
                        </div>
                    </div>
                    <div className="close-modal" onClick={toggleModal}>
                        <FontAwesomeIcon icon={faXmark} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ClientSeedModal;