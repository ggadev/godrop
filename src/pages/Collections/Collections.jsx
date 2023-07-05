import {faAngleLeft, faKhanda} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import '../../styles/pages/Collections/Collections.scss';
import {Helmet} from "react-helmet";
import CollectionCard from "../../components/CollectionCard.jsx";
import '../../styles/pages/Collections/Collections.scss';
import React, {useEffect, useState} from "react";
import axios from "axios";
import {API_URL} from "../../data/variables.js";

function Collections() {
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
        <div className={'collections'}>
            <main>
                <Helmet>
                    <title>Collections | GOdrop</title>
                    <meta name="description" content="My page description" />
                </Helmet>
                <div className={'collections-wrapper container content'}>
                    <Link className={'go-back-link'} to={'/'}><FontAwesomeIcon icon={faAngleLeft} /> Go back</Link>
                    <h1 className={'page-header'}><FontAwesomeIcon icon={faKhanda} /> Collections</h1>
                    <div className="collections-list">
                        { collections && collections.map(col => (
                            <CollectionCard key={col['collection_id']} data={col}/>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Collections;