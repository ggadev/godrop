import React from 'react';
import {Helmet} from "react-helmet";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faDatabase} from "@fortawesome/free-solid-svg-icons";
import '../../styles/pages/SkinBase/SkinBase.scss';

function SkinBase() {
    return (
        <div className={'skinbase'}>
            <main>
                <Helmet>
                    <title>GOdrop - SkinBase</title>
                    <meta name="description" content="My page description" />
                </Helmet>
                <div className={'container content'}>
                    <Link className={'go-back-link'} to={'/'}><FontAwesomeIcon icon={faAngleLeft} /> Go back</Link>
                    <h1 className={'page-header'}><FontAwesomeIcon icon={faDatabase} /> SkinBase</h1>

                    <div className={'skinbase-wrapper'}>
                        <ul className={'skinbase-nav'}>
                            <li className={'skinbase-nav__item'}>

                            </li>
                        </ul>
                        <div className={'skin-list'}>

                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default SkinBase;