import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClockRotateLeft, faPenToSquare, faPlus} from "@fortawesome/free-solid-svg-icons";
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {API_URL} from "../../data/variables.js";
import {useAddNotification} from "../../contexts/NotificationContext.jsx";
import AuthContext from "../../contexts/AuthContext.jsx";
import moment from "moment";

function ProvablyFairVerify() {

    return (
        <div className="provably-fair-configuration">

        </div>
    );
}

export default ProvablyFairVerify;