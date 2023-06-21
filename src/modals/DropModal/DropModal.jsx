import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGear, faHandHoldingDollar, faShieldHalved, faXmark} from "@fortawesome/free-solid-svg-icons";
import '../../styles/modals/DropModal/DropModal.scss';
import {formatPrice} from "../../utils/priceUtils.js";

function DropModal({toggleModal, dropResult}) {

    const chance = (
        parseInt(dropResult['collection_item_range_to'])
        -parseInt(dropResult['collection_item_range_from']))/1000;

    return (
        <div className={'modal'}>
            <div className="modal-cover"></div>
            <div className={'drop-modal'}>
                <div className="drop-modal-wrapper">
                    <div className="drop-modal-content">
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
                        </div>
                        <div className="drop-actions">
                            <div className="drop-sell button-primary">
                                <FontAwesomeIcon icon={faHandHoldingDollar} /> Sell for {formatPrice(dropResult?.item_price)}
                            </div>
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

export default DropModal;