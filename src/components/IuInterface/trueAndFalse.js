import React, {useContext} from 'react';
import {Routes, Route, useNavigate, Navigate} from "react-router-dom";
import Login from "./Login";
import {Context} from "../../index";
import {useAuthState} from "react-firebase-hooks/auth";
import {proviteRoutes, publicRoutes} from "./Routes";
import {CHAT_ROUTE, LOGIN_ROUTE} from "./router/router";

function TrueAndFalse(props) {

    const {auth} = useContext(Context);
    const user = false


    const [color, setColor] = React.useState(false);


    return (
        user ?
            (<Routes>
                {proviteRoutes.map(({path, component})=>(
                    <Route path={path} element={component} exact={true}/>
                ))}

            </Routes>)
            :
            (<Routes>
                {publicRoutes.map(({path, component})=>(
                    <Route path={path} element={component} exact={true}/>
                ))}

            </Routes>)
    )
}

export default TrueAndFalse;