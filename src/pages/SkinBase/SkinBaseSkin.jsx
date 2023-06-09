import {useEffect, useState} from 'react';
import '../../styles/pages/SkinBase/SkinBaseSkin.scss';
import {formatPrice} from "../../utils/priceUtils.js";
import {useParams} from "react-router-dom";
import axios from "axios";
import {formatDate} from "../../utils/dateUtils.js";
import {Helmet} from "react-helmet";
import {API_URL} from "../../data/variables.js";

function SkinBaseSkin() {
    const [skin, setSkin] = useState(null);
    const [currentIcon, setCurrentIcon] = useState(null);
    const [currentWear, setCurrentWear] = useState(null);

    const { skinUrl } = useParams();

    useEffect(() => {
        axios.get(`${API_URL}/skinbase/skin/${skinUrl}`)
            .then(res => {
                setSkin(res.data);
            })
            .catch(err => {
                console.error(err);
            });
    }, [skinUrl])

    function handleWearChange(e, icon, wear) {
        setCurrentIcon(icon);
        setCurrentWear(wear);
    }

    if(!skin) return;

    return (
        <div className={'skin-base-skin'}>
            <Helmet>
                <title>SkinBase - {skin.weapon_name} | {skin.skin_name} | GOdrop</title>
                <meta name="description" content="My page description" />
            </Helmet>
            <div className="first-row">
                <div className="skin-name">
                    <div className={`cover rarity-border-left-20 ${skin.rarity_code}`}></div>
                    <div className="skin-name-wrapper">
                        <div className={`skin-rarity ${skin.rarity_code} rarity-background`}></div>
                        <div className={'skin-name-content'}>
                            <div className={'skin-name-weapon'}>
                                <div className="col">
                                    <h3>{skin.weapon_name}</h3>
                                    <h2>{skin.skin_name}</h2>
                                </div>
                                <div className="col">
                                    { currentWear && <span>{currentWear}</span>}
                                </div>
                            </div>
                            <img src={currentIcon || skin.skin_img}/>
                            <div className="inspect-buttons" onMouseLeave={e => handleWearChange(e, skin.skin_img, null)}>
                                {skin['wears'].map(wear => (
                                    <div key={wear.item_id}
                                         className="inspect-button"
                                         onMouseEnter={e => handleWearChange(e, wear.item_image, wear.wear_name)}>
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
                        <p>
                            The {skin.weapon_name} {skin.skin_name} has a float range of <b>{skin.skin_min_wear}</b>-<b>{skin.skin_max_wear}</b> and comes in {skin.wears.length === 5 ? 'all' : skin.wears.length} possible wears</p>
                        <div className="float-range">
                            <div className="indicator float-min" style={{left: `${skin.skin_min_wear*100}%`}}>
                                <div className="stripe"></div>
                                <div className="value">{skin.skin_min_wear}</div>
                            </div>
                            <div className="indicator float-min" style={{left: `${skin.skin_max_wear*100}%`}}>
                                <div className="stripe"></div>
                                <div className="value">{skin.skin_max_wear}</div>
                            </div>
                            <div className="float-range-stripe-dark">
                                <div className={'wear-background FN'}></div>
                                <div className={'wear-background MW'}></div>
                                <div className={'wear-background FT'}></div>
                                <div className={'wear-background WW'}></div>
                                <div className={'wear-background BS'}></div>
                            </div>

                            <div className="float-range-stripe" style={{
                                clipPath: `polygon(${skin.skin_min_wear*100}% 0, ${skin.skin_max_wear*100}% 0, ${skin.skin_max_wear*100}% 100%, ${skin.skin_min_wear*100}% 100%)`
                            }}>
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