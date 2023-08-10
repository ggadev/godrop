import React, {useContext, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGear, faPenToSquare, faXmark} from "@fortawesome/free-solid-svg-icons";
import "../../styles/modals/ProvablyFair/ClientSeedModal.scss";
import axios from "axios";
import {useAddNotification} from "../../contexts/NotificationContext.jsx";
import ModalsContext from "../../contexts/ModalsContext.jsx";
import AuthContext from "../../contexts/AuthContext.jsx";

function ClientSeedModal({currentClientSeed}) {
    const [clientSeed, setClientSeed] = useState(currentClientSeed);

    const addNotification = useAddNotification();

    const { closeModal } = useContext(ModalsContext);

    const { getToken } = useContext(AuthContext);

    function updateClientSeed() {
        if(!/^[a-zA-Z0-9]{3,20}$/.test(clientSeed)) {
            addNotification({title: 'Invalid format', desc: 'Client seed can only consist of letters and numbers (3-20 chars).', status: 'error'});
            return;
        }

        axios.post(`http://localhost:3001/provablyfair/new/clientseed`, { clientSeed: clientSeed }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'x-access-token': getToken()
            }
        })
            .then(res => {
                addNotification({title: 'Success', desc: 'Your client seed has been changed.', status: 'success'});
                closeModal();
            })
            .catch(err => {
                const errorMessage = err.response.data.error;
                addNotification({title: 'Error', desc: errorMessage, status: 'error'});
            });
    }

    return (
        <div className="client-seed-modal">
            <div className="content-header">
                <div className="col">
                    <h2><FontAwesomeIcon icon={faPenToSquare} /> Client Seed</h2>
                    <p>Edit your client seed.</p>
                </div>
            </div>
            <div className={'client-seed-container'}>
                <input type='text' value={clientSeed} minLength={3} maxLength={20} onChange={(e) => setClientSeed(e.target.value)}/>
                <p>You may edit your client seed after each roll.</p>
                <button onClick={updateClientSeed} className={clientSeed === currentClientSeed ? 'inactive' : ''}>Save</button>
            </div>
        </div>
    );
}

export default ClientSeedModal;