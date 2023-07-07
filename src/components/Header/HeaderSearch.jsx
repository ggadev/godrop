import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import '../../styles/components/Header/HeaderSearch.scss';
import axios from "axios";
import {API_URL} from "../../data/variables.js";
import HeaderSearchSuggestion from "./HeaderSearchSuggestion.jsx";

function HeaderSearch() {
    const [searchSuggestions, setSearchSuggestions] = useState(null);

    let searchTimer = null;
    function search(e) {
        clearTimeout(searchTimer);
        if(e.target.value.length < 3) {
            setSearchSuggestions(null);
            return;
        }
        const inputValue = e.target.value;
        searchTimer = setTimeout(() => {
            axios.get(`${API_URL}/search?query=${inputValue}`)
                .then(res => {
                    setSearchSuggestions(res.data);
                })
                .catch(err => {
                    console.error(err);
                });
        }, 300);
    }

    return (
        <div className="header-search">
            <input type="text" placeholder="Search" onChange={search}/>
            <button className="search-button">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
            {
                searchSuggestions &&
                <div className="suggestions">
                    <div className="suggestions-list">
                        { searchSuggestions.map(((el, index) =>
                                <HeaderSearchSuggestion key={index} element={el}/>
                        ))}
                    </div>
                </div>
            }
        </div>
    );
}

export default HeaderSearch;