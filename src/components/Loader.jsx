import React, {useEffect, useRef, useState} from 'react';
import '../styles/components/SiteLoader.scss';


function SiteLoader() {

    return (
        <div className={`site-loader ${loaderState}`}>
            <div className="loader-cover"></div>
            <div className="loader-container">
                <div className="shadow"></div>
                <svg version="1.1" id="layer" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                     viewBox="0 0 184.5 136.1" enableBackground="new 0 0 184.5 136.1" >
                    <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="4.126414e-02" y1="30.05" x2="184.4841" y2="30.05" gradientTransform="matrix(1 0 0 1 0 38)">
                        <stop  offset="0" stopColor="#38F8D4"/>
                        <stop  offset="1" stopColor="#43EA80"/>
                    </linearGradient>
                    <path id="logo" fill="url(#SVGID_1_)" d="M175.1,88.5l-31.4,47.6l-39-25.7c-17.3,26.3-52.7,33.6-79,16.2c-26.3-17.3-33.6-52.7-16.2-79L40.8,0
                    L69,18.6L57.6,35.9l-10.8-7.1l-20,30.3c-11,16.7-6.4,39.2,10.3,50.3c16.7,11,39.2,6.4,50.3-10.3l20-30.3L85.7,54.5l-8.5,13
                    L65.7,84.8c-3.2,4.8-9.6,6.1-14.4,3c-4.8-3.2-6.1-9.6-3-14.4l31.4-47.6L97,37.2l21.6,14.3c3.1-4.8,9.6-6.1,14.4-3
                    c4.8,3.2,6.1,9.6,3,14.4l-20,30.3l21.6,14.3l20-30.3c11-16.7,6.4-39.2-10.3-50.3c-12.9-8.5-29.3-7.7-41.2,0.8l-17.9-12
                    c18.8-17.9,48-21.1,70.6-6.2C185.1,26.8,192.4,62.2,175.1,88.5z"/>
                    <linearGradient id="line_00000000907499583418285440000015480192551850936219_" gradientUnits="userSpaceOnUse" x1="19.8855" y1="67.4981" x2="163.9917" y2="67.4981" gradientTransform="matrix(1 0 0 -1 0 136)">
                        <stop  offset="0" stopColor="#38F8D4"/>
                        <stop  offset="1" stopColor="#43EA80"/>
                    </linearGradient>
                    <path ref={loaderLine} id="line" fill="none" stroke="url(#line_00000000907499583418285440000015480192551850936219_)" strokeWidth="26" strokeMiterlimit="10" d="
                    M68.7,19L36.5,67.6c0,0-11.7,18.3,7,31s31.4-4.2,31.4-4.2l32.3-50c0,0,13.8-18.9,32.8-6.5s7.6,30.5,7.6,30.5l-32.3,49.7"/>
                </svg>
            </div>
        </div>
    );
}

export default SiteLoader;