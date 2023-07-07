import {faAngleLeft, faCopy, faSuitcase} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import '../../styles/pages/Account/Account.scss';
import {Helmet} from "react-helmet";
import UnderConstruction from "../../components/UnderConstruction/UnderConstruction.jsx";

function Account() {
    return (
        <div className={'account-page'}>
            <main>
                <Helmet>
                    <title>GOdrop - Daily Free</title>
                    <meta name="description" content="My page description" />
                </Helmet>
                <div className={'account-wrapper container content'}>
                    <Link className={'go-back-link'} to={'/'}><FontAwesomeIcon icon={faAngleLeft} /> Go back</Link>
                    <div className="account-header">
                        <div className="account-header-block account-block">
                            <img className={'account-avatar'} src={'https://data.gadev.pl/godrop/img/avatars/2.jpg'}/>
                            <div className="details">
                                <div className="username">Gadziu</div>
                                <div className="level-value">Level 1</div>
                                <div className="level-stripes">
                                    <div className="level-stripe-dark"></div>
                                    <div className="level-stripe-value"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Account;