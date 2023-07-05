import React from 'react';
import {Helmet} from "react-helmet";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faGift, faScrewdriverWrench} from "@fortawesome/free-solid-svg-icons";
import UnderConstruction from "../../components/UnderConstruction/UnderConstruction.jsx";
import '../../styles/pages/Admin/Admin.scss';

function Admin(props) {
    return (
        <div className={'admin'}>
            <main>
                <Helmet>
                    <title>GOdrop - Giveaways</title>
                    <meta name="description" content="My page description" />
                </Helmet>
                <div className={'admin-wrapper container content'}>
                    <Link className={'go-back-link'} to={'/'}><FontAwesomeIcon icon={faAngleLeft} /> Go back</Link>
                    <h1 className={'page-header'}><FontAwesomeIcon icon={faScrewdriverWrench} /> Admin</h1>
                </div>
            </main>
        </div>
    );
}

export default Admin;