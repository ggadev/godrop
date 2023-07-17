import React from 'react';
import {Helmet} from "react-helmet";
import HomeBanner from "./HomeBanner/HomeBanner.jsx";
import HomeCollections from "./HomeCollections.jsx";
import StatsSection from "../../components/StatsSection.jsx";
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
                <StatsSection/>
                <HomePopularCollections/>
            </main>
        </>
    );
}

export default Home;