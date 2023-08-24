import React from 'react';
import {Link} from "react-router-dom";

function HeaderSearchSuggestion({element}) {

    return (
        <Link to={element['link']} className={'suggestion'}>
            <div className="image">
                <img src={element['image']}/>
            </div>
            <div className="detail">
                <div className="type">
                    {element['type']}
                </div>
                <div className="name">
                    {element['name']}
                </div>
            </div>
        </Link>
    );
}

export default HeaderSearchSuggestion;