import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faKhanda} from "@fortawesome/free-solid-svg-icons";
import '../../styles/pages/Home/HomePopularCollections.scss';
import React, {useEffect, useState} from "react";
import axios from "axios";
import {API_URL} from "../../data/variables.js";
import CollectionCard from "../../components/CollectionCard.jsx";

function HomePopularCollections() {
    const [collections, setCollections] = useState(null);

    useEffect(() => {
        axios.get(`${API_URL}/collections`)
            .then(res => {
                setCollections(res.data);
            })
            .catch(err => {
                console.error(err);
            });
    }, [])

    return (
        <section className={'home-popular-collections'}>
            <div className="home-popular-collections-container container">
                <div className="section-header">
                    <h2><FontAwesomeIcon icon={faKhanda} /> Popular Collections</h2>
                </div>
                <div className="home-popular-collections-list">
                    { collections && collections.map(col => (
                        <CollectionCard key={col['collection_id']} data={col}/>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default HomePopularCollections;