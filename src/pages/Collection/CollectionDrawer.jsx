import React, {useContext, useEffect, useRef, useState} from 'react';
import '../../styles/pages/Collection/CollectionDrawer.scss';
import axios from "axios";
import {API_URL} from "../../data/variables.js";
import AuthContext from "../../contexts/AuthContext.jsx";
import {useAddNotification} from "../../contexts/NotificationContext.jsx";

function CollectionDrawer({collectionData}) {
    const [randomItems, setRandomItems] = useState(null);

    const addNotification = useAddNotification();

    const { getToken } = useContext(AuthContext);

    useEffect(() => {
        let tempItems = [];
        if(collectionData) {
            for (let i = 0; i < 100; i++) {
                tempItems[i] = Math.floor(Math.random() * collectionData['items'].length);
            }
        }
        setRandomItems(tempItems);
    }, [collectionData]);

    const items = collectionData?.items || null;

    console.log(items);

    const carousel = useRef(null);

    function draw() {
        axios.post('http://localhost:3001/collections/draw/howling-fury', null, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'x-access-token': getToken()
            }
        })
            .then(res => {
                displayDraw(res.data);
            })
            .catch(err => {
                const errorMessage = err.response.data.error;
                addNotification({title: 'Error', desc: errorMessage, status: 'error'});
            });
    }

    function displayDraw(data) {
        const index = items.findIndex(skin => skin.skin_id === data['skin_id']);
        console.log(index);
        setRandomItems(prevState => {
            const temp = [...prevState];
            temp[92] = index;
            return temp;
        })
        animateCarousel();
        setTimeout(() => {
            addNotification({title: 'Success', desc: 'Ez drop man', status: 'success'});
        }, 6000)
    }

    function animateCarousel() {
        const c = carousel.current;
        if(c) {
            const cPosition = Math.floor(Math.random() * (16138 - 15965) + 15965);
            c.animate(
                {
                    left: ['0px', `${cPosition*-1}px`]
                },
                {
                    duration: 6000,
                    easing: 'cubic-bezier(.17,1,0,1)',
                    fill: 'forwards'
                }
            );
        }
    }

    return (
        <div className="drawer" onClick={draw}>
            <div className="drawer-carousel" ref={carousel}>
                { randomItems && items && randomItems.map((i, index) => (
                    <div key={index} className={`item ${items[i].rarity_code} rarity-border-bot-20 rarity-border-color`}>
                        <div className="img">
                            <img src={items[i].skin_img}/>
                        </div>
                        <div className="details">
                            <div className="weapon">
                                {items[i].weapon_name}
                            </div>
                            <div className="skin">
                                {items[i].skin_name}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="cover"></div>
            <div className="arrow-bot"></div>
            <div className="arrow-top"></div>
        </div>
    );
}

export default CollectionDrawer;