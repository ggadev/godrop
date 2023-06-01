import React from 'react';
import '../styles/components/CollectionCard.scss'
import {formatPrice} from "../utils/priceUtils.js";
import {Link} from "react-router-dom";

function CollectionCard() {
    return (
        <Link to={'/collection/howling-furry'} className={'collection-card'}>
            <div className="collection-img">
                <img src={'./howling-fury-card.jpg'}/>
            </div>
            <div className="cover"></div>
            <div className="collection-name-container">
                <div className="collection-name">
                    Howling Fury
                </div>
            </div>
            <div className="collection-price">
                {formatPrice(19.90)}
            </div>
        </Link>
    );
}

export default CollectionCard;