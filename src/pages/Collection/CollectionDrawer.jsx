import {useContext, useEffect, useRef, useState} from "react";
import "../../styles/pages/Collection/CollectionDrawer.scss";
import axios from "axios";
import AuthContext from "../../contexts/AuthContext.jsx";
import {useAddNotification} from "../../contexts/NotificationContext.jsx";
import {formatPrice} from "../../utils/priceUtils.js";
import DropModal from "../../modals/DropModal/DropModal.jsx";
import PropTypes from "prop-types";
import ModalsContext from "../../contexts/ModalsContext.jsx";

CollectionDrawer.propTypes = {
    collectionData: PropTypes.shape({
        collection_url: PropTypes.string,
        skins: PropTypes.arrayOf(
            PropTypes.shape({
                skin_id: PropTypes.number,
                rarity_code: PropTypes.string,
                skin_img: PropTypes.string,
                weapon_name: PropTypes.string,
                skin_name: PropTypes.string,
            })
        ),
        collection_price: PropTypes.number,
    }),
    drawOptions: PropTypes.shape({
        fast: PropTypes.bool,
    }),
};

function CollectionDrawer({collectionData, drawOptions}) {
    const [randomItems, setRandomItems] = useState(null);
    const [isDrawing, setIsDrawing] = useState(false);

    const collectionItems = collectionData?.skins;

    const addNotification = useAddNotification();

    const { displayModal } = useContext(ModalsContext);

    const { getToken, updateBalance, user } = useContext(AuthContext);

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

    function draw() {
        setIsDrawing(true);
        let tempItems = [];
        axios.post(`http://localhost:3001/collections/draw/${collectionData['collection_url']}`, { optionFast: drawOptions.fast }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'x-access-token': getToken()
            }
        })
            .then(res => {
                if(collectionData) {
                    for (let i = 0; i < 100; i++) {
                        tempItems[i] = Math.floor(Math.random() * collectionData['skins'].length);
                    }
                }
                setRandomItems(tempItems);
                displayDraw(res.data);
                if ('userBalance' in res.data) {
                    updateBalance(parseFloat(res.data.userBalance));
                }
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
        animateCarousel(data);
    }

    function animateCarousel(data) {
        const c = carousel.current;
        if(c) {
            const cPosition = Math.floor(Math.random() * (16231 - 16056) + 16056);
            c.animate(
                {
                    left: ['0px', `${cPosition*-1}px`]
                },
                {
                    duration: drawOptions.fast ? 2500 : 5000,
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
                    displayModal(<DropModal dropResult={data}></DropModal>, true);
                    setIsDrawing(false);
                }, 300)
            }, (drawOptions.fast ? 2500 : 5000) - 200)
        }
    }

    return (
        <>
            <div className="drawer">
                <div className="drawer-positioner">
                    <div className="drawer-container">
                        <div className="drawer-carousel" ref={carousel}>
                            { randomItems && collectionItems && randomItems.map((i, index) => (
                                <div key={index} className={`item ${collectionItems[i].rarity_code} rarity-border-bot-20 rarity-border-color`}>
                                    <div className="img">
                                        <img src={collectionItems[i].skin_img || ''} alt={`${collectionItems[i].weapon_name} ${collectionItems[i].skin_name}`}/>
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
                    </div>
                </div>
                <div className="cover"></div>
                <div className="arrow-bot"></div>
                <div className="arrow-top"></div>
            </div>
            <div className="open-button">
                <div className="quantity-options">
                    <div className="option selected"><span>1</span></div>
                    {/*<div className="option"><span>2</span></div>*/}
                    {/*<div className="option"><span>3</span></div>*/}
                    {/*<div className="option"><span>4</span></div>*/}
                </div>
                <button onClick={draw} className={`${(isDrawing || !user || user['user_balance'] < collectionData['collection_price']) && 'inactive'}`}>
                    Open for {formatPrice(collectionData?.collection_price)}
                </button>
            </div>
        </>
    );
}

export default CollectionDrawer;