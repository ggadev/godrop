import React, {useContext, useEffect, useRef, useState} from 'react';
import {formatPrice} from "../../utils/priceUtils.js";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBarcode,
    faBoxesStacked,
    faCaretDown,
    faCreditCard, faReceipt,
    faRightFromBracket, faShield, faShieldHalved,
    faUser
} from "@fortawesome/free-solid-svg-icons";
import '../../styles/components/Header/HeaderAccount.scss';
import {AuthContext, AuthProvider} from "../../contexts/AuthContext.jsx";
import ModalsContext from "../../contexts/ModalsContext.jsx";
import PromoCodeModal from "../../modals/PromoCodeModal.jsx";

function HeaderAccount() {
    const { user, logout } = useContext(AuthContext);
    const prevBalance = useRef(user['user_balance']);
    const balanceEl = useRef(null);
    const balance = user['user_balance'];

    const { displayModal } = useContext(ModalsContext);

    const [showActions, setShowActions] = useState(false)

    function toggleShowActions() {
        setShowActions(prevState => !prevState);
    }

    useEffect(() => {
        const animColor = balance > prevBalance.current ? '#43ea80' : '#ff4444';
        const initialColor = getComputedStyle(balanceEl.current).color;
        balanceEl.current.animate(
            {
                color: [animColor, initialColor],
            },
            {
                duration: 1000,
            }
        );

        prevBalance.current = balance;
    }, [balance]);

    return (
        <>
            <div className="wallet">
                <div className="col">
                    <div className="row wallet-text">Your wallet</div>
                    <div className="row wallet-balance" ref={balanceEl}>💸 {formatPrice(balance)}</div>
                </div>
                <div className="col">
                    <div className={'refil-link'} onClick={() => displayModal(<PromoCodeModal></PromoCodeModal>)}>Refill</div>
                </div>
            </div>
            <div className="inventory">
                <FontAwesomeIcon icon={faBoxesStacked}  />
            </div>
            <div className="account">
                <Link to={'/account'} className="avatar">
                    <img src={user['user_avatar'].toString()}/>
                </Link>
                <div className={`actions-cover ${!showActions && 'inactive'}`} onClick={toggleShowActions}></div>
                <div className="actions">
                    <FontAwesomeIcon icon={faCaretDown} className={`${showActions && 'active'}`} onClick={toggleShowActions}/>
                    <div className={`actions-container ${showActions && 'active'}`} onClick={toggleShowActions}>
                        <div className="actions-header">
                            <div className="col">
                                <img src={user['user_avatar'].toString()}/>
                            </div>
                            <div className="col">
                                <p className={'username'}>
                                    {user['user_name']}
                                </p>
                                <p className={'balance'}>
                                    Wallet: <span>{formatPrice(user['user_balance'])}</span>
                                </p>
                            </div>
                        </div>
                        <div className="actions-list">
                            <Link to={'/account'} className="action">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faUser} />
                                </div>
                                <div className="name">
                                    My Account
                                </div>
                            </Link>
                            <div className="action" onClick={() => displayModal(<PromoCodeModal></PromoCodeModal>)}>
                                <div className="icon">
                                    <FontAwesomeIcon icon={faCreditCard} />
                                </div>
                                <div className="name">
                                    Refill Balance
                                </div>
                            </div>
                            <div className="action" onClick={() => displayModal(<PromoCodeModal></PromoCodeModal>)}>
                                <div className="icon">
                                    <FontAwesomeIcon icon={faBarcode} />
                                </div>
                                <div className="name">
                                    Promo Code
                                </div>
                            </div>
                            {/*<div className="action">*/}
                            {/*    <div className="icon">*/}
                            {/*        <FontAwesomeIcon icon={faReceipt} />*/}
                            {/*    </div>*/}
                            {/*    <div className="name">*/}
                            {/*        Transactions*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            <Link to={'/provably-fair'} className="action">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faShieldHalved} />
                                </div>
                                <div className="name">
                                    Provably Fair
                                </div>
                            </Link>
                        </div>
                        <div className="actions-list">
                            <div className="action" onClick={logout}>
                                <div className="icon">
                                    <FontAwesomeIcon icon={faRightFromBracket} />
                                </div>
                                <div className="name">
                                    Logout
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeaderAccount;