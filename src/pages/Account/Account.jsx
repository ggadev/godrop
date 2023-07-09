import {
    faAngleLeft,
    faCircleNotch,
    faCopy, faGift,
    faRankingStar,
    faSuitcase,
    faUnlock
} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import '../../styles/pages/Account/Account.scss';
import {Helmet} from "react-helmet";
import UnderConstruction from "../../components/UnderConstruction/UnderConstruction.jsx";
import {formatPrice} from "../../utils/priceUtils.js";

function Account() {
    return (
        <div className={'account-page'}>
            <main>
                <Helmet>
                    <title>GOdrop - Account</title>
                    <meta name="description" content="My page description" />
                </Helmet>
                <div className={'account-wrapper container content'}>
                    <Link className={'go-back-link'} to={'/'}><FontAwesomeIcon icon={faAngleLeft} /> Go back</Link>
                    <div className="account-header">
                        <div className="account-header-block account-block">
                            <div className="block-desc">
                                Details
                            </div>
                            <img className={'account-avatar'} src={'https://data.gadev.pl/godrop/img/avatars/2.jpg'}/>
                            <div className="details">
                                <div className="username">Gadziu</div>
                                <div className="level">
                                    <div className="level-values">
                                        <span className="level-value">
                                            Level 2
                                        </span>
                                        <span className="exp-value">
                                            432/1200
                                        </span>
                                    </div>
                                    <div className="level-stripes">
                                        <div className="level-stripe-dark"></div>
                                        <div className="level-stripe"></div>
                                    </div>
                                </div>
                                <div className="balance">
                                    Balance:
                                    <span className={'balance-value'}>{formatPrice(2541.28)}</span>
                                </div>
                            </div>
                        </div>
                        <div className="account-header-block stats-block">
                            <div className="cover rarity-border-left-20 covert"></div>
                            <div className="block-desc">
                                Statistics
                            </div>
                            <div className="member-since">
                                Member since January 3, 2023 (a month ago)
                            </div>
                            <div className="stats-list">
                                <div className="stat">
                                    <div className="stat-icon">
                                        <FontAwesomeIcon icon={faRankingStar} style={{color: '#EAB043'}} />
                                    </div>
                                    <div className="stat-name">
                                        Rank Position
                                    </div>
                                    <div className="stat-value">
                                        2nd
                                    </div>
                                </div>
                                <div className="stat">
                                    <div className="stat-icon">
                                        <FontAwesomeIcon icon={faUnlock} />
                                    </div>
                                    <div className="stat-name">
                                        Cases Opened
                                    </div>
                                    <div className="stat-value">
                                        1232
                                    </div>
                                </div>
                                <div className="stat">
                                    <div className="stat-icon">
                                        <FontAwesomeIcon icon={faCircleNotch} style={{color: '#43dcea'}} />
                                    </div>
                                    <div className="stat-name">
                                        Upgrades Made
                                    </div>
                                    <div className="stat-value">
                                        0
                                    </div>
                                </div>
                                <div className="stat">
                                    <div className="stat-icon">
                                        <FontAwesomeIcon icon={faGift} style={{color: '#EAB043'}} />
                                    </div>
                                    <div className="stat-name">
                                        Giveaways Won
                                    </div>
                                    <div className="stat-value">
                                        0
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="account-header-block best-block">
                            <div className="cover rarity-border-left-20 covert"></div>
                            <div className="block-desc">
                                All Time Best
                            </div>
                            <div className="skin-img">
                                <div className="rarity-stripe rarity-background covert"></div>
                                <img className={'skin-img'} src={'https://data.gadev.pl/godrop/img/ak-47/ak-47-nightwish-icon.png'}/>
                            </div>
                            <div className="details">
                                <div className="weapon">Ak-47</div>
                                <div className="skin">Nightwish</div>
                                <div className="wear">Well-Worn</div>
                                <div className="price">{formatPrice(85.45)}</div>
                                <div className="date">2 months ago</div>
                            </div>
                        </div>
                    </div>
                    <div className="account-inventory">
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Account;