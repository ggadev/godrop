import React, {createContext, useContext, useEffect, useState} from 'react';
import {useCookies} from 'react-cookie';
import {useAddNotification} from "./NotificationContext.jsx";
import axios from "axios";
import {API_URL} from "../data/variables.js";

export const ModalsContext = createContext(null);

export function ModalsProvider({children}) {
    const [currentModals, setCurrentModals] = useState([]);

    function displayModal(modal, priority = false) {
        setCurrentModals(prevState =>
            priority ? [modal, ...prevState] : [...prevState, modal]
        )
    }

    function closeModal() {
        setCurrentModals(prevState => {
            const t = [...prevState];
            t.shift();
            return t;
        });
    }

    return (
        <ModalsContext.Provider value={{currentModals, displayModal, closeModal}}>
            {children}
        </ModalsContext.Provider>
    );
}

export default ModalsContext;