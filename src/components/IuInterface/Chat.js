import React from 'react';
import "./chat.scss"
import {useSelector} from "react-redux";
import Footer from "./Footer";

function Chat(props) {

    const store = useSelector(state => state)

    return (
        <>
          <div className="main-chat">
            <div className="for-first-chat">
                <div className="img-man">
                    <img className="img-fluid" src="https://lh3.googleusercontent.com/a-/AFdZuco0KV6PJeSeK8RHyfU8geUK2g0wUSl7jS7np5b0=s96-c" alt=""/>
                </div>
                <div className="for-text">
                    <p>Assalomu alaykum</p>
                </div>
            </div>
            <div className="for-second-chat">
                <div className="img-man2">
                    {store.photo.length ? <img className="img-fluid" src={store.photo} alt=""/> : <img className="img-fluid" src="/images/Avatar.png" alt=""/>}
                </div>
                <div className="for-text">
                    <p>Va alaykum assalom</p>
                </div>
            </div>
            <div className="for-first-chat">
                <div className="img-man">
                    <img className="img-fluid" src="https://lh3.googleusercontent.com/a-/AFdZuco0KV6PJeSeK8RHyfU8geUK2g0wUSl7jS7np5b0=s96-c" alt=""/>
                </div>
                <div className="for-text">
                    <p>Ismim Samandar Abduraxmonov</p>
                </div>
            </div>
            <div className="for-first-chat">
                <div className="img-man">
                    <img className="img-fluid" src="https://lh3.googleusercontent.com/a-/AFdZuco0KV6PJeSeK8RHyfU8geUK2g0wUSl7jS7np5b0=s96-c" alt=""/>
                </div>
                <div className="for-text">
                    <p>E'lon boyicha bezovta qilayotgan edim</p>
                </div>
            </div>
            <div className="for-second-chat">
                <div className="img-man2">
                    {store.photo.length ? <img className="img-fluid" src={store.photo} alt=""/> : <img className="img-fluid" src="/images/Avatar.png" alt=""/>}
                </div>
                <div className="for-text">
                    <p>Qaysi yonalishda ishlaysiz ?</p>
                </div>
            </div>
            <div className="for-first-chat">
                <div className="img-man">
                    <img className="img-fluid" src="https://lh3.googleusercontent.com/a-/AFdZuco0KV6PJeSeK8RHyfU8geUK2g0wUSl7jS7np5b0=s96-c" alt=""/>
                </div>
                <div className="for-text">
                    <p>Frontend</p>
                </div>
            </div>
            <div className="for-second-chat">
                <div className="img-man2">
                    {store.photo.length ? <img className="img-fluid" src={store.photo} alt=""/> : <img className="img-fluid" src="/images/Avatar.png" alt=""/>}
                </div>
                <div className="for-text">
                    <p>Topshiriq beriladi. Vazifani kim yaxshi qilib topshirsa shular ishga qabul qilinadi</p>
                </div>
            </div>
            <div className="for-first-chat">
                <div className="img-man">
                    <img className="img-fluid" src="https://lh3.googleusercontent.com/a-/AFdZuco0KV6PJeSeK8RHyfU8geUK2g0wUSl7jS7np5b0=s96-c" alt=""/>
                </div>
                <div className="for-text">
                    <p>Aha tayyorman</p>
                </div>
            </div>
            <div className="for-data">
                <p>Dush 12:00</p>
            </div>
            <div className="for-second-chat">
                <div className="img-man2">
                    {store.photo.length ? <img className="img-fluid" src={store.photo} alt=""/> : <img className="img-fluid" src="/images/Avatar.png" alt=""/>}
                </div>
                <div className="for-text">
                    <p>Assalomu alaykum. Sizni seshanba kuni soat 11:30 da ofisimizda kutamiz suhbat boladi</p>
                </div>
            </div>
            <div className="for-first-chat">
                <div className="img-man">
                    <img className="img-fluid" src="https://lh3.googleusercontent.com/a-/AFdZuco0KV6PJeSeK8RHyfU8geUK2g0wUSl7jS7np5b0=s96-c" alt=""/>
                </div>
                <div className="for-text">
                    <p>Raxmat katta</p>
                </div>
            </div>
            <div className="for-first-chat">
                <div className="img-man">
                    <img className="img-fluid" src="https://lh3.googleusercontent.com/a-/AFdZuco0KV6PJeSeK8RHyfU8geUK2g0wUSl7jS7np5b0=s96-c" alt=""/>
                </div>
                <div className="for-text">
                    <p>Albatta hazil tariqasida yozilgan yozilgan😊</p>
                </div>
            </div>
            <hr/>
        </div>
            <div className="for-footer">
                <Footer/>
            </div>
        </>
    );
}

export default Chat;