import {faAngleLeft, faCopy} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import '../../styles/pages/ScratchCards/ScratchCards.scss';
import {Helmet} from "react-helmet";
import UnderConstruction from "../../components/UnderConstruction/UnderConstruction.jsx";

function ScratchCards() {
    return (
        <div className={'scratch-cards'}>
            <main>
                <Helmet>
                    <title>GOdrop - Upgrader</title>
                    <meta name="description" content="My page description" />
                </Helmet>
                <div className={'scratch-cards-wrapper container content'}>
                    <Link className={'go-back-link'} to={'/'}><FontAwesomeIcon icon={faAngleLeft} /> Go back</Link>
                    <h1 className={'page-header'}><FontAwesomeIcon icon={faCopy} /> Scratch Cards</h1>
                    <UnderConstruction pageType={'game'}></UnderConstruction>
                </div>
            </main>
        </div>
    );
}

export default ScratchCards;