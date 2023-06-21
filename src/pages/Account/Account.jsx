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
                <div className={'lucky-shot-wrapper container content'}>
                    <Link className={'go-back-link'} to={'/'}><FontAwesomeIcon icon={faAngleLeft} /> Go back</Link>
                    <h1 className={'page-header'}><img src={'https://data.gadev.pl/godrop/img/avatars/2.jpg'}/> Account</h1>
                </div>
            </main>
        </div>
    );
}

export default Account;