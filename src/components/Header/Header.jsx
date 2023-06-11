import '../../styles/components/Header/Header.scss';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faShieldHalved,
    faKhanda,
    faCircleNotch,
    faCopy,
    faSuitcase,
    faGift, faGun, faDatabase, faBoxesStacked, faCaretDown, faMagnifyingGlass, faGear, faUser, faRightToBracket
} from '@fortawesome/free-solid-svg-icons'
import {formatPrice} from "../../utils/priceUtils.js";
import SignModal from "../../modals/SignModal/SignModal.jsx";
import {useEffect, useState} from "react";
import SettingsModal from "../../modals/SettingsModal/SettingsModal.jsx";

function Header() {
    const [showSignModal, setShowSignModal] = useState(
        window.location.hash.includes('login') || window.location.hash.includes('signup')
    );
    const [showSettingsModal, setShowSettingsModal] = useState(
        window.location.hash.includes('settings')
    );
    const location = useLocation();

    function toggleShowSignModal() {
        if(showSignModal)
            window.location.hash = '';
        setShowSignModal(prevState => !prevState);
    }
    function toggleShowSettingsModal() {
        if(showSettingsModal)
            window.location.hash = '';
        setShowSettingsModal(prevState => !prevState);
    }

    const [scrollPosition, setScrollPosition] = useState(0);
    useEffect(() => {
        function handleScroll() {
            const position = window.scrollY > 44 ? 44 : window.scrollY;
            setScrollPosition(position);
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const isActive = (path) => location.pathname === path ? 'active' : '';

    return (
        <>
            {showSignModal && <SignModal toggleModal={toggleShowSignModal}></SignModal>}
            {showSettingsModal && <SettingsModal toggleModal={toggleShowSettingsModal}></SettingsModal>}
            <div className="header-filler"></div>
            <header style={{ marginTop: `${scrollPosition*-1}px` }}>
                <div className='header-top'>
                    <div className='header-top-wrapper container'>
                        <ul>
                            <li>
                                <Link to={`/provably-fair`}>
                                    <FontAwesomeIcon icon={faShieldHalved} />
                                    Provably Fair
                                </Link>
                            </li>
                            <li>
                                <Link to={`/skinbase`}>
                                    <FontAwesomeIcon icon={faDatabase} />
                                    SkinBase
                                </Link>
                            </li>
                            <li>
                                <Link to={`#settings`} title={'Settings'} onClick={toggleShowSettingsModal}>
                                    <FontAwesomeIcon icon={faGear} />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='header-main'>
                    <div className='header-main-wrapper container'>
                        <div className="header-left">
                            <Link to={`/`}>
                                <img className='logo' src={'/logo/logo.png'} alt='godrop logo'/>
                            </Link>
                            <div className="search">
                                <input type="text" placeholder="Search"/>
                                <button className="search-button">
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </button>
                            </div>
                        </div>
                        <div className="header-right">
                            <Link to={`#login`} className="login-button" onClick={toggleShowSignModal}>
                                <FontAwesomeIcon icon={faUser} /> Login
                            </Link>
                            <Link to={`#signup`} className="sign-up-button" onClick={toggleShowSignModal}>
                                <FontAwesomeIcon icon={faRightToBracket} /> Sign Up
                            </Link>
                        </div>
                    </div>
                    <div className='header-games container'>
                        <Link to={'/collections'}
                              className={`header-game game-collections ${isActive('/collections')}`}>
                            <FontAwesomeIcon icon={faKhanda}  /> Collections
                        </Link>
                        <div className="separator"></div>
                        <Link to={'/upgrader'}
                              className={`header-game game-upgrader ${isActive('/upgrader')}`}>
                            <FontAwesomeIcon icon={faCircleNotch}  /> Upgrader
                        </Link>
                        <div className="separator"></div>
                        <Link to={'/scratch-cards'}
                              className={`header-game game-scratch-cards ${isActive('/scratch-cards')}`}>
                            <FontAwesomeIcon icon={faCopy}  /> Scratch Cards
                        </Link>
                        <div className="separator"></div>
                        <Link to={'/lucky-shot'}
                              className={`header-game game-lucky-shot ${isActive('/lucky-shot')}`}>
                            <FontAwesomeIcon icon={faGun}  /> Lucky Shot
                        </Link>
                        <div className="separator"></div>
                        <Link to={'/daily-free'}
                              className={`header-game game-daily-free ${isActive('/daily-free')}`}>
                            <FontAwesomeIcon icon={faSuitcase}  /> Daily Free
                        </Link>
                        <div className="separator"></div>
                        <Link to={'/giveaways'}
                              className={`header-game game-giveaways ${isActive('/giveaways')}`}>
                            <FontAwesomeIcon icon={faGift}  /> Giveaways
                        </Link>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;