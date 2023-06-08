import '../../styles/components/Header/Header.scss';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faShieldHalved,
    faBarcode,
    faKhanda,
    faCircleNotch,
    faCopy,
    faSuitcase,
    faGift, faGun, faDatabase, faBoxesStacked, faCaretDown, faMagnifyingGlass, faGear
} from '@fortawesome/free-solid-svg-icons'
import {formatPrice} from "../../utils/priceUtils.js";
import SignModal from "../../modals/SignModal/SignModal.jsx";
import {useState} from "react";

function Header() {
    const [showSignModal, setShowSignModal] = useState(false);
    const location = useLocation();

    function toggleShowSignModal() {
        setShowSignModal(prevState => !prevState);
    }

    const isActive = (path) => location.pathname === path ? 'active' : '';

    return (
        <>
            <div className="header-filler"></div>
            <header>
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
                                <Link to={`#signin`} title={'Settings'} onClick={toggleShowSignModal}>
                                    <FontAwesomeIcon icon={faGear} />
                                </Link>
                                {showSignModal && <SignModal toggleModal={toggleShowSignModal}></SignModal>}
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
                            <div className="wallet">
                                <div className="col">
                                    <div className="row wallet-text">Your wallet</div>
                                    <div className="row wallet-balance">💸 {formatPrice(130.72)}</div>
                                </div>
                                <div className="col">
                                    <Link to={'/'} className={'refil-link'}>Refill</Link>
                                </div>
                            </div>
                            <div className="inventory">
                                <FontAwesomeIcon icon={faBoxesStacked}  />
                            </div>
                            <div className="account">
                                <div className="avatar">
                                    <img src={'/testavatar.webp'}/>
                                </div>
                                <div className="actions">
                                    <FontAwesomeIcon icon={faCaretDown}  />
                                </div>
                            </div>
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