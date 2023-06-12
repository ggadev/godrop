import React from 'react';
import '../styles/components/CollectionCard.scss'
import {formatPrice} from "../utils/priceUtils.js";
import {Link} from "react-router-dom";

function CollectionCard({data}) {
    if(!data) return;

    console.log(data);

    return (
        <Link to={'/collection/howling-furry'} className={'collection-card'}>
            <div className="collection-img">
                <img src={data['collection_img_card']}/>
            </div>
            <div className="cover"></div>
            <div className="collection-name-container">
                <div className="collection-name">
                    {data['collection_name']}
                </div>
            </div>
            <div className="collection-price">
                {formatPrice(data['collection_price'])}
            </div>
        </Link>
    );
}

export default CollectionCard;