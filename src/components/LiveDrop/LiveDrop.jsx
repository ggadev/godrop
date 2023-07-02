import React, {useEffect, useState} from 'react';
import '../../styles/components/LiveDrop/LiveDrop.scss';
import {faAngleLeft, faCrown, faCubesStacked, faSatelliteDish, faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import LiveDropItem from "./LiveDropItem.jsx";
import io from 'socket.io-client';
import {API_URL, SOCKET_URL} from "../../data/variables.js";
import axios from "axios";

const socket = io(SOCKET_URL);

function LiveDrop() {
    const [showLiveDrop, setShowLiveDrop] = useState(localStorage.getItem('showLiveDrop') || true);
    const [liveDropItems, setLiveDropItems] = useState(null);
    const [onlineCount, setOnlineCount] = useState(0);

    function toggleShowLiveDrop() {
        setShowLiveDrop(prevState => {
            const body = document.querySelector('body');
            if(!prevState)
                body.classList.remove('live-drop-hidden')
            else
                body.classList.add('live-drop-hidden')
            localStorage.setItem('showLiveDrop', !prevState);
            return !prevState;
        })
    }


    useEffect(() => {
        socket.on('onlineCount', (count) => {
            setOnlineCount(count);
        });

        socket.on('livedrop', (data) => {
            setLiveDropItems(prevState => [data, ...prevState.slice(0, 10)]);
            console.log(data);
        })

        axios.get(`${API_URL}/livedrop/all`)
            .then(res => {
                setLiveDropItems(res.data);
            })
            .catch(err => {
                console.error(err);
            });

        return () => {
            socket.disconnect();
        }
    }, []);

    return (
        <div className={'livedrop'} style={!showLiveDrop ? {marginLeft: '-160px'} : undefined}>
            <div className="livedrop-wrapper">
                <div className="livedrop-switch" onClick={toggleShowLiveDrop}>
                    <FontAwesomeIcon icon={faAngleLeft} style={!showLiveDrop ? {transform: 'scaleX(-1)'} : undefined}/>
                </div>
                <div className="livedrop-header">
                    <div className="title">LIVEDROP</div>
                    <div className="separator"></div>
                    <div className="online">
                        <FontAwesomeIcon icon={faSatelliteDish} /> <span className={'online-count'}>{onlineCount}</span>
                    </div>
                </div>
                <div className="livedrop-options">
                    <div className="livedrop-option selected">
                        <FontAwesomeIcon icon={faCubesStacked} />
                        <span>All</span>
                    </div>
                    <div className="livedrop-option">
                        <FontAwesomeIcon icon={faCrown} />
                        <span>Best</span>
                    </div>
                    <div className="livedrop-option">
                        <FontAwesomeIcon icon={faUser} />
                        <span>My</span>
                    </div>
                </div>
                <div className="livedrop-items">
                    {
                        liveDropItems &&
                        liveDropItems.map(item => (<LiveDropItem item={item} key={item['user_item_id']}/>))
                    }
                    <LiveDropItem item={{
                        rarity_name: "mil-spec",
                        weapon_name: "Galil AR",
                        skin_name: "Black Sand",
                        wear_abbr: "MW",
                        item_image: "https://data.gadev.pl/godrop/img/galil-ar/galil-ar-black-sand-icon.png"
                    }}/>
                </div>
            </div>
        </div>
    );
}

export default LiveDrop;