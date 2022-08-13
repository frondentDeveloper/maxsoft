import React, {useContext} from 'react';
import "./login.scss"
import {Context} from "../../index";
import firebase from "firebase";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {MyActions, MyEmail, MyNAME, MyTrue} from "../Action/MyAction";
import RoutesPath from "./Routes";


function Login(props) {
 const navigate = useNavigate();
    const {auth} = useContext(Context);
    const dispatch = useDispatch();

    const login = async () =>{
        const provider = new firebase.auth.GoogleAuthProvider();
        const {user} = await auth.signInWithPopup(provider);
        console.log(user);
        // displayName email
        if (user.emailVerified === true){
            dispatch(MyActions(user.photoURL));
            dispatch(MyEmail(user.email));
            dispatch(MyNAME(user.displayName));
            navigate("/mainPage/statistic")
        }
    };

    return (
        <>
           <div className="login">
               <p onClick={login} className="text-google">
                   <img  className="img-fluid" src="images/google.png" alt=""/>
                  <p> Sing in with Google</p>
               </p>
           </div>
        </>
    );
}

export default Login;