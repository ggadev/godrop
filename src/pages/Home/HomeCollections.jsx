import React, {useEffect, useState} from 'react';
import CollectionCard from "../../components/CollectionCard.jsx";
import '../../styles/pages/Home/HomeCollections.scss';
import {API_URL} from "../../data/variables.js";
import axios from "axios";

function HomeCollections() {
    const [collections, setCollections] = useState(null);

    useEffect(() => {
        axios.get(`${API_URL}/collections?limit=4&latest=true`)
            .then(res => {
                setCollections(res.data);
            })
            .catch(err => {
                console.error(err);
            });
    }, [])

    return (
        <section className={'home-collections container'}>
            <div className="collections-list">
                { collections && collections.map(col => (
                    <CollectionCard key={col['collection_id']} data={col}/>
                ))}
            </div>
        </section>
    );
}

export default HomeCollections;