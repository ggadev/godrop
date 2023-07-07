import React, {useEffect, useState} from 'react';
import '../../styles/pages/Collection/Collection.scss';
import {Helmet} from "react-helmet";
import {Link, useParams} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faBolt, faCrown, faEye, faGun, faRepeat} from "@fortawesome/free-solid-svg-icons";
import {formatPrice} from "../../utils/priceUtils.js";
import axios from "axios";
import {API_URL} from "../../data/variables.js";
import CollectionDrawer from "./CollectionDrawer.jsx";
import useScrollPosition from "../../hooks/useScrollPosition.jsx";
import CollectionItem from "./CollectionItem.jsx";
import CollectionBestItem from "./CollectionBestItem.jsx";

function Collection() {
    const [collectionData, setCollectionData] = useState();
    const [collectionOpen, setCollectionOpen] = useState();
    const [collectionBest, setCollectionBest] = useState(null);

    const scrollY = useScrollPosition();

    const { collectionUrl } = useParams();

    useEffect(() => {
        axios.get(`${API_URL}/collections?detail=true&url=${collectionUrl}`)
            .then(res => {
                setCollectionData(res.data[0]);
            })
            .catch(err => {
                console.error(err);
            });

        axios.get(`${API_URL}/collections/best/${collectionUrl}`)
            .then(res => {
                setCollectionBest(res.data);
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
                    <div className="collection-background">
                        <img src={collectionData?.collection_img_bg} style={{ transform: `translateY(${scrollY * 0.5}px)` }}/>
                    </div>
                    <div className="cover"></div>
                    <div className="separator"></div>
                    <div className="container collection-content content">
                        <div className="collection-top">
                            <div className="col">
                                <Link className={'go-back-link'} to={'/'}><FontAwesomeIcon icon={faAngleLeft} /> Go back</Link>
                                <div className="collection-header">
                                    <img src={collectionData?.collection_img_card}/>
                                    <h1>{collectionData?.collection_name}</h1>
                                </div>
                            </div>
                            <div className="col">
                                <div className="collection-options">
                                    <div className="option">
                                        <FontAwesomeIcon icon={faRepeat} />
                                    </div>
                                    <div className="option">
                                        <FontAwesomeIcon icon={faBolt} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {
                            collectionData &&
                            <CollectionDrawer collectionData={collectionData} open={collectionOpen}/>
                        }
                    </div>
                </section>
                <section className={'collection-best'}>
                    <div className="container collection-best-content">
                        <div className="collection-section-header">
                            <h2><FontAwesomeIcon icon={faCrown} style={{color: '#EAB043'}}/> 72h Best Drop</h2>
                        </div>
                        <div className="collection-best-list">
                            {
                                collectionBest &&
                                collectionBest.map(item => (
                                    <CollectionBestItem item={item} key={item['user_item_id']}/>
                                ))
                            }
                        </div>
                    </div>
                </section>
                <section className={'collection-items'}>
                    <div className="container collection-items-content">
                        <div className="collection-section-header">
                            <h2><FontAwesomeIcon icon={faGun} /> Collection Contains</h2>
                        </div>
                        <div className="skin-list collection-items-list">
                            {collectionData && collectionData['skins'].map(item => {
                                return (
                                    <CollectionItem item={item} key={item['skin_id']}/>
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