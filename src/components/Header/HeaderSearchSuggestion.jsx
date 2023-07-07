import React from 'react';

function HeaderSearchSuggestion({element}) {

    return (
        <div className={'suggestion'}>
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
        </div>
    );
}

export default HeaderSearchSuggestion;