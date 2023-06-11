import React from 'react';
import {formatPrice} from "../../utils/priceUtils.js";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBoxesStacked, faCaretDown} from "@fortawesome/free-solid-svg-icons";

function HeaderAccount(props) {
    return (
        <>
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
        </>
    );
}

export default HeaderAccount;