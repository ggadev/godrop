import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleNotch, faHandHoldingDollar} from "@fortawesome/free-solid-svg-icons";
import {formatPrice} from "../../utils/priceUtils.js";

function InventoryItem({item}) {
    if(!item) return;

    return (
        <div className={`inventory-item rarity-border-bottom ${item['rarity_code']}`}>
            <div className={`cover rarity-border-bot-20 ${item['rarity_code']}`}></div>
            <div className="godrop-mark">
                <img src="/logo/mark_white.png"/>
            </div>
            <div className="image">
                <img src={item['item_image']}/>
            </div>
            <div className="top">
                <div className="sell-button button-primary">
                    <FontAwesomeIcon icon={faHandHoldingDollar} /> Sell
                </div>
                <div className="upgrade-button button-gray">
                    <FontAwesomeIcon icon={faCircleNotch} /> Upgrade
                </div>
            </div>
            <div className="bottom">
                <div className="weapon">{item['weapon_name']}</div>
                <div className="skin">{item['skin_name']}</div>
                <div className="wear">{item['wear_name']}</div>
                <div className="price">{formatPrice(item['item_price'])}</div>
            </div>
        </div>
    );
}

export default InventoryItem;