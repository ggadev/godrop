import React from 'react';
import '../../styles/components/Footer/Footer.scss';

function Footer() {
    return (
        <footer className={'footer'}>
            <div className="footer-wrapper container">
                <p>
                    &copy; Copyright gadev.pl
                    2023
                </p>
                <p className={'footer-disclaimer'}>This is not a gambling website. Any items obtained on this site are for simulation purposes only and cannot be transferred to your actual CS:GO game inventory.</p>
                <p className={'footer-disclaimer valve'}>Version: 0.0.1 (12.06.2023)</p>
            </div>
        </footer>
    );
}

export default Footer;