import React, {useEffect, useState} from 'react';
import {Helmet} from "react-helmet";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faScrewdriverWrench} from "@fortawesome/free-solid-svg-icons";
import '../../styles/pages/Admin/Admin.scss';
import axios from "axios";
import {API_URL} from "../../data/variables.js";
import {formatPrice} from "../../utils/priceUtils.js";

function Admin(props) {
    const [skins, setSkins] = useState(null);
    const [filters, setFilters] = useState({
        search: 'm4a4',
        order: 'rarities.rarity_id',
        orderType: 'DESC'
    })
    const [selectedSkins, setSelectedSkins] = useState([]);
    const [collectionId, setCollectionId] = useState(0);

    function addSelectedSkin(skin) {
        if(checkSelected(skin)) return;
        setSelectedSkins(prevState => [
            ...prevState,
            {
                ...skin,
                chance: 0
            }
        ])
    }

    function removeSelectedItem(index) {
        console.log('remove index' + index);
        setSelectedSkins(prevState => {
            const current = [...prevState];
            current.splice(index, 1);
            return current;
        })
    }

    function sortSelectedSkins() {
        const sortedSkins = [...selectedSkins];
        sortedSkins.sort((a, b) => b['skin_median_price'] - a['skin_median_price']);
        setSelectedSkins(sortedSkins);
    }

    function evenChances() {
        const chance = parseInt(100000/selectedSkins.length);
        setSelectedSkins(prevState => {
            const current = prevState;
            return selectedSkins.map((skin, index) => ({
                ...skin,
                chance: index === 0 ? 100000 - (current.length - 1) * chance : chance
            }));
        })
    }

    const checkSelected = skin => {
        return selectedSkins.some(obj => obj.skin_name === skin.skin_name && obj.weapon_name === skin.weapon_name);
    }

    function changeSkinChance(index, value) {
        console.log(index);
        setSelectedSkins(prevState => {
            const updatedSelectedSkins = [...prevState];
            console.log(index);
            updatedSelectedSkins[index] = {
                ...updatedSelectedSkins[index],
                chance: value
            }
            return updatedSelectedSkins;
        })
    }

    function generateSQL() {
        let currentRange = 1;
        const drawSkins = [...selectedSkins];
        drawSkins.sort((a, b) => a['skin_median_price'] - b['skin_median_price']);
        let sql = 'INSERT INTO collections_items (collection_id, skin_id, collection_item_range_from, collection_item_range_to) VALUES (';
        for(let i of drawSkins) {
            sql += `(${collectionId}, ${i['skin_id']}, ${currentRange}, ${currentRange+i['chance']-1}),`;
            currentRange += i['chance'];
        }
        sql = sql.slice(0, -1) + ');'
        console.log(sql);
    }

    console.log(selectedSkins);

    function changeFilter(e) {
        setFilters(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    useEffect(() => {
        axios.get(`${API_URL}/admin/allskins?search=${filters.search}&order=${filters.order}&ordertype=${filters.orderType}`)
            .then(res => {
                setSkins(res.data);
            })
            .catch(err => {
                console.error(err);
            });
    }, [filters]);

    return (
        <div className={'admin'}>
            <main>
                <Helmet>
                    <title>GOdrop - Admin</title>
                    <meta name="description" content="My page description" />
                </Helmet>
                <div className={'admin-wrapper container content'}>
                    <Link className={'go-back-link'} to={'/'}><FontAwesomeIcon icon={faAngleLeft} /> Go back</Link>
                    <h1 className={'page-header'}><FontAwesomeIcon icon={faScrewdriverWrench} /> Admin</h1>
                    <div className="selected-skins">
                        <h2>Selected skins:</h2>
                        <p>{selectedSkins.reduce((total, obj) => total + obj.chance, 0)}/100000</p>
                        <p>Price: {selectedSkins.reduce((total, obj) => total + obj.chance * obj.skin_median_price, 0) / selectedSkins.reduce((total, obj) => total + obj.chance, 0)}</p>
                        <button style={{background: 'blue'}} onClick={sortSelectedSkins}>Sort by price</button><br/>
                        <button style={{background: 'blue'}} onClick={evenChances}>Even chances</button><br/>
                        <input type={'number'} value={collectionId} onChange={(e) => setCollectionId(parseInt(e.target.value))}/>
                        <button style={{background: 'blue'}} onClick={generateSQL}>Generate SQL</button>
                        <div className="skins-list">
                            {selectedSkins && selectedSkins.map((skin, index) => (
                                <div className={`skin rarity-background ${skin.rarity_code}`}
                                     key={index}>
                                    <div className="skin-cover"></div>
                                    <div className="skin-data">
                                        <div className="skin-weapon">{skin.weapon_name}</div>
                                        <div className="skin-name">{skin.skin_name}</div>
                                        <div className="skin-image">
                                            <img src={skin.skin_img}/>
                                        </div>
                                        <div className="skin-median-price">{formatPrice(skin.skin_median_price)}</div>
                                        <input className={'chance-input'} type={'number'} onChange={(e) => changeSkinChance(index, parseInt(e.target.value))} value={skin.chance}/>
                                        <div style={{marginTop: '8px'}} onClick={() => removeSelectedItem(index)}>X</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="skins-select">
                        <h2>Select skins:</h2>
                        <select name={'orderType'} onChange={changeFilter}>
                            <option value={'DESC'}>DESC</option>
                            <option value={'ASC'}>ASC</option>
                        </select>
                        <select name={'order'} onChange={changeFilter}>
                            <option value={'rarities.rarity_id'}>Rarity</option>
                            <option value={'skins.skin_median_price'}>Median Price</option>
                        </select>
                        <input type={'text'} name={'search'} onChange={changeFilter} value={filters['search']}/>
                        <div className="skins-list">
                            {skins && skins.map((skin) => (
                                <div className={`skin rarity-background ${skin.rarity_code} ${checkSelected(skin) && 'selected'}`}
                                     key={skin.skin_id}
                                     onClick={() => addSelectedSkin(skin)}>
                                    <div className="skin-cover"></div>
                                    <div className="skin-data">
                                        <div className="skin-weapon">{skin.weapon_name}</div>
                                        <div className="skin-name">{skin.skin_name}</div>
                                        <div className="skin-image">
                                            <img src={skin.skin_img}/>
                                        </div>
                                        <div className="skin-median-price">{formatPrice(skin.skin_median_price)}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Admin;