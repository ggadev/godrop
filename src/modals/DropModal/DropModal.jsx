import React, {useContext, useEffect, useRef} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGear, faHandHoldingDollar, faShieldHalved, faXmark} from "@fortawesome/free-solid-svg-icons";
import '../../styles/modals/DropModal/DropModal.scss';
import {formatPrice} from "../../utils/priceUtils.js";
import axios from "axios";
import {API_URL} from "../../data/variables.js";
import AuthContext from "../../contexts/AuthContext.jsx";
import {useAddNotification} from "../../contexts/NotificationContext.jsx";
import ModalsContext from "../../contexts/ModalsContext.jsx";

function DropModal({dropResult}) {
    const floatIndicator = useRef(null);
    const { getToken, updateBalance } = useContext(AuthContext);
    const addNotification = useAddNotification();

    const { closeModal } = useContext(ModalsContext);

    const chance = (
        parseInt(dropResult['collection_item_range_to'])
        -parseInt(dropResult['collection_item_range_from']))/1000;

    useEffect(() => {
        const fI = floatIndicator.current;
        if(fI) {
            fI.animate(
                {
                    left: ['0', `${dropResult?.float*100}%`]
                },
                {
                    duration: 1200,
                    easing: 'cubic-bezier(.17,.67,.4,1)',
                    fill: 'forwards',
                    delay: 0
                }
            );
        }
    }, [floatIndicator, dropResult]);

    function sellItem() {
        axios.post(`${API_URL}/account/sell`, { userItem: dropResult['userItem'] }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'x-access-token': getToken()
            }
        })
            .then(res => {
                console.log(res.data);
                updateBalance(parseFloat(res.data.userBalance));
                addNotification({title: 'Item Sold', desc: `${formatPrice(res.data['itemPrice'])} has been added to your balance.`, status: 'success'});
                closeModal();
            })
            .catch(err => {
                const errorMessage = err.response.data.error;
                addNotification({title: 'Error', desc: errorMessage, status: 'error'});
            });
    }

    return (
        <div className="drop-modal">
            <div className="drop-header">
                <div className="drop-verify button-gray">
                    <FontAwesomeIcon icon={faShieldHalved} /> Verify
                </div>
                <div className="drop-chance">
                    Chance<br/>
                    <span className={'drop-chance-value'}>{chance}%</span>
                </div>
            </div>
            <div className="drop-image">
                <div className={`gradient rarity-radial-gradient ${dropResult?.rarity_code}`}></div>
                <img src={dropResult?.item_image}/>
            </div>
            <div className="drop-detail">
                <div className="weapon">{dropResult?.weapon_name}</div>
                <div className={`skin rarity-color ${dropResult?.rarity_code}`}>{dropResult?.skin_name}</div>
                <div className="wear">{dropResult?.wear_name}</div>
                <div className="float-range">
                    <div className="indicator float-min" style={{left: `${dropResult.skin_min_wear*100}%`, opacity: `0.5`}}>
                        <div className="stripe"></div>
                        <div className="value">{dropResult.skin_min_wear}</div>
                    </div>
                    <div className="indicator float-min" style={{left: `${dropResult.skin_max_wear*100}%`, opacity: `0.5`}}>
                        <div className="stripe"></div>
                        <div className="value">{dropResult.skin_max_wear}</div>
                    </div>
                    <div className="indicator float" ref={floatIndicator}>
                        <div className="stripe"></div>
                        {/*<div className="value">{(dropResult.float).toString()+"41..."}</div>*/}
                    </div>
                    <div className="float-range-stripe-dark">
                        <div className={'wear-background FN'}></div>
                        <div className={'wear-background MW'}></div>
                        <div className={'wear-background FT'}></div>
                        <div className={'wear-background WW'}></div>
                        <div className={'wear-background BS'}></div>
                    </div>

                    <div className="float-range-stripe" style={{
                        clipPath: `polygon(${dropResult.skin_min_wear*100}% 0, ${dropResult.skin_max_wear*100}% 0, ${dropResult.skin_max_wear*100}% 100%, ${dropResult.skin_min_wear*100}% 100%)`
                    }}>
                        <div className={'wear-background FN'}></div>
                        <div className={'wear-background MW'}></div>
                        <div className={'wear-background FT'}></div>
                        <div className={'wear-background WW'}></div>
                        <div className={'wear-background BS'}></div>
                    </div>
                </div>
            </div>
            <div className="drop-actions">
                <div className="drop-sell button-primary" onClick={sellItem}>
                    <FontAwesomeIcon icon={faHandHoldingDollar} /> Sell for {formatPrice(dropResult?.item_price)}
                </div>
            </div>
        </div>
    );
}

export default DropModal;