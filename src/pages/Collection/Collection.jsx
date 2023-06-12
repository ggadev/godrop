import React, {useEffect, useState} from 'react';
import '../../styles/pages/Collection/Collection.scss';
import {Helmet} from "react-helmet";
import {Link, useParams} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faEye} from "@fortawesome/free-solid-svg-icons";
import {formatPrice} from "../../utils/priceUtils.js";
import axios from "axios";
import {API_URL} from "../../data/variables.js";
import CollectionDrawer from "./CollectionDrawer.jsx";

function Collection() {
    const [collectionData, setCollectionData] = useState();

    const { collectionUrl } = useParams();

    useEffect(() => {
        axios.get(`${API_URL}/collections/single/${collectionUrl}`)
            .then(res => {
                setCollectionData(res.data);
            })
            .catch(err => {
                console.error(err);
            });
    }, [collectionUrl])

    return (
        <>
            <Helmet>
                <title>Howling Furry Collection | GOdrop</title>
                <meta name="description" content="My page description" />
            </Helmet>
            <main>
                <section className={'collection'}>
                    <div className="cover"></div>
                    <div className="separator"></div>
                    <div className="container collection-content content">
                        <Link className={'go-back-link'} to={'/'}><FontAwesomeIcon icon={faAngleLeft} /> Go back</Link>
                        <div className="collection-header">
                            <img src={'https://data.gadev.pl/godrop/img/collections/howling-fury-card.jpg'}/>
                            <h1>Howling Fury</h1>
                        </div>
                        <div className="public-hash">
                            Public hash <FontAwesomeIcon icon={faEye} />
                        </div>
                        <CollectionDrawer collectionData={collectionData}/>
                        <div className="open-button">
                            <button>Open for v$39.90</button>
                        </div>
                    </div>
                </section>
                <section className={'collection-items'}>
                    <div className="container collection-items-content">
                        <h2>Collection Contents</h2>
                        <div className="skin-list collection-items-list">
                            {collectionData && collectionData['items'].map(item => {
                                const chance = (
                                    parseInt(item['collection_item_range_to'])
                                    -parseInt(item['collection_item_range_from']))/1000;
                                return (
                                    <div className="skin" key={item['skin_id']}>
                                        <div className={`cover rarity-border-top-10 ${item['rarity_code']}`}></div>
                                        <div className="skin-data">
                                            <div className={`skin-rarity rarity-background ${item['rarity_code']}`}></div>
                                            <div className="skin-weapon">{item['weapon_name']}</div>
                                            <div className="skin-name">{item['skin_name']}</div>
                                            <div className="skin-collections">{chance}%</div>
                                            <div className="skin-image">
                                                <img src={item['skin_img']}/>
                                            </div>
                                            <div className="skin-price">{formatPrice(item['skin_price_min'])} - {formatPrice(item['skin_price_max'])}</div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Collection;