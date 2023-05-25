import {faAngleLeft, faKhanda} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import '../../styles/pages/Collections/Collections.scss';
import {Helmet} from "react-helmet";
import UnderConstruction from "../../components/UnderConstruction/UnderConstruction.jsx";

function Collections() {
    return (
        <div className={'collections'}>
            <main>
                <Helmet>
                    <title>GOdrop - Collections</title>
                    <meta name="description" content="My page description" />
                </Helmet>
                <div className={'collections-wrapper container content'}>
                    <Link className={'go-back-link'} to={'/'}><FontAwesomeIcon icon={faAngleLeft} /> Go back</Link>
                    <h1 className={'page-header'}><FontAwesomeIcon icon={faKhanda} /> Collections</h1>
                    <UnderConstruction pageType={'page'}></UnderConstruction>
                </div>
            </main>
        </div>
    );
}

export default Collections;