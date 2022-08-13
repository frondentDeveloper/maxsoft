import React from 'react';
import "./Footer.scss"

function Footer(props) {
    return (
        <>
            <div className="footer">
                <div className="Themesberg">© 2021 Themesberg, LLC. All rights reserved.</div>
                <div className="for-icon">
                    <img src="/images/facebook.png" alt=""/>
                    <img src="/images/twitter.png" alt=""/>
                    <img src="/images/github.png" alt=""/>
                    <img src="/images/dribbble.png" alt=""/>
                </div>
            </div>
        </>
    );
}

export default Footer;