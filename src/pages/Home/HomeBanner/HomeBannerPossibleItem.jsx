import React from 'react';
import '../../../styles/pages/Home/HomeBanner/HomeBannerPossibleItem.scss';

function HomeBannerPossibleItem(props) {
    const { rarity, img, weapon, skin } = props.item;

    return (
        <div className={`possible-item ${rarity}`}>
            <img src={img}/>
            <div className="item-detail">
                <div className="weapon">{weapon}</div>
                <div className="skin-name">{skin}</div>
            </div>
        </div>
    );
}

export default HomeBannerPossibleItem;