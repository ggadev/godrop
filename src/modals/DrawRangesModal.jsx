import React, {useContext, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGear, faPenToSquare, faShieldHalved, faXmark} from "@fortawesome/free-solid-svg-icons";
import "../styles/modals/DrawRangesModal.scss";
import axios from "axios";
import {useAddNotification} from "../contexts/NotificationContext.jsx";
import ModalsContext from "../contexts/ModalsContext.jsx";
import AuthContext from "../contexts/AuthContext.jsx";
import {formatPrice} from "../utils/priceUtils.js";

function DrawRangesModal({collection}) {
    if (!collection) return;

    return (
        <div className="draw-ranges-modal">
            <div className="content-header">
                <div className="col">
                    <h2><FontAwesomeIcon icon={faShieldHalved} /> Draw Ranges</h2>
                    <p>{collection['collection_name']} Collection</p>
                </div>
            </div>
            <div className={'draw-ranges-container'}>
                <table>
                    <tbody>
                    <tr>
                        <th>Skin</th>
                        <th>Price</th>
                        <th>Range</th>
                    </tr>
                    {
                        collection['skins'].map((skin, index) => {
                            return (
                                <tr key={index}>
                                    <td className={'skin'}>
                                        <img className={'skin-img'} src={skin.skin_img}/>
                                        <span className={'skin-weapon'}>{skin.weapon_name} </span>
                                        <span className={'skin-name'}>{skin.skin_name}</span>
                                    </td>
                                    <td className={'price'}>
                                        {formatPrice(skin.skin_price_min)} - {formatPrice(skin.skin_price_max)}
                                    </td>
                                    <td className={'range'}>
                                        {skin.collection_item_range_from}-{skin.collection_item_range_to}
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default DrawRangesModal;