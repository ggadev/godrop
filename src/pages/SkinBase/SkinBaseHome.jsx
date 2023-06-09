import {useEffect, useMemo, useState} from 'react';
import '../../styles/pages/SkinBase/SkinBaseHome.scss';
import axios from "axios";
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faDatabase} from "@fortawesome/free-solid-svg-icons";
import {API_URL} from "../../data/variables.js";

function SkinBaseHome() {
    const [weaponTypes, setWeaponTypes] = useState(null);

    const skinCount = useMemo(() => getSkinCount(weaponTypes), [weaponTypes])

    function getSkinCount(weaponTypes) {
        if(!weaponTypes) return;
        let x = 0;
        for (const weaponType of weaponTypes) {
            for (const weapon of weaponType.weapons) {
                x += weapon.skin_count;
            }
        }
        return x;
    }

    useEffect(() => {
        axios.get(`${API_URL}/skinbase/weapons`)
            .then(res => {
                setWeaponTypes(res.data);
            })
            .catch(err => {
                console.error(err);
            });
    }, []);

    if(!weaponTypes) return;

    return (
        <div className={'skinbase'}>
            <main>
                <Helmet>
                    <title>SkinBase | GOdrop</title>
                    <meta name="description" content="My page description" />
                </Helmet>
                <div className={'container content'}>
                    <Link className={'go-back-link'} to={'/'}><FontAwesomeIcon icon={faAngleLeft} /> Go back</Link>
                    <h1 className={'page-header'}><FontAwesomeIcon icon={faDatabase} /> SkinBase</h1>

                    <div className={'skinbase-wrapper'}>
                        <div className={'skin-base-home'}>
                            <p>Browse through all <span>{skinCount}</span> CS:GO weapon skins</p>
                            {weaponTypes.map((weaponType) => (
                                <div className="weapon-category" key={weaponType.weapon_type_id}>
                                    <div className="weapon-category-header">
                                        <h3>{weaponType.weapon_type_name_plural}</h3>
                                        <div className="line"></div>
                                    </div>
                                    <div className="weapons-list">
                                        {weaponType.weapons.map((weapon) => (
                                            <Link to={`/skinbase/weapon/${weapon.weapon_url}`} key={weapon.weapon_id} className={'weapon'}>
                                                <span className={'weapon-name'}>{weapon.weapon_name}</span>
                                                <span className={'weapon-skins'}>{weapon.skin_count} skins</span>
                                                <img src={weapon.weapon_image}/>
                                            </Link>
                                        ))}
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

export default SkinBaseHome;