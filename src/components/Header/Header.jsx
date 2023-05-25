import '../../styles/components/Header/header.scss';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faShieldHalved,
    faBarcode,
    faKhanda,
    faCircleNotch,
    faCopy,
    faSuitcase,
    faGift, faGun, faDatabase, faBoxesStacked
} from '@fortawesome/free-solid-svg-icons'

function Header() {
    const location = useLocation();

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
                                <Link to={`/provably-fair`}>
                                    <FontAwesomeIcon icon={faBarcode}  />
                                    Promo Code
                                </Link>
                            </li>
                            <li>
                                <Link to={`/skinbase`}>
                                    <FontAwesomeIcon icon={faDatabase} />
                                    SkinBase
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='header-main'>
                    <div className='header-main-wrapper container'>
                        <div className="header-left">
                            <Link to={`/`}>
                                <img className='logo' src={'./logo/logo.png'} alt='godrop logo'/>
                            </Link>
                        </div>
                        <div className="header-right">
                            <div className="wallet">
                                <div className="col">
                                    <div className="row wallet-text">Your wallet</div>
                                    <div className="row wallet-balance">💸 130.72 USD</div>
                                </div>
                                <div className="col">
                                    <Link to={'/'} className={'refil-link'}>Refill</Link>
                                </div>
                            </div>
                            <div className="inventory">
                                <FontAwesomeIcon icon={faBoxesStacked}  />
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