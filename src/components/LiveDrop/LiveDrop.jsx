import React, {useState} from 'react';
import '../../styles/components/LiveDrop/LiveDrop.scss';
import {faAngleLeft, faCrown, faCubesStacked, faSatelliteDish, faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import LiveDropItem from "./LiveDropItem.jsx";

function LiveDrop() {
    const [showLiveDrop, setShowLiveDrop] = useState(localStorage.getItem('showLiveDrop') || true);

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

    return (
        <div className={'livedrop'} style={!showLiveDrop ? {marginLeft: '-160px'} : undefined}>
            <div className="livedrop-wrapper">
                <div className="livedrop-switch" onClick={toggleShowLiveDrop}>
                    <FontAwesomeIcon icon={faAngleLeft} style={!showLiveDrop ? {transform: 'scaleX(-1)'} : undefined}/>
                </div>
                <div className="livedrop-header">
                    <h4><FontAwesomeIcon icon={faSatelliteDish} /> LIVEDROP</h4>
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
                    <LiveDropItem item={{
                        rarity_name: "mil-spec",
                        weapon_name: "Galil AR",
                        skin_name: "Black Sand",
                        wear_abbr: "MW",
                        item_image: "https://data.gadev.pl/godrop/img/galil-ar/galil-ar-black-sand-icon.png"
                    }}/>
                    <LiveDropItem item={{
                        rarity_name: "mil-spec",
                        weapon_name: "Tec-9",
                        skin_name: "Isaac",
                        wear_abbr: "WW",
                        item_image: "https://data.gadev.pl/godrop/img/tec-9/tec-9-isaac-icon.png"
                    }}/>
                    <LiveDropItem item={{
                        rarity_name: "classified",
                        weapon_name: "Desert Eagle",
                        skin_name: "Fennec Fox",
                        wear_abbr: "FT",
                        item_image: "https://data.gadev.pl/godrop/img/desert-eagle/desert-eagle-fennec-fox-icon.png"
                    }}/>
                    <LiveDropItem item={{
                        rarity_name: "covert",
                        weapon_name: "Ak-47",
                        skin_name: "Wild Rift",
                        wear_abbr: "MW",
                        item_image: "https://data.gadev.pl/godrop/img/ak-47/ak-47-wild-lotus-icon.png"
                    }}/>
                    <LiveDropItem item={{
                        rarity_name: "mil-spec",
                        weapon_name: "Famas",
                        skin_name: "Survivor Z",
                        wear_abbr: "FN",
                        item_image: "https://data.gadev.pl/godrop/img/famas/famas-survivor-z-icon.png"
                    }}/>
                    <LiveDropItem item={{
                        rarity_name: "restricted",
                        weapon_name: "AUG",
                        skin_name: "Torque",
                        wear_abbr: "MW",
                        item_image: "https://data.gadev.pl/godrop/img/aug/aug-torque-icon.png"
                    }}/>
                    <LiveDropItem item={{
                        rarity_name: "mil-spec",
                        weapon_name: "Tec-9",
                        skin_name: "Isaac",
                        wear_abbr: "WW",
                        item_image: "https://data.gadev.pl/godrop/img/tec-9/tec-9-isaac-icon.png"
                    }}/>
                    <LiveDropItem item={{
                        rarity_name: "rare",
                        weapon_name: "Karambit",
                        skin_name: "Marble Fade",
                        wear_abbr: "MW",
                        item_image: "https://data.gadev.pl/godrop/img/karambit/karambit-marble-fade-icon.png"
                    }}/>
                    <LiveDropItem item={{
                        rarity_name: "mil-spec",
                        weapon_name: "PP-Bizon",
                        skin_name: "Lumen",
                        wear_abbr: "FT",
                        item_image: "https://data.gadev.pl/godrop/img/pp-bizon/pp-bizon-lumen-icon.png"
                    }}/>
                </div>
            </div>
        </div>
    );
}

export default LiveDrop;