import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link, useParams} from "react-router-dom";
import '../../styles/pages/SkinBase/SkinBaseListing.scss';
import {formatPrice} from "../../utils/priceUtils.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFilter} from "@fortawesome/free-solid-svg-icons";
import {Helmet} from "react-helmet";

function SkinBaseListing() {
    const [skins, setSkins] = useState(null);
    const [sorting, setSorting] = useState('rarity-desc');

    const changeSorting = e => setSorting(e.target.value);

    const { weaponUrl } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3001/skinbase/skins/${weaponUrl}`)
            .then(res => {
                setSkins(res.data);
            })
            .catch(err => {
                console.error(err);
            });
    }, [weaponUrl]);



    if(!skins) {
        return (
            <div className={'skin-list'}>
                Loading...
            </div>
        )
    }

    return (
        <div className={'skin-list-container'}>
            <Helmet>
                <title>SkinBase - {skins[0].weapon_name} | GOdrop</title>
                <meta name="description" content="My page description" />
            </Helmet>
            <div className="skin-list-header">
                <div className="header-values">
                    <h2>{skins[0].weapon_name}</h2>
                    <p>Found <span>{skins.length}</span> skins</p>
                </div>
                <div className="header-options">
                    <p><FontAwesomeIcon icon={faFilter} /> Sort by </p>
                    <select className={'sort-by'} value={sorting} onChange={changeSorting}>
                        <option value="rarity-desc">Rarity Desc</option>
                        <option value="rarity-asc">Rarity Asc</option>
                        <option value="price-desc">Price Desc</option>
                        <option value="price-asc">Price Asc</option>
                    </select>
                </div>
            </div>
            <div className={'skin-list'}>
                {skins.map((skin) => (
                    <Link to={`/skinbase/skin/${skin.skin_url}`} className="skin" key={skin.skin_id}>
                        <div className={`cover rarity-border-top-10 ${skin.rarity_code}`}></div>
                        <div className="skin-data">
                            <div className={`skin-rarity rarity-background ${skin.rarity_code}`}></div>
                            <div className="skin-weapon">{skin.weapon_name}</div>
                            <div className="skin-name">{skin.skin_name}</div>
                            <div className="skin-collections">Found in 1 collection</div>
                            <div className="skin-image">
                                <img src={skin.skin_img}/>
                            </div>
                            <div className="skin-price">{formatPrice(skin.skin_price_min)} - {formatPrice(skin.skin_price_max)}</div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default SkinBaseListing;