import {faAngleLeft, faBan, faCircleNotch} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";
import '../styles/pages/NotFound.scss';

function NotFound() {
    return (
        <div className={'not-found'}>
            <main>
                <Helmet>
                    <title>404 | GOdrop</title>
                    <meta name="description" content="Page not found" />
                </Helmet>
                <div className={'not-found-wrapper container content'}>
                    <h1 className={'page-header'}>404</h1>
                    <h2>Opps! Page not found</h2>
                    <p>Looks like the page you are looking does not exist.</p>
                    <Link className={'go-back-link'} to={'/'}><FontAwesomeIcon icon={faAngleLeft} /> Go back</Link>
                </div>
            </main>
        </div>
    );
}

export default NotFound;