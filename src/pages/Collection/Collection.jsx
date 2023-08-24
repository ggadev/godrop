import React, {useContext, useEffect, useState} from 'react';
import '../../styles/pages/Collection/Collection.scss';
import {Helmet} from "react-helmet";
import {Link, useParams} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faBolt, faCrown, faEye, faGun, faRepeat, faShieldHalved} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import {API_URL} from "../../data/variables.js";
import CollectionDrawer from "./CollectionDrawer.jsx";
import CollectionItem from "./CollectionItem.jsx";
import BestDropItem from "../../components/BestDropItem.jsx";
import StatsSection from "../../components/StatsSection.jsx";
import ModalsContext from "../../contexts/ModalsContext.jsx";
import DrawRangesModal from "../../modals/DrawRangesModal.jsx";

function Collection() {
    const [collectionData, setCollectionData] = useState();
    const [collectionOpen, setCollectionOpen] = useState();
    const [collectionBest, setCollectionBest] = useState([]);

    const [drawOptions, setDrawOptions] = useState({
        fast: false,
        auto: false
    })

    const { collectionUrl } = useParams();

    const { displayModal } = useContext(ModalsContext);

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

    function toggleFastOption() {
        setDrawOptions(prevState => ({
            ...prevState,
            fast: !prevState.fast
        }));
    }

    if(!collectionData) return;

    return (
        <>
            <Helmet>
                <title>{collectionData?.collection_name} | GOdrop</title>
                <meta name="description" content="My page description" />
            </Helmet>
            <main>
                <section className={'collection'}>
                    <div className="collection-background">
                        <img src={collectionData?.collection_img_bg}/>
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
                                    <Link to={'/provably-fair'} className="option">
                                        <FontAwesomeIcon icon={faShieldHalved} />
                                    </Link>
                                    <div className={`option fast ${drawOptions.fast ? 'active' : ''}`}
                                         onClick={toggleFastOption}>
                                        <FontAwesomeIcon icon={faBolt} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {
                            collectionData &&
                            <CollectionDrawer collectionData={collectionData} open={collectionOpen} drawOptions={drawOptions}/>
                        }
                    </div>
                </section>
                {
                    collectionBest.length > 3 &&
                    <section className={'collection-best'}>
                        <div className="container collection-best-content">
                            <div className="collection-section-header">
                                <h2><FontAwesomeIcon icon={faCrown} style={{color: '#EAB043'}}/> 72h Best Drop</h2>
                            </div>
                            <div className="best-drops-list">
                                {
                                    collectionBest.map(item => (
                                        <BestDropItem item={item} key={item['user_item_id']}/>
                                    ))
                                }
                            </div>
                        </div>
                    </section>
                }
                <section className={'collection-items'}>
                    <div className="container collection-items-content">
                        <div className="collection-section-header">
                            <h2><FontAwesomeIcon icon={faGun} /> Collection Contains</h2>
                            <div className={'draw-ranges'} onClick={() => displayModal(<DrawRangesModal collection={collectionData}/>)}><FontAwesomeIcon icon={faShieldHalved} /> Draw Ranges</div>
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
                <StatsSection/>
            </main>
        </>
    );
}

export default Collection;