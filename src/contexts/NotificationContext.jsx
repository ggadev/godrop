import React, {useContext, useState} from 'react';

const NotificationContext = React.createContext();
const NotificationAddContext = React.createContext();

export function useNotification() {
    return useContext(NotificationContext);
}

export function useAddNotification() {
    return useContext(NotificationAddContext);
}

export function NotificationProvider({children}) {
    const [notification, setNotification] = useState(null);

    function addNotification(data) {
        setNotification(data);
    }

    return (
        <NotificationContext.Provider value={notification}>
            <NotificationAddContext.Provider value={addNotification}>
                {children}
            </NotificationAddContext.Provider>
        </NotificationContext.Provider>
    );
}

export default NotificationContext;