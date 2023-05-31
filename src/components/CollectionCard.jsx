import React from 'react';
import '../styles/components/CollectionCard.scss'
import {formatPrice} from "../utils/priceUtils.js";

function CollectionCard() {
    return (
        <div className={'collection-card'}>
            <img src={'./howling-fury-card.jpg'}/>
            <div className="collection-name">
                Howling Fury
            </div>
            <div className="collection-price">
                {formatPrice(39.90)}
            </div>
        </div>
    );
}

export default CollectionCard;