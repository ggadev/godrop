import {faAngleLeft, faGift} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import '../../styles/pages/Giveaways/Giveaways.scss';
import {Helmet} from "react-helmet";
import UnderConstruction from "../../components/UnderConstruction/UnderConstruction.jsx";

function Giveaways() {
    return (
        <div className={'giveaways'}>
            <main>
                <Helmet>
                    <title>GOdrop - Giveaways</title>
                    <meta name="description" content="My page description" />
                </Helmet>
                <div className={'giveaways-wrapper container content'}>
                    <Link className={'go-back-link'} to={'/'}><FontAwesomeIcon icon={faAngleLeft} /> Go back</Link>
                    <h1 className={'page-header'}><FontAwesomeIcon icon={faGift} /> Giveaways</h1>
                    <UnderConstruction pageType={'game'}></UnderConstruction>
                </div>
            </main>
        </div>
    );
}

export default Giveaways;