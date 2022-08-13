import React from 'react';
import "./uiInterface.scss"
import {useNavigate, Routes, Route, Link} from "react-router-dom"
import StatisticP from "./StatisticPage/StatisticP";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Chat from "./Chat";
import PageNotFound from "./page_not_found";

function MainInterface(props) {
    const [color, setColor] = React.useState(false);
    const [colorT, setColorT] = React.useState(false);

    const navigate= useNavigate();

    return (
        <>
            <div className="main-box">
                <div className="main-in-box">
                    <Navbar/>
                    <div className="display-flex">
                        <div className="menu">
                            <div className="padding">
                                <Link onClick={()=>setColor(false)} to="/mainPage/statistic">
                                <div onClick={()=>setColorT(true)} className={colorT ? "Overview change-color" :"Overview"}>
                                    <div>
                                        <img className="img-one" src="/images/chart-pie.png" alt=""/>
                                    </div>
                                        <p>Overview</p>
                                </div>
                                </Link>
                                <div className="Overview">
                                    <div onClick={()=>setColorT(false)} className="accordion" id="accordionPanelsStayOpenExample">
                                        <div onClick={()=>setColor(false)} className="accordion-item">
                                            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                                                        aria-controls="panelsStayOpen-collapseTwo">
                                                    <img src="/images/chipFile.png" alt=""/>
                                                    <p className="menu-text">Pages</p>
                                                </button>
                                            </h2>
                                            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse"
                                                 aria-labelledby="panelsStayOpen-headingTwo">
                                                <div className="accordion-body">
                                                </div>
                                            </div>
                                        </div>
                                        <div onClick={()=>setColor(false)} className="accordion-item mt-4">
                                            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                                                        aria-controls="panelsStayOpen-collapseOne">
                                                    <img src="/images/bagKarzina.png" alt=""/>
                                                    <p className="menu-text">Sales</p>
                                                </button>
                                            </h2>
                                            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show"
                                                 aria-labelledby="panelsStayOpen-headingOne">
                                                <div className="accordion-body">
                                                    <p className="menu-text">Product List</p>
                                                    <p className="menu-text">Billing</p>
                                                    <p className="menu-text">Invoice</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Link onClick={()=>setColorT(false)} to="/mainPage/chatPage">
                                <div onClick={()=>setColor(true)} className={color ? "change-color Overview mt-3":"Overview mt-3"}>
                                    <div>
                                        <img className="img-one" src="/images/inbox-in.png" alt=""/>
                                    </div>

                                        <p className="menu-text1">Messages</p>
                                    <img className="badge1" src="/images/Badge.png" alt=""/>
                                </div>
                                </Link>
                                <div className="Overview">
                                    <div className="accordion accordion-flush" id="accordionFlushExample">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="flush-headingOne">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#flush-collapseOne" aria-expanded="false"
                                                        aria-controls="flush-collapseOne">
                                                    <img src="/images/provite.png" alt=""/>
                                                    <p className="menu-text">Authentication</p>
                                                </button>
                                            </h2>
                                            <div id="flush-collapseOne" className="accordion-collapse collapse"
                                                 aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body"></div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="hr-line"></div>
                            <div className="padding1">
                                <div className=" Overview mt-3">
                                    <div>
                                        <img className="img-one" src="/images/zametki.png" alt=""/>
                                    </div>
                                    <p className="menu-text1">Docs</p>
                                </div>
                                <div className="Overview1">
                                    <div className=" Overview Overview1 mt-3">
                                        <div>
                                            <img className="img-one" src="/images/file.png" alt=""/>
                                        </div>
                                        <p className="menu-text1">Components</p>
                                    </div>
                                </div>
                                <div className="Overview1">
                                    <div className=" Overview Overview1 mt-3">
                                        <div>
                                            <img className="img-one" src="/images/roll.png" alt=""/>
                                        </div>
                                        <p className="menu-text1">Help</p>
                                    </div>
                                </div>

                            </div>
                            <div className="top-img-icon">
                                <img src="/images/musicSetting.png" alt=""/>
                                <img src="/images/boll.png" alt=""/>
                                <img src="/images/setting.png" alt=""/>
                            </div>
                        </div>
                        <div className="main-content">
                            <Routes>
                                <Route path="/statistic" exact={true} element={<StatisticP/>}/>
                                <Route path="/chatPage" element={<Chat/>}/>
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainInterface;