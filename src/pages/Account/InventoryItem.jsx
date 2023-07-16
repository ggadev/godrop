import React, {useContext} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleNotch, faHandHoldingDollar} from "@fortawesome/free-solid-svg-icons";
import {formatPrice} from "../../utils/priceUtils.js";
import axios from "axios";
import {API_URL} from "../../data/variables.js";
import AuthContext from "../../contexts/AuthContext.jsx";
import {useAddNotification} from "../../contexts/NotificationContext.jsx";

function InventoryItem({item}) {
    const { getToken, updateBalance } = useContext(AuthContext);
    const addNotification = useAddNotification();

    function sellItem() {
        axios.post(`${API_URL}/account/sell`, { userItem: item['user_item_id'] }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'x-access-token': getToken()
            }
        })
            .then(res => {
                console.log(res.data);
                updateBalance(parseFloat(res.data.userBalance));
                addNotification({title: 'Item Sold', desc: `${formatPrice(res.data['itemPrice'])} has been added to your balance.`, status: 'success'});
            })
            .catch(err => {
                const errorMessage = err.response.data.error;
                addNotification({title: 'Error', desc: errorMessage, status: 'error'});
            });
    }

    return (
        <div className={`inventory-item rarity-border-bottom ${item['rarity_code']} ${item['user_item_sold'] && 'sold'}`}>
            <div className={`cover rarity-border-bot-20 ${item['rarity_code']}`}></div>
            <div className="godrop-mark">
                <img src="/logo/mark_white.png"/>
            </div>
            <div className="image">
                <img src={item['item_image']}/>
            </div>
            {
                item['user_item_sold'] === 0 &&
                <div className="top">
                    <div className="sell-button button-primary" onClick={sellItem}>
                        <FontAwesomeIcon icon={faHandHoldingDollar} /> Sell
                    </div>
                    <div className="upgrade-button button-gray">
                        <FontAwesomeIcon icon={faCircleNotch} /> Upgrade
                    </div>
                </div> ||
                <div className="top">
                    <div className="item-sold">
                        <FontAwesomeIcon icon={faHandHoldingDollar} /> Sold
                    </div>
                </div>
            }
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