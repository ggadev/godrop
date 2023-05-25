import React from 'react';
import '../../styles/components/LiveDrop/LiveDropItem.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSuitcase} from "@fortawesome/free-solid-svg-icons";

function LiveDropItem({item}) {
    if(!item) return;

    return (
        <div className={`livedrop-item ${item.rarity_name || ''}`}>
            <div className="cover"></div>
            <div className="godrop-mark">
                <img src={'./logo/mark_white.png'}/>
            </div>
            <div className="image">
                <img src={item.item_image}/>
            </div>
            <div className="details">
                <span className={'weapon'}>{item.weapon_name}</span>
                <span className={'skin-name'}>{item.skin_name}</span>
            </div>
            <div className="wear">
                <span>{item.wear_abbr}</span>
            </div>
            <div className="drop-type">
                <FontAwesomeIcon icon={faSuitcase}></FontAwesomeIcon> Case
            </div>
        </div>
    );
}

export default LiveDropItem;