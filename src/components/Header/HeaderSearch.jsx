import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import '../../styles/components/Header/HeaderSearch.scss';

function HeaderSearch(props) {
    return (
        <div className="header-search">
            <input type="text" placeholder="Search"/>
            <button className="search-button">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
            <div className="suggestions">
                <div className="suggestion"></div>
            </div>
        </div>
    );
}

export default HeaderSearch;