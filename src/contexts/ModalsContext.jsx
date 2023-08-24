import React, {createContext, useContext, useEffect, useMemo, useState} from 'react';
import SettingsModal from "../modals/SettingsModal/SettingsModal.jsx";
import SignModal from "../modals/SignModal/SignModal.jsx";

export const ModalsContext = createContext(null);

export function ModalsProvider({children}) {
    const [currentModals, setCurrentModals] = useState([]);

    const urlModals = useMemo(() => {
        return {
            settings: <SettingsModal/>,
            login: <SignModal/>,
            signup: <SignModal/>
        };
    }, []);

    useEffect(() => {
        const hash = window.location.hash.substring(1);
        if(urlModals[hash])
            displayModal(urlModals[hash]);
    }, [urlModals])

    function displayModal(modal, priority = false) {
        setCurrentModals(prevState =>
            priority ? [modal, ...prevState] : [...prevState, modal]
        )
    }

    function closeModal() {
        window.location.hash = '';
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