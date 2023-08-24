import React, {createContext, useContext, useEffect, useMemo, useState} from 'react';
import {useCookies} from 'react-cookie';
import {useAddNotification} from "./NotificationContext.jsx";
import axios from "axios";
import {API_URL, SOCKET_URL} from "../data/variables.js";
import io from "socket.io-client";

export const SocketContext = createContext(null);

export function SocketProvider({children}) {

    const socket = useMemo(() => io(SOCKET_URL), []);

    const [onlineCount, setOnlineCount] = useState(0);

    useEffect(() => {
        socket.on('onlineCount', (count) => {
            setOnlineCount(count);
        });

        return () => {
            socket.disconnect();
        }
    }, [socket])

    return (
        <SocketContext.Provider value={{socket, onlineCount}}>
            {children}
        </SocketContext.Provider>
    );
}

export default SocketContext;