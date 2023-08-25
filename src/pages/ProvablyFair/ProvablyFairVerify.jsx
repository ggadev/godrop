import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight, faClockRotateLeft, faPenToSquare, faPlus, faToolbox} from "@fortawesome/free-solid-svg-icons";
import '../../styles/pages/ProvablyFair/ProvablyFairVerify.scss';
import moment from "moment/moment.js";
import ClientSeedModal from "../../modals/ProvablyFair/ClientSeedModal.jsx";

function ProvablyFairVerify() {

    return (
        <div className="provably-fair-verify">
            <div className="roll-input">
                #<input type={'number'} placeholder={'Enter roll ID'}/>
                <button><FontAwesomeIcon icon={faAngleRight} /></button>
            </div>
            <div className="verify-result">
                <h2 style={{textAlign: 'center'}}>Roll verification unavailable.</h2>
                {/*    <h2>Data:</h2>*/}
                {/*    <div className="verify-fields">*/}
                {/*        <div className="verify-field">*/}
                {/*            <div className="verify-field-name">*/}
                {/*                <span>Client Seed</span>*/}
                {/*            </div>*/}
                {/*            <div className="verify-field-value">*/}
                {/*                <span className={'value'}>2342342</span>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className="verify-field">*/}
                {/*            <div className="verify-field-name">*/}
                {/*                <span>Server Seed</span>*/}
                {/*            </div>*/}
                {/*            <div className="verify-field-value">*/}
                {/*                <span className={'value'}>sdfsdfsdf</span>*/}
                {/*                <span className={'secured'}>(SHA-256 Hash Secured)</span>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className="verify-field">*/}
                {/*            <div className="verify-field-name">*/}
                {/*                <span>Nonce</span>*/}
                {/*            </div>*/}
                {/*            <div className="verify-field-value">*/}
                {/*                <span className={'value'}>23</span>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <h2 style={{marginTop: '16px'}}>Output:</h2>*/}
                {/*    <div className="verify-fields">*/}
                {/*        <div className="verify-field">*/}
                {/*            <div className="verify-field-name">*/}
                {/*                <span>Skin Roll</span>*/}
                {/*            </div>*/}
                {/*            <div className="verify-field-value">*/}
                {/*                <span className={'value'}>52432</span>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className="verify-field">*/}
                {/*            <div className="verify-field-name">*/}
                {/*                <span>Float Roll</span>*/}
                {/*            </div>*/}
                {/*            <div className="verify-field-value">*/}
                {/*                <span className={'value'}>0.743531</span>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
            </div>
        </div>
    );
}

export default ProvablyFairVerify;