import {
    faAngleLeft, faBoxesStacked, faCheck, faChevronLeft, faChevronRight,
    faCircleNotch, faCode,
    faCopy, faGear, faGift, faHandHoldingDollar,
    faRankingStar, faReceipt,
    faSuitcase,
    faUnlock
} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link, NavLink, Outlet} from "react-router-dom";
import '../../styles/pages/Account/Account.scss';
import {Helmet} from "react-helmet";
import UnderConstruction from "../../components/UnderConstruction/UnderConstruction.jsx";
import {formatPrice} from "../../utils/priceUtils.js";
import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import {API_URL} from "../../data/variables.js";
import AuthContext from "../../contexts/AuthContext.jsx";
import {useAddNotification} from "../../contexts/NotificationContext.jsx";
import InventoryItem from "./InventoryItem.jsx";
import moment from "moment/moment.js";
import {calculateLevel} from "../../utils/levelUtils.js";

function Account() {
    const [userItems, setUserItems] = useState(null);
    const [userData, setUserData] = useState(null);
    const [filters, setFilters] = useState({
        page: 1
    })

    const addNotification = useAddNotification();

    const { getToken, updateBalance } = useContext(AuthContext);

    useEffect(() => {
        axios.get(`${API_URL}/account/stats`, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'x-access-token': getToken()
            }})
            .then(res => {
                console.log(res.data);
                setUserData(res.data);
                updateBalance(res.data.user.user_balance)
            })
            .catch(err => {
                console.error(err);
            });
    }, [])

    useEffect(() => {
        axios.get(`${API_URL}/account/items?page=${filters.page}`, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'x-access-token': getToken()
            }})
            .then(res => {
                setUserItems(res.data);
            })
            .catch(err => {
                console.error(err);
            });
    }, [getToken, filters])

    function changePage(x) {
        if(filters.page + x < 1 || filters.page + x > userItems[0]['pages']) return;
        setFilters(prevState => ({
            ...prevState,
            page: prevState.page + x
        }))
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    if(!userItems) return;
    if(!userData) return;

    const { level, currentExp, expEnd } = calculateLevel(userData.user.user_exp);

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
                            <img className={'account-avatar'} src={userData.user.user_avatar}/>
                            <div className="details">
                                <div className="username">{userData.user.user_name}</div>
                                <div className="level">
                                    <div className="level-values">
                                        <span className="level-value">
                                            Level {level}
                                        </span>
                                        <span className="exp-value">
                                            {currentExp}/{expEnd}
                                        </span>
                                    </div>
                                    <div className="level-stripes">
                                        <div className="level-stripe-dark"></div>
                                        <div className="level-stripe" style={{width: `${currentExp/expEnd*100}%`}}></div>
                                    </div>
                                </div>
                                <div className="balance">
                                    Balance:
                                    <span className={'balance-value'}>{formatPrice(userData.user.user_balance)}</span>
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
                                        -
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
                                        -
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
                                        -
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
                                        -
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="account-header-block best-block">
                            {
                                userData.best && <div>
                                    <div className={`cover rarity-border-left-20 ${userData.best.rarity_code}`}></div>
                                    <div className="block-desc">
                                        All Time Best
                                    </div>
                                    <div className="skin-img">
                                        <div className={`rarity-stripe rarity-background ${userData.best.rarity_code}`}></div>
                                        <img className={'skin-img'} src={userData.best.item_image}/>
                                    </div>
                                    <div className="details">
                                        <div className="weapon">{userData.best.weapon_name}</div>
                                        <div className="skin">{userData.best.skin_name}</div>
                                        <div className="wear">{userData.best.rarity_name}</div>
                                        <div className="price">{formatPrice(userData.best.item_price)}</div>
                                        <div className="date">{moment(userData.best.user_item_drop_date).fromNow()}</div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                    <section className={'provably-fair-options'}>
                        <div className="section-header">
                            <NavLink to={'/account'}
                                     className={`section-header-link`} end>
                                <FontAwesomeIcon icon={faBoxesStacked} /> Inventory
                            </NavLink>
                            {/*<NavLink to={'/account/transactions'}*/}
                            {/*         className={`section-header-link`}>*/}
                            {/*    <FontAwesomeIcon icon={faReceipt} /> Transactions*/}
                            {/*</NavLink>*/}
                            {/*<NavLink to={'/account/settings'}*/}
                            {/*         className={`section-header-link`}>*/}
                            {/*    <FontAwesomeIcon icon={faGear} /> Settings*/}
                            {/*</NavLink>*/}
                        </div>
                        <Outlet></Outlet>
                    </section>
                    <div className="account-inventory">
                        <div className="account-inventory-list">
                            {
                                userItems.map(item => (<InventoryItem item={item} key={item['user_item_id']}/>))
                            }
                        </div>
                        {
                            userItems[0] &&
                            <div className="inventory-paging">
                                <button onClick={() => changePage(-1)} className={filters.page - 1 < 1 && 'disabled'}><FontAwesomeIcon icon={faChevronLeft} /></button>
                                <div className={'page-amount'}>{filters.page} / {userItems[0]['pages']}</div>
                                <button onClick={() => changePage(1)} className={filters.page + 1 > userItems[0]['pages'] && 'disabled'}><FontAwesomeIcon icon={faChevronRight} /></button>
                            </div>
                        }
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Account;