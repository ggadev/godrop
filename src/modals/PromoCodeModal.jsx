import React, {useContext, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGear, faPenToSquare, faXmark} from "@fortawesome/free-solid-svg-icons";
import "../styles/modals/ProvablyFair/ClientSeedModal.scss";
import axios from "axios";
import {useAddNotification} from "../contexts/NotificationContext.jsx";
import ModalsContext from "../contexts/ModalsContext.jsx";
import AuthContext from "../contexts/AuthContext.jsx";
import {formatPrice} from "../utils/priceUtils.js";

function PromoCodeModal() {
    const [promoCode, setPromoCode] = useState('');

    const addNotification = useAddNotification();

    const { closeModal } = useContext(ModalsContext);

    const { getToken, updateBalance } = useContext(AuthContext);

    function claimPromoCode() {
        axios.post(`http://localhost:3001/account/promocode`, { code: promoCode }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'x-access-token': getToken()
            }
        })
            .then(res => {
                addNotification({title: 'Success', desc: `${formatPrice(parseFloat(res.data['promoCodeValue']))} has been added to your account!`, status: 'success'});
                updateBalance(parseFloat(res.data['userBalance']));
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
                    <h2><FontAwesomeIcon icon={faPenToSquare} /> Promo Code</h2>
                    <p>Enter promo code.</p>
                </div>
            </div>
            <div className={'client-seed-container'}>
                <input type='text' value={promoCode} onChange={(e) => setPromoCode(e.target.value)}/>
                <button onClick={claimPromoCode} className={promoCode.length < 3 ? 'inactive' : ''}>Claim</button>
            </div>
        </div>
    );
}

export default PromoCodeModal;