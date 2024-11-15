import React from 'react';
import '../styles/components/CollectionCard.scss'
import {formatPrice} from "../utils/priceUtils.js";
import {Link} from "react-router-dom";

function CollectionCard({data}) {
    if(!data) return;

    return (
        <Link to={`/collection/${data['collection_url']}`} className={'collection-card'}>
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