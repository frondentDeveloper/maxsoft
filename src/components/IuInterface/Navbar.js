import React, {useState} from 'react';
import "./Navbar.scss"
import {Link, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import Dropdown from 'react-bootstrap/Dropdown';

function Navbar(props) {


    const [colorT, setColorT] = React.useState(false);
    const [color, setColor] = useState(false);
    const navigate= useNavigate();
    const store = useSelector(state => state);

    return (
        <>
            {console.log(store)}
            <div className="Navbar">
                <div className="for-logo">
                    <img src="/images/Logo (1).png" alt=""/>
                </div>
                <div className="for-search">
                    <img src="images/search.png" alt=""/>
                    <input placeholder="Search" className="input" type="text"/>
                </div>
                    <button className="btn button-collapse" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseWidthExample" aria-expanded="false"
                            aria-controls="collapseWidthExample">
                        <img src="/images/burger.png" alt=""/>
                    </button>
                <div className="body-collapse" style={{minHeight: "120px"}}>
                    <div className="collapse collapse-horizontal" id="collapseWidthExample">
                        <div className="card card-body" style={{width: "300px"}}>
                            <div className="padding">
                                <Link onClick={()=>setColor(false)} to="/mainPage/statistic">
                                    <div  className="Overview">
                                        <div>
                                            <img className="img-one" src="/images/chart-pie.png" alt=""/>
                                        </div>
                                        <p>Overview</p>
                                    </div>
                                </Link>
                                <div className="Overview">
                                    <div className="accordion" id="accordionPanelsStayOpenExample">
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
                                 <div onClick={()=>setColor(true)} className={color ? "change-color Overview mt-3" :"Overview mt-3"}>
                                    <div>
                                        <img className="img-one" src="images/inbox-in.png" alt=""/>
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
                                                    <img src="images/provite.png" alt=""/>
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
                                        <img className="img-one" src="images/zametki.png" alt=""/>
                                    </div>
                                    <p className="menu-text1">Docs</p>
                                </div>
                                <div className="Overview1">
                                    <div className=" Overview Overview1 mt-3">
                                        <div>
                                            <img className="img-one" src="images/file.png" alt=""/>
                                        </div>
                                        <p className="menu-text1">Components</p>
                                    </div>
                                </div>
                                <div className="Overview1">
                                    <div className=" Overview Overview1 mt-3">
                                        <div>
                                            <img className="img-one" src="images/roll.png" alt=""/>
                                        </div>
                                        <p className="menu-text1">Help</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="for-profile">
                    <img className="notification" src="/images/Notification Icon.png" alt=""/>
                    <Dropdown className="dropdown">
                        <Dropdown.Toggle className="dropItem" id="dropdown-basic">
                            {store.photo.length ?
                                <img className="profile-img" src={store.photo} />    : <img className="profile-img" src="/images/Avatar.png" />}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">{store.name.length ? store.name : <p>Your name</p>}</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">{store.email.length ? store.email : <p>Your email</p>}</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>


                </div>
            </div>
        </>
    );
}

export default Navbar;