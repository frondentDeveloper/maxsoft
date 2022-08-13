import React from 'react';
import "./paga_not_found.scss"

function PageNotFound(props) {
    return (
        <div className="pagnotfpund">
            <div className="navbar404">
                <div className="left">
                    <img src="/images/Logo (1).png" alt=""/>
                    <div className="navbarMenu">
                        <a href="#">Dashboard</a>
                        <a href="#">Team</a>
                        <a href="#">Projects</a>
                        <a href="#">Calendar</a>
                    </div>
                </div>
                <div className="righte">
                    <img src="/images/Vector.svg" alt=""/>
                    <a href="#">Login/Register </a>
                </div>
            </div>
            <div className="section">
                <img src="/images/404.png" alt=""/>
                <h2>Page not found</h2>
                <p>Oops! Looks like you followed a bad link. If you think this is
                    a problem with us, please tell us.
                </p>
                <button>Go back home</button>
            </div>
        </div>
    );
}

export default PageNotFound;