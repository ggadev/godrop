import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClockRotateLeft, faPenToSquare, faPlus, faToolbox} from "@fortawesome/free-solid-svg-icons";
import '../../styles/pages/ProvablyFair/ProvablyFairVerify.scss';

function ProvablyFairVerify() {

    return (
        <div className="provably-fair-verify">

            <div className="latest-drop-list">
                <div className="drop-list-item">
                    <div className="drop-id">
                        #1623
                    </div>
                    <div className="drop-image">
                        <img src={'https://data.gadev.pl/godrop/img/ak-47/ak-47-wild-lotus-icon.png'}/>
                    </div>
                    <div className="drop-text">
                        AK-47 | Wild Lotus
                    </div>
                    <div className="drop-type">
                        <FontAwesomeIcon icon={faToolbox} /> Case
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProvablyFairVerify;