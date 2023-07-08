import React from 'react';
import {Helmet} from "react-helmet";
import HomeBanner from "./HomeBanner/HomeBanner.jsx";
import HomeCollections from "./HomeCollections.jsx";
import HomeStats from "./HomeStats.jsx";
import HomeBestDrops from "./HomeBestDrops.jsx";
import HomePopularCollections from "./HomePopularCollections.jsx";

function Home() {
    return (
        <>
            <Helmet>
                <title>GOdrop - CS:GO Case Opening Simulator</title>
                <meta name="description" content="My page description" />
            </Helmet>
            <main>
                <HomeBanner/>
                <HomeCollections/>
                <HomeBestDrops/>
                <HomeStats/>
                <HomePopularCollections/>
            </main>
        </>
    );
}

export default Home;