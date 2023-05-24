import React from 'react';
import {Helmet} from "react-helmet";

function Home() {
    return (
        <>
            <Helmet>
                <title>GOdrop - CS:GO Case Opening Simulator</title>
                <meta name="description" content="My page description" />
                {/* Other meta tags, link tags, etc. */}
            </Helmet>
        </>
    );
}

export default Home;