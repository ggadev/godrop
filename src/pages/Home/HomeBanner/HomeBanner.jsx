import {useContext, useEffect, useState} from 'react';
import '../../../styles/pages/Home/HomeBanner/HomeBanner.scss';
import HomeBannerPossibleItem from "./HomeBannerPossibleItem.jsx";
import {formatPrice} from "../../../utils/priceUtils.js";
import useScrollPosition from "../../../hooks/useScrollPosition.jsx";
import ModalsContext from "../../../contexts/ModalsContext.jsx";
import SettingsModal from "../../../modals/SettingsModal/SettingsModal.jsx";
import SignModal from "../../../modals/SignModal/SignModal.jsx";

function HomeBanner() {
    const scrollY = useScrollPosition();

    const { displayModal } = useContext(ModalsContext);

    return (
        <section className={'home-banner'}>
            <div className={'background'}>
                <img src="/howling-fury-background.jpg" alt="howling" style={{ transform: `translateY(${scrollY * 0.5}px)` }}/>
            </div>
            <div className="cover"></div>
            <div className="separator"></div>
            <div className="container home-banner-content content">
                <div className="card-container">
                    <div className="card"><img src="/howling-fury-card.jpg" alt="howling fury"/></div>
                    <div className="card"><img src="/ancient-predator-card.jpg" alt="ancient predator"/></div>
                    <div className="card"><img src="/howling-fury-card.jpg" alt="howling fury"/></div>
                </div>
                <div className="details">
                    <div className="title" onClick={() => displayModal('modal')}>Latest Arrival</div>
                    <div className="name">Howling Fury</div>
                    <div className="possible-items">
                        <div className="possible-items-container">
                            <HomeBannerPossibleItem item={{rarity: 'contraband', img: 'https://data.gadev.pl/godrop/img/m4a4/m4a4-howl-icon.png', weapon: 'M4A4', skin: 'Howl'}}></HomeBannerPossibleItem>
                            <HomeBannerPossibleItem item={{rarity: 'rare', img: 'https://data.gadev.pl/godrop/img/butterfly-knife/butterfly-knife-fade-icon.png', weapon: 'Butterfly Knife', skin: 'Fade'}}></HomeBannerPossibleItem>
                            <HomeBannerPossibleItem item={{rarity: 'covert', img: 'https://data.gadev.pl/godrop/img/awp/awp-dragon-lore-icon.png', weapon: 'AWP', skin: 'Dragon Lore'}}></HomeBannerPossibleItem>
                            <HomeBannerPossibleItem item={{rarity: 'covert', img: 'https://data.gadev.pl/godrop/img/ak-47/ak-47-wild-lotus-icon.png', weapon: 'AK-47', skin: 'Wild Lotus'}}></HomeBannerPossibleItem>
                            <HomeBannerPossibleItem item={{rarity: 'covert', img: 'https://data.gadev.pl/godrop/img/m4a1-s/m4a1-s-welcome-to-the-jungle-icon.png', weapon: 'M4A1-S', skin: 'Welcome...'}}></HomeBannerPossibleItem>
                            <HomeBannerPossibleItem item={{rarity: 'covert', img: 'https://data.gadev.pl/godrop/img/m4a1-s/m4a1-s-imminent-danger-icon.png', weapon: 'M4A1-S', skin: 'Imminent...'}}></HomeBannerPossibleItem>
                            <HomeBannerPossibleItem item={{rarity: 'covert', img: 'https://data.gadev.pl/godrop/img/ak-47/ak-47-nightwish-icon.png', weapon: 'AK-47', skin: 'Nightwish'}}></HomeBannerPossibleItem>
                            <HomeBannerPossibleItem item={{rarity: 'classified', img: 'https://data.gadev.pl/godrop/img/m4a1-s/m4a1-s-hot-rod-icon.png', weapon: 'M4A1-S', skin: 'Hot Rod'}}></HomeBannerPossibleItem>
                            <HomeBannerPossibleItem item={{rarity: 'classified', img: 'https://data.gadev.pl/godrop/img/ssg-08/ssg-08-death-strike-icon.png', weapon: 'SSG 08', skin: 'Death Strike'}}></HomeBannerPossibleItem>
                            <HomeBannerPossibleItem item={{rarity: 'classified', img: 'https://data.gadev.pl/godrop/img/desert-eagle/desert-eagle-fennec-fox-icon.png', weapon: 'Desert Eagle', skin: 'Fennec Fox'}}></HomeBannerPossibleItem>
                            <HomeBannerPossibleItem item={{rarity: 'classified', img: 'https://data.gadev.pl/godrop/img/usp-s/usp-s-orion-icon.png', weapon: 'USP-S', skin: 'Orion'}}></HomeBannerPossibleItem>
                            <HomeBannerPossibleItem item={{rarity: 'mil-spec', img: 'https://data.gadev.pl/godrop/img/m4a4/m4a4-magnesium-icon.png', weapon: 'M4A4', skin: 'Magnesium'}}></HomeBannerPossibleItem>
                            <HomeBannerPossibleItem item={{rarity: 'contraband', img: 'https://data.gadev.pl/godrop/img/m4a4/m4a4-howl-icon.png', weapon: 'M4A4', skin: 'Howl'}}></HomeBannerPossibleItem>
                            <HomeBannerPossibleItem item={{rarity: 'rare', img: 'https://data.gadev.pl/godrop/img/butterfly-knife/butterfly-knife-fade-icon.png', weapon: 'Butterfly Knife', skin: 'Fade'}}></HomeBannerPossibleItem>
                            <HomeBannerPossibleItem item={{rarity: 'covert', img: 'https://data.gadev.pl/godrop/img/awp/awp-dragon-lore-icon.png', weapon: 'AWP', skin: 'Dragon Lore'}}></HomeBannerPossibleItem>
                            <HomeBannerPossibleItem item={{rarity: 'covert', img: 'https://data.gadev.pl/godrop/img/ak-47/ak-47-wild-lotus-icon.png', weapon: 'AK-47', skin: 'Wild Lotus'}}></HomeBannerPossibleItem>
                            <HomeBannerPossibleItem item={{rarity: 'covert', img: 'https://data.gadev.pl/godrop/img/m4a1-s/m4a1-s-welcome-to-the-jungle-icon.png', weapon: 'M4A1-S', skin: 'Welcome...'}}></HomeBannerPossibleItem>
                            <HomeBannerPossibleItem item={{rarity: 'covert', img: 'https://data.gadev.pl/godrop/img/m4a1-s/m4a1-s-imminent-danger-icon.png', weapon: 'M4A1-S', skin: 'Imminent...'}}></HomeBannerPossibleItem>
                            <HomeBannerPossibleItem item={{rarity: 'covert', img: 'https://data.gadev.pl/godrop/img/ak-47/ak-47-nightwish-icon.png', weapon: 'AK-47', skin: 'Nightwish'}}></HomeBannerPossibleItem>
                            <HomeBannerPossibleItem item={{rarity: 'classified', img: 'https://data.gadev.pl/godrop/img/m4a1-s/m4a1-s-hot-rod-icon.png', weapon: 'M4A1-S', skin: 'Hot Rod'}}></HomeBannerPossibleItem>
                            <HomeBannerPossibleItem item={{rarity: 'classified', img: 'https://data.gadev.pl/godrop/img/ssg-08/ssg-08-death-strike-icon.png', weapon: 'SSG 08', skin: 'Death Strike'}}></HomeBannerPossibleItem>
                            <HomeBannerPossibleItem item={{rarity: 'classified', img: 'https://data.gadev.pl/godrop/img/desert-eagle/desert-eagle-fennec-fox-icon.png', weapon: 'Desert Eagle', skin: 'Fennec Fox'}}></HomeBannerPossibleItem>
                            <HomeBannerPossibleItem item={{rarity: 'classified', img: 'https://data.gadev.pl/godrop/img/usp-s/usp-s-orion-icon.png', weapon: 'USP-S', skin: 'Orion'}}></HomeBannerPossibleItem>
                            <HomeBannerPossibleItem item={{rarity: 'mil-spec', img: 'https://data.gadev.pl/godrop/img/m4a4/m4a4-magnesium-icon.png', weapon: 'M4A4', skin: 'Magnesium'}}></HomeBannerPossibleItem>
                        </div>
                    </div>
                    <div className="col-price">
                        <div className="col-price-container">
                            <span className="price">{formatPrice(29.90)}</span>
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