import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCrown} from "@fortawesome/free-solid-svg-icons";
import '../../styles/pages/Home/HomeBestDrops.scss';
import axios from "axios";
import {API_URL} from "../../data/variables.js";
import BestDropItem from "../../components/BestDropItem.jsx";

function HomeBestDrops() {
    const [bestDrops, setBestDrops] = useState(null);

    useEffect(() => {
        axios.get(`${API_URL}/home/best`)
            .then(res => {
                setBestDrops(res.data);
            })
            .catch(err => {
                console.error(err);
            });
    }, [])

    return (
        <section className={'home-best-drops'}>
            <div className="home-best-drops-container container">
                <div className="section-header">
                    <h2><FontAwesomeIcon icon={faCrown} style={{color: '#EAB043'}}/> 24h Best Drop</h2>
                </div>
                <div className="best-drops-list">
                    {
                        bestDrops &&
                        bestDrops.map(item => (
                            <BestDropItem item={item} key={item['user_item_id']}/>
                        ))
                    }
                </div>
            </div>
        </section>
    )
};

export default HomeBestDrops;