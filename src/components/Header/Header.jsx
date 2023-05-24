import './header.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faShieldHalved,
    faBarcode,
    faKhanda,
    faCircleNotch,
    faCopy,
    faSuitcase,
    faGift, faGun
} from '@fortawesome/free-solid-svg-icons'

function Header() {
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
                        </ul>
                    </div>
                </div>
                <div className='header-main'>
                    <div className='header-main-wrapper container'>
                        <Link to={`/`}>
                            <img className='logo' src={'./logo/logo.png'} alt='godrop logo'/>
                        </Link>
                    </div>
                    <div className='header-games container'>
                        <div className="header-game">
                            <FontAwesomeIcon icon={faKhanda}  /> Collections
                        </div>
                        <div className="separator"></div>
                        <div className="header-game">
                            <FontAwesomeIcon icon={faCircleNotch}  /> Upgrader
                        </div>
                        <div className="separator"></div>
                        <div className="header-game">
                            <FontAwesomeIcon icon={faCopy}  /> Scratch Cards
                        </div>
                        <div className="separator"></div>
                        <div className="header-game">
                            <FontAwesomeIcon icon={faSuitcase}  /> Daily Free
                        </div>
                        <div className="separator"></div>
                        <div className="header-game">
                            <FontAwesomeIcon icon={faGift}  /> Giveaways
                        </div>
                        <div className="separator"></div>
                        <div className="header-game">
                            <FontAwesomeIcon icon={faGun}  /> GOdrop Pass
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;