import {faAngleLeft, faCopy, faSuitcase} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import '../../styles/pages/DailyFree/DailyFree.scss';
import {Helmet} from "react-helmet";
import UnderConstruction from "../../components/UnderConstruction/UnderConstruction.jsx";

function LuckyShot() {
    return (
        <div className={'daily-free'}>
            <main>
                <Helmet>
                    <title>GOdrop - Daily Free</title>
                    <meta name="description" content="My page description" />
                </Helmet>
                <div className={'lucky-shot-wrapper container content'}>
                    <Link className={'go-back-link'} to={'/'}><FontAwesomeIcon icon={faAngleLeft} /> Go back</Link>
                    <h1 className={'page-header'}><FontAwesomeIcon icon={faSuitcase} /> Daily Free</h1>
                    <UnderConstruction pageType={'game'}></UnderConstruction>
                </div>
            </main>
        </div>
    );
}

export default LuckyShot;