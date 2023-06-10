import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faExclamation, faXmark} from "@fortawesome/free-solid-svg-icons";
import '../../styles/components/Notifications/Notification.scss';

function Notification(props) {
    const [isActive, setIsActive] = useState(true);
    const {title, desc, status} = props;

    function setInactive() {
        setIsActive(false);
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setInactive();
        }, 8000);

        return () => clearTimeout(timer);
    }, []);

    if(!isActive) return null;

    return (
        <div className={`notification ${status}`}>
            <div className="notification-wrapper">
                <div className="icon">
                    <FontAwesomeIcon icon={status === 'success' ? faCheck : faExclamation} />
                </div>
                <div className="details">
                    <div className="title">{title}</div>
                    <div className="desc">{desc}</div>
                </div>
                <div className="close" onClick={setInactive}>
                    <FontAwesomeIcon icon={faXmark} />
                </div>
                <div className="indicator"></div>
            </div>
        </div>
    );
}

export default Notification;