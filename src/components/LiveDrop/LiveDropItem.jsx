import React, {useEffect, useState} from 'react';
import '../../styles/components/LiveDrop/LiveDropItem.scss';
import '../../styles/rarities.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSuitcase} from "@fortawesome/free-solid-svg-icons";
import moment from 'moment';

function LiveDropItem({item}) {
    const dropDate = item['user_item_drop_date'];
    const [timeElapsed, setTimeElapsed] = useState(moment(dropDate).fromNow());

    function itemMouseEnter() {
        setTimeElapsed(moment(dropDate).fromNow());
    }

    return (
        <div className={`livedrop-item rarity-border-color ${item.rarity_code || ''}`}
             onMouseEnter={itemMouseEnter}>
            <div className={`cover rarity-border-left-15 ${item.rarity_code || ''}`}></div>
            <div className="item-content-container">
                <div className="item-content">
                    <div className="godrop-mark">
                        <img src={'/logo/mark_white.png'}/>
                    </div>
                    <div className="main-content">
                        {/*<div className="shape">*/}
                        {/*    <svg x="0px" y="0px" viewBox="0 0 90.1 78">*/}
                        {/*        <polygon className={`triangle ${item.rarity_name || ''}`} points="45,2 1.7,77 88.3,77 "/>*/}
                        {/*    </svg>*/}
                        {/*</div>*/}
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
                    <div className="detail-content">
                        <img className={'user-image'} src={'https://data.gadev.pl/godrop/img/avatars/3.jpg'}/>
                        <span className={'username'}>reziplaygames</span>
                        <span className={'time'}>{timeElapsed}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LiveDropItem;