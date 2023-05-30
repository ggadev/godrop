import React, {useEffect, useState} from 'react';
import '../../styles/pages/SkinBase/SkinBaseSkin.scss';
import {formatPrice} from "../../utils/priceUtils.js";
import {useParams} from "react-router-dom";
import axios from "axios";
import {formatDate} from "../../utils/dateUtils.js";

function SkinBaseSkin() {
    const [skin, setSkin] = useState(null);

    const { skinUrl } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3001/skinbase/skin/${skinUrl}`)
            .then(res => {
                setSkin(res.data);
            })
            .catch(err => {
                console.error(err);
            });
    }, [skinUrl])

    if(!skin) return;

    return (
        <div className={'skin-base-skin'}>
            <div className="first-row">
                <div className="skin-name">
                    <div className={`cover rarity-border-left-20 ${skin.rarity_code}`}></div>
                    <div className="skin-name-wrapper">
                        <div className={`skin-rarity ${skin.rarity_code} rarity-background`}></div>
                        <div className={'skin-name-content'}>
                            <div className={'skin-name-weapon'}>
                                <h3>{skin.weapon_name}</h3>
                                <h2>{skin.skin_name}</h2>
                            </div>
                            <img src={skin.skin_img}/>
                            <div className="inspect-buttons">
                                {skin['wears'].map(wear => (
                                    <div key={wear.item_id} className="inspect-button">
                                        <span className={`wear-color ${wear.wear_abbr}`}>{wear.wear_abbr}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="skin-details">
                    <div className="block-header">
                        <h4>Details</h4>
                    </div>
                    <div className="block-content">
                        <dl>
                            <dt>Rarity:</dt>
                            <dd><span className={`rarity-color ${skin.rarity_code}`}>•</span> {skin.rarity_name} ({skin.rarity_definition})</dd>
                            <dt>Weapon Type:</dt>
                            <dd>Rifle</dd>
                            <dt>Description:</dt>
                            <dd>{skin.skin_desc}</dd>
                            <dt>Flavor Text:</dt>
                            <dd><i>{skin.skin_flavor}</i></dd>
                            <dt>Added:</dt>
                            <dd>{formatDate(skin.skin_added_date)}</dd>
                        </dl>
                    </div>
                </div>
                <div className="skin-prices">
                    <div className="block-header">
                        <h4>Wears & Prices</h4>
                    </div>
                    <div className="block-content">
                        <p>The {skin.weapon_name} {skin.skin_name} has a float range of <b>{skin.skin_min_wear}</b>-<b>{skin.skin_max_wear}</b> and comes in all possible wears</p>
                        <div className="float-range">
                            <div className="indicator float-min" style={{left: '5%'}}>
                                <div className="stripe"></div>
                                <div className="value">0.05</div>
                            </div>
                            <div className="indicator float-min" style={{left: '70%'}}>
                                <div className="stripe"></div>
                                <div className="value">0.70</div>
                            </div>
                            <div className="float-range-stripe-dark">
                                <div className={'wear-background FN'}></div>
                                <div className={'wear-background MW'}></div>
                                <div className={'wear-background FT'}></div>
                                <div className={'wear-background WW'}></div>
                                <div className={'wear-background BS'}></div>
                            </div>

                            <div className="float-range-stripe" style={{clipPath: 'polygon(5% 0, 70% 0, 70% 100%, 5% 100%)'}}>
                                <div className={'wear-background FN'}></div>
                                <div className={'wear-background MW'}></div>
                                <div className={'wear-background FT'}></div>
                                <div className={'wear-background WW'}></div>
                                <div className={'wear-background BS'}></div>
                            </div>
                        </div>

                        <hr/>
                        <div className="prices">
                            {skin['wears'].map(wear => (
                                <div className="price" key={wear.item_id}>
                                    <div className="wear">{wear.wear_name}</div>
                                    <div className="wear-price">{formatPrice(wear.item_price)}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="second-row">
                <div className="skin-preview">
                    <div className="block-header">
                        <h4>Preview</h4>
                    </div>
                    <div className="block-content">
                        <img src={skin.skin_img_preview}/>
                    </div>
                </div>
                <div className="skin-texture">
                    <div className="block-header">
                        <h4>Texture</h4>
                    </div>
                    <div className="block-content">
                        <img src={skin.skin_img_texture}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SkinBaseSkin;