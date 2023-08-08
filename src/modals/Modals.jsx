import {useContext, useEffect, useState} from 'react';
import ModalsContext from "../contexts/ModalsContext.jsx";
import ModalTemplate from "./ModalTemplate.jsx";

function Modals() {
    const { currentModals } = useContext(ModalsContext);

    if(currentModals.length < 1) return;
    return (
        <ModalTemplate>
            {currentModals[0]}
        </ModalTemplate>
    );
}

export default Modals;