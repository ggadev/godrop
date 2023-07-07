import React, {useEffect, useState} from 'react';
import '../../styles/components/LiveDrop/LiveDrop.scss';
import {
    faAngleLeft,
    faCrown,
    faCubesStacked,
    faPause,
    faSatelliteDish,
    faUser
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import LiveDropItem from "./LiveDropItem.jsx";
import io from 'socket.io-client';
import {API_URL, SOCKET_URL} from "../../data/variables.js";
import axios from "axios";

const socket = io(SOCKET_URL);

function LiveDrop() {
    const [showLiveDrop, setShowLiveDrop] = useState(localStorage.getItem('showLiveDrop') || true);
    const [pauseLiveDrop, setPauseLiveDrop] = useState(false);
    const [liveDropItems, setLiveDropItems] = useState(null);
    const [onlineCount, setOnlineCount] = useState(0);
    const [liveDropOption, setLiveDropOption] = useState('all');

    console.log(pauseLiveDrop);

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
        axios.get(`${API_URL}/livedrop?option=${liveDropOption}`)
            .then(res => {
                setLiveDropItems(res.data);
            })
            .catch(err => {
                console.error(err);
            });
    }, [liveDropOption]);

    useEffect(() => {
        socket.on('onlineCount', (count) => {
            setOnlineCount(count);
        });

        socket.on(`livedrop`, (data) => {
            setLiveDropItems(prevState => [data, ...prevState.slice(0, 10)]);
            console.log(data);
        })

        return () => {
            socket.disconnect();
        }
    }, [liveDropOption, pauseLiveDrop])

    return (
        <div className={'livedrop'} style={!showLiveDrop ? {marginLeft: '-160px'} : undefined}>
            <div className="livedrop-wrapper">
                <div className="livedrop-switch" onClick={toggleShowLiveDrop}>
                    <FontAwesomeIcon icon={faAngleLeft} style={!showLiveDrop ? {transform: 'scaleX(-1)'} : undefined}/>
                </div>
                <div className={`livedrop-pause ${pauseLiveDrop && 'paused'}`}>
                    <span><FontAwesomeIcon icon={faPause} /> Paused</span>
                </div>
                <div className="livedrop-header">
                    <div className="title">LIVEDROP</div>
                    <div className="separator"></div>
                    <div className="online">
                        <FontAwesomeIcon icon={faSatelliteDish} /> <span className={'online-count'}>{onlineCount}</span>
                    </div>
                </div>
                <div className="livedrop-options">
                    <div className={`livedrop-option ${liveDropOption === 'all' && 'selected'}`}
                         onClick={() => setLiveDropOption('all')}>
                        <FontAwesomeIcon icon={faCubesStacked} />
                        <span>All</span>
                    </div>
                    <div className={`livedrop-option ${liveDropOption === 'best' && 'selected'}`}
                         onClick={() => setLiveDropOption('best')}>
                        <FontAwesomeIcon icon={faCrown} />
                        <span>Best</span>
                    </div>
                    <div className={`livedrop-option ${liveDropOption === 'mine' && 'selected'}`}>
                        <FontAwesomeIcon icon={faUser} />
                        <span>My</span>
                    </div>
                </div>
                <div className="livedrop-items"
                     onMouseEnter={() => {setPauseLiveDrop(true)}}
                     onMouseLeave={() => {setPauseLiveDrop(false)}}>
                    {
                        liveDropItems &&
                        liveDropItems.map(item => (<LiveDropItem item={item} key={item['user_item_id']}/>))
                    }
                </div>
            </div>
        </div>
    );
}

export default LiveDrop;