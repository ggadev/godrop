import React from 'react';
import {formatPrice} from "../utils/priceUtils.js";
import moment from "moment/moment.js";
import {Link} from "react-router-dom";

function BestDropItem({item}) {
    const chance = (
        parseInt(item['collection_item_range_to'])
        -parseInt(item['collection_item_range_from']))/1000;

    return (
        <Link to={`/collection/${item['collection_url']}`} className={`best-drop-item rarity-border-bottom ${item['rarity_code']}`}>
            <div className={`cover rarity-border-bot-20 ${item['rarity_code']}`}></div>
            <div className="godrop-mark">
                <img src="/logo/mark_white.png"/>
            </div>
            <div className="image">
                <img src={item['item_image']}/>
            </div>
            <div className="dropper">
                <div className="avatar">
                    <img src={item['user_avatar']}/>
                </div>
                <div className="details">
                    <div className="username">{item['user_name']}</div>
                    <div className="time-elapsed">{moment(item['user_item_drop_date']).fromNow()}</div>
                </div>
            </div>
            <div className="chance">
                Chance<br/>
                <span className={'chance-value'}>{chance}%</span>
            </div>
            <div className="details">
                <div className="weapon">{item['weapon_name']}</div>
                <div className="skin">{item['skin_name']}</div>
                <div className="wear">{item['wear_name']}</div>
                <div className="price">{formatPrice(item['item_price'])}</div>
            </div>
            <div className="image-card">
                <img src={item['collection_img_card']}/>
            </div>
        </Link>
    );
}

export default BestDropItem;