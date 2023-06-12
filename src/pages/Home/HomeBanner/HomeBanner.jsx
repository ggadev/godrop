import React from 'react';
import '../../../styles/pages/Home/HomeBanner/HomeBanner.scss';
import HomeBannerPossibleItem from "./HomeBannerPossibleItem.jsx";
import {formatPrice} from "../../../utils/priceUtils.js";

function HomeBanner() {
    return (
        <section className={'home-banner'}>
            <div className="cover"></div>
            <div className="separator"></div>
            <div className="container home-banner-content content">
                <div className="card-container">
                    <div className="card"><img src="/howling-fury-card.jpg" alt="howling fury"/></div>
                    <div className="card"><img src="/ancient-predator-card.jpg" alt="ancient predator"/></div>
                    <div className="card"><img src="/howling-fury-card.jpg" alt="howling fury"/></div>
                </div>
                <div className="details">
                    <div className="title">Latest Arrival</div>
                    <div className="name">Howling Fury</div>
                    <div className="possible-items">
                        <div className="possible-items-container">
                            <HomeBannerPossibleItem item={{rarity: 'rare', img: 'https://data.gadev.pl/godrop/img/butterfly-knife/butterfly-knife-tiger-tooth-icon.png', weapon: 'Butterfly Knife', skin: 'Tiger Tooth'}}></HomeBannerPossibleItem>
                            <HomeBannerPossibleItem item={{rarity: 'consumer-grade', img: 'https://data.gadev.pl/godrop/img/butterfly-knife/butterfly-knife-tiger-tooth-icon.png', weapon: 'Butterfly Knife', skin: 'Tiger Tooth'}}></HomeBannerPossibleItem>
                            <HomeBannerPossibleItem item={{rarity: 'rare', img: 'https://data.gadev.pl/godrop/img/butterfly-knife/butterfly-knife-tiger-tooth-icon.png', weapon: 'Butterfly Knife', skin: 'Tiger Tooth'}}></HomeBannerPossibleItem>
                            <HomeBannerPossibleItem item={{rarity: 'mil-spec', img: 'https://data.gadev.pl/godrop/img/butterfly-knife/butterfly-knife-tiger-tooth-icon.png', weapon: 'Butterfly Knife', skin: 'Tiger Tooth'}}></HomeBannerPossibleItem>
                            <HomeBannerPossibleItem item={{rarity: 'covert', img: 'https://data.gadev.pl/godrop/img/butterfly-knife/butterfly-knife-tiger-tooth-icon.png', weapon: 'Butterfly Knife', skin: 'Tiger Tooth'}}></HomeBannerPossibleItem>
                            <HomeBannerPossibleItem item={{rarity: 'rare', img: 'https://data.gadev.pl/godrop/img/butterfly-knife/butterfly-knife-tiger-tooth-icon.png', weapon: 'Butterfly Knife', skin: 'Tiger Tooth'}}></HomeBannerPossibleItem>
                            <HomeBannerPossibleItem item={{rarity: 'rare', img: 'https://data.gadev.pl/godrop/img/butterfly-knife/butterfly-knife-tiger-tooth-icon.png', weapon: 'Butterfly Knife', skin: 'Tiger Tooth'}}></HomeBannerPossibleItem>
                            <HomeBannerPossibleItem item={{rarity: 'consumer-grade', img: 'https://data.gadev.pl/godrop/img/butterfly-knife/butterfly-knife-tiger-tooth-icon.png', weapon: 'Butterfly Knife', skin: 'Tiger Tooth'}}></HomeBannerPossibleItem>
                            <HomeBannerPossibleItem item={{rarity: 'rare', img: 'https://data.gadev.pl/godrop/img/butterfly-knife/butterfly-knife-tiger-tooth-icon.png', weapon: 'Butterfly Knife', skin: 'Tiger Tooth'}}></HomeBannerPossibleItem>
                            <HomeBannerPossibleItem item={{rarity: 'mil-spec', img: 'https://data.gadev.pl/godrop/img/butterfly-knife/butterfly-knife-tiger-tooth-icon.png', weapon: 'Butterfly Knife', skin: 'Tiger Tooth'}}></HomeBannerPossibleItem>
                            <HomeBannerPossibleItem item={{rarity: 'covert', img: 'https://data.gadev.pl/godrop/img/butterfly-knife/butterfly-knife-tiger-tooth-icon.png', weapon: 'Butterfly Knife', skin: 'Tiger Tooth'}}></HomeBannerPossibleItem>
                            <HomeBannerPossibleItem item={{rarity: 'rare', img: 'https://data.gadev.pl/godrop/img/butterfly-knife/butterfly-knife-tiger-tooth-icon.png', weapon: 'Butterfly Knife', skin: 'Tiger Tooth'}}></HomeBannerPossibleItem>
                        </div>
                    </div>
                    <div className="col-price">
                        <div className="col-price-container">
                            <span className="price">{formatPrice(40)}</span>
                            <div className="show">
                                Open Now
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeBanner;