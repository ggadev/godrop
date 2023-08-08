import {useEffect, useState} from 'react';
import Notification from "./Notification.jsx";
import '../../styles/components/Notifications/Notifications.scss';
import { useNotification } from "../../contexts/NotificationContext.jsx";

function Notifications() {
    const [notifications, setNotifications] = useState(null);

    const notification = useNotification();

    useEffect(() => {
        if(notification)
            addNotification(notification);
    }, [notification])

    function addNotification(not) {
        const notData = {
            ...not,
            id: notifications ? notifications.length+1 : 1
        }
        setNotifications(prevState => prevState ? [...prevState, notData] : [notData]);
    }

    return (
        <div className={'notifications'}>
            {notifications && notifications.map(not => (
                <Notification key={not.id} title={not.title} desc={not.desc} status={not.status}></Notification>
            ))}
        </div>
    );
}

export default Notifications;