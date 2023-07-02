import React, {useContext, useEffect, useRef, useState} from 'react';
import '../../styles/pages/Collection/CollectionDrawer.scss';
import axios from "axios";
import {API_URL} from "../../data/variables.js";
import AuthContext from "../../contexts/AuthContext.jsx";
import {useAddNotification} from "../../contexts/NotificationContext.jsx";
import {formatPrice} from "../../utils/priceUtils.js";
import SignModal from "../../modals/SignModal/SignModal.jsx";
import SettingsModal from "../../modals/SettingsModal/SettingsModal.jsx";
import DropModal from "../../modals/DropModal/DropModal.jsx";

function CollectionDrawer({collectionData, open}) {
    const [randomItems, setRandomItems] = useState(null);
    const [showDropModal, setShowDropModal] = useState(false);
    const [drawResult, setDrawResult] = useState(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [collectionItems, setCollectionItems] = useState(collectionData?.skins);

    const addNotification = useAddNotification();

    const { getToken, updateBalance } = useContext(AuthContext);

    useEffect(() => {
        let tempItems = [];
        if(collectionData) {
            for (let i = 0; i < 100; i++) {
                tempItems[i] = Math.floor(Math.random() * collectionData['skins'].length);
            }
        }
        setRandomItems(tempItems);
    }, [collectionData]);

    const carousel = useRef(null);

    if(open) draw();

    function draw() {
        setIsDrawing(true);
        setShowDropModal(false);
        let tempItems = [];
        if(collectionData) {
            for (let i = 0; i < 100; i++) {
                tempItems[i] = Math.floor(Math.random() * collectionData['skins'].length);
            }
        }
        setRandomItems(tempItems);
        axios.post(`http://localhost:3001/collections/draw/${collectionData['collection_url']}`, null, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'x-access-token': getToken()
            }
        })
            .then(res => {
                setDrawResult(res.data);
                displayDraw(res.data);
                console.log(res.data);
                updateBalance(parseFloat(res.data.userBalance));
            })
            .catch(err => {
                const errorMessage = err.response.data.error;
                addNotification({title: 'Error', desc: errorMessage, status: 'error'});
                setIsDrawing(false);
            });
    }

    function displayDraw(data) {
        const index = collectionItems.findIndex(skin => skin.skin_id === data['skin_id']);
        setRandomItems(prevState => {
            const temp = [...prevState];
            temp[92] = index;
            return temp;
        })
        console.log(randomItems);
        animateCarousel();
    }

    function animateCarousel() {
        const c = carousel.current;
        if(c) {
            const cPosition = Math.floor(Math.random() * (16231 - 16056) + 16056);
            c.animate(
                {
                    left: ['0px', `${cPosition*-1}px`]
                },
                {
                    duration: 5000,
                    easing: 'cubic-bezier(.17,1,0,1)',
                    fill: 'forwards'
                }
            );
            setTimeout(() => {
                c.animate(
                    {
                        left: [`${cPosition*-1}px`, '-16143px']
                    },
                    {
                        duration: 400,
                        easing: 'ease',
                        fill: 'forwards'
                    }
                );
                setTimeout(() => {
                    setShowDropModal(true);
                    setIsDrawing(false);
                }, 300)
            }, 4800)
        }
    }



    return (
        <>
            {showDropModal && <DropModal toggleModal={() => setShowDropModal(false)} dropResult={drawResult}></DropModal>}
            <div className="drawer">
                {/*<div className="drawer-card">*/}
                {/*    <div className="top">*/}
                {/*        <img className={'top'} src={collectionData?.collection_img_card} alt=""/>*/}
                {/*    </div>*/}
                {/*    <div className="bot">*/}
                {/*        <img className={'top'} src={collectionData?.collection_img_card} alt=""/>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className="drawer-carousel" ref={carousel}>
                    { randomItems && collectionItems && randomItems.map((i, index) => (
                        <div key={index} className={`item ${collectionItems[i].rarity_code} rarity-border-bot-20 rarity-border-color`}>
                            <div className="img">
                                <img src={collectionItems[i].skin_img}/>
                            </div>
                            <div className="details">
                                <div className="weapon">
                                    {collectionItems[i].weapon_name}
                                </div>
                                <div className="skin">
                                    {collectionItems[i].skin_name}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="cover"></div>
                <div className="arrow-bot"></div>
                <div className="arrow-top"></div>
            </div>
            <div className="open-button">
                <button onClick={draw} className={`${isDrawing && 'inactive'}`}>Open for {formatPrice(collectionData?.collection_price)}</button>
            </div>
        </>
    );
}

export default CollectionDrawer;