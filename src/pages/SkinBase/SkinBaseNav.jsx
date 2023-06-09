import {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import '../../styles/pages/SkinBase/SkinBaseNav.scss';
import axios from 'axios';
import {API_URL} from "../../data/variables.js";

function SkinBaseNav() {
    const [weaponTypes, setWeaponTypes] = useState(null);
    const [activeLink, setActiveLink] = useState(null);

    const handleLinkClick = (submenuId) => {
        setActiveLink((activeLink) => (activeLink === submenuId ? null : submenuId));
    };

    useEffect(() => {
        axios.get(`${API_URL}/skinbase/weapons`)
            .then(res => {
                setWeaponTypes(res.data);
            })
            .catch(err => {
                console.error(err);
            });
    }, []);

    if(!weaponTypes) {
        return (
            <ul className="skinbase-nav">
                <li className="item">
                    <div className="link">
                        Loading...
                    </div>
                </li>
            </ul>
        )
    }


    return (
        <ul className="skinbase-nav">
            {weaponTypes.map((weaponType) => (
                <li className="item" key={weaponType.weapon_type_id}>
                    <div className="link" onClick={() => handleLinkClick(weaponType.weapon_type_name_plural)}>
                        {weaponType.weapon_type_name_plural}
                    </div>
                    <div className={`nav-submenu ${activeLink === weaponType.weapon_type_name_plural ? 'active' : ''} ${weaponType.weapon_type_name_plural}`}>
                        {weaponType.weapons.map((weapon) => (
                            <Link to={`/skinbase/weapon/${weapon.weapon_url}`} className="submenu-link" key={weapon.weapon_id}>
                                <div className={'weapon-data'}>
                                    <img src={weapon.weapon_icon}/>
                                    <span>{weapon.weapon_name}</span>
                                </div>
                                <div className={'weapon-skin-count'}>
                                    <span>({weapon.skin_count})</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default SkinBaseNav;