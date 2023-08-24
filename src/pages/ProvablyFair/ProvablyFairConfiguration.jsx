import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClockRotateLeft, faPenToSquare, faPlus} from "@fortawesome/free-solid-svg-icons";
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {API_URL} from "../../data/variables.js";
import {useAddNotification} from "../../contexts/NotificationContext.jsx";
import AuthContext from "../../contexts/AuthContext.jsx";
import moment from "moment";
import ModalsContext from "../../contexts/ModalsContext.jsx";
import ClientSeedModal from "../../modals/ProvablyFair/ClientSeedModal.jsx";

function ProvablyFairConfiguration() {
    const [currentSeeds, setCurrentSeeds] = useState(null);

    const addNotification = useAddNotification();

    const { displayModal } = useContext(ModalsContext);

    const { getToken } = useContext(AuthContext);

    useEffect(() => {
        axios.get(`${API_URL}/provablyfair/current`, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'x-access-token': getToken()
            }})
            .then(res => {
                console.log(res.data);
                setCurrentSeeds(res.data);
            })
            .catch(err => {
                console.error(err);
            });
    }, [getToken])

    function generateServerSeed() {
        axios.post(`${API_URL}/provablyfair/new/serverseed`, null, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'x-access-token': getToken()
            }})
            .then(res => {
                console.log(res.data);
                setCurrentSeeds(prevState => ({
                    ...prevState,
                    ...res.data
                }))
                addNotification({title: 'Success', desc: 'Your new server seed has been generated.', status: 'success'});
            })
            .catch(err => {
                const errorMessage = err.response.data.error;
                addNotification({title: 'Wait!', desc: errorMessage, status: 'error'});
            });
    }

    if(!currentSeeds) return;

    return (
        <div className="provably-fair-configuration">
            <div className="config-wrapper">
                <div className="config">
                    <div className="config-name">
                        <span>Client Seed</span>
                    </div>
                    <div className="config-value">
                        <span className={'value'}>{currentSeeds['client_seed']}</span>
                        <span className={'created'}>Created {moment(currentSeeds['client_seed_date']).format('YYYY-MM-DD HH:mm:ss')}</span>
                        <div className="config-options">
                            <div className="config-option">
                                <div className="button-gray" onClick={() => displayModal(<ClientSeedModal currentClientSeed={currentSeeds['client_seed']}></ClientSeedModal>)}><FontAwesomeIcon icon={faPenToSquare} /> Edit</div>
                            </div>
                            {/*<div className="config-option">*/}
                            {/*    <div className="button-gray"><FontAwesomeIcon icon={faClockRotateLeft} /> History</div>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
                <div className={'config-definition'}>
                    You can edit your client seed after each roll.
                </div>
            </div>
            <div className="config-wrapper">
                <div className="config">
                    <div className="config-name">
                        <span>Server Seed</span>
                        <span style={{fontSize: '0.5rem', fontWeight: '500', color: '#aaa', marginTop: '2px'}}>Encrypted</span>
                    </div>
                    <div className="config-value">
                        <span className={'value'}>{currentSeeds['encryptedServerSeed']}</span>
                        <span className={'created'}>Created {moment(currentSeeds['server_seed_date']).format('YYYY-MM-DD HH:mm:ss')} <span className={'secured'}>(SHA-256 Hash Secured)</span></span>
                        <div className="config-options">
                            <div className="config-option">
                                <div className="button-gray" onClick={generateServerSeed}><FontAwesomeIcon icon={faPlus} /> Generate New</div>
                            </div>
                            {/*<div className="config-option">*/}
                            {/*    <div className="button-gray"><FontAwesomeIcon icon={faClockRotateLeft} /> History</div>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
                <div className={'config-definition'}>
                    This server seed will be visible after generating a new one. You may generate a new server seed every 3 hours.
                </div>
            </div>
            <div className="config-wrapper">
                <div className="config">
                    <div className="config-name">
                        <span>Nonce</span>
                    </div>
                    <div className="config-value">
                        <span className={'value'} style={{fontSize: '1rem'}}>{currentSeeds['server_seed_nonce']}</span>
                        <span className={'created'}>This nonce number will be used in your next roll.</span>
                    </div>
                </div>
                <div className={'config-definition'}>
                    Nonce number resets with generation of new server seed.
                </div>
            </div>
        </div>
    );
}

export default ProvablyFairConfiguration;