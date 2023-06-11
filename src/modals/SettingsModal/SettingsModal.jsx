import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGear, faUser, faXmark} from "@fortawesome/free-solid-svg-icons";
import '../../styles/modals/SettingsModal/SettingsModal.scss';

function SettingsModal({toggleModal}) {
    const initialCurrency = localStorage.getItem('currency') || 'PLN';

    const [showOptions, setShowOptions] = useState(false);
    const [currency, setCurrency] = useState(initialCurrency);

    function toggleShowOptions() {
        setShowOptions(prevState => !prevState);
    }
    function changeCurrency(curr) {
        setCurrency(curr);
        toggleShowOptions();
    }

    function saveSettings() {
        localStorage.setItem('currency', currency);
        toggleModal();
    }

    return (
        <div className={'modal'}>
            <div className="modal-cover"></div>
            <div className={'settings-modal'}>
                <div className="settings-modal-wrapper">
                    <div className="content">
                        <div className="content-header">
                            <div className="col">
                                <h2><FontAwesomeIcon icon={faGear}/> Settings</h2>
                                <p>Set your language and currency</p>
                            </div>
                        </div>
                        <div className={'settings-container'}>
                            <div className="setting">
                                <p>Language</p>
                                <div className="selected inactive">
                                    <img src={'/flags/english-flag.jpg'}/>
                                    <p>English</p>
                                </div>
                            </div>
                            <div className="setting">
                                <p>Currency</p>
                                <div className="selected" onClick={toggleShowOptions}>
                                    <p>{'v'+currency}</p>
                                </div>
                                <div className={`options ${showOptions && 'show'}`}>
                                    <div className="option" onClick={() => changeCurrency('USD')}>
                                        <p>vUSD</p>
                                        <p className={'exchange-rate'}>1:1</p>
                                    </div>
                                    <div className="option" onClick={() => changeCurrency('EUR')}>
                                        <p>vEUR</p>
                                        <p className={'exchange-rate'}>0.93:1</p>
                                    </div>
                                    <div className="option" onClick={() => changeCurrency('PLN')}>
                                        <p>vPLN</p>
                                        <p className={'exchange-rate'}>4.22:1</p>
                                    </div>
                                </div>
                                <p className={'curr-info'}>We store prices in vUSD, every other currency has a static vUSD exchange rate.</p>
                            </div>
                            <button onClick={saveSettings} className={currency === initialCurrency && 'inactive'}>Save & Close</button>
                        </div>
                    </div>
                    <div className="close-modal" onClick={toggleModal}>
                        <FontAwesomeIcon icon={faXmark} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SettingsModal;