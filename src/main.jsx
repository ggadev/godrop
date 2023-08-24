import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/main.scss'
import {AuthProvider} from "./contexts/AuthContext.jsx";
import {ModalsProvider} from "./contexts/ModalsContext.jsx";
import {NotificationProvider} from "./contexts/NotificationContext.jsx";
import {SocketProvider} from "./contexts/SocketContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <SocketProvider>
        <ModalsProvider>
            <NotificationProvider>
                <AuthProvider>
                    <App></App>
                </AuthProvider>
            </NotificationProvider>
        </ModalsProvider>
    </SocketProvider>
)
