import React, {useContext} from "react";
import MainInterface from "./components/IuInterface/mainInterface";
import {Context} from "./index";
import Login from "./components/IuInterface/Login";
import {useAuthState} from "react-firebase-hooks/auth";
import {Routes, Route} from "react-router-dom"
import PageNotFound from "./components/IuInterface/page_not_found";




function App() {
    const {auth} = useContext(Context);
    const user = useAuthState(auth);

    return (
        <>
            {/*<PageNotFound/> */}
            <Routes>
                <Route path="/" exact={true} element={<Login/>}/>
                <Route path="/mainPage/*" exact={true} element={<MainInterface/>}/>
                <Route path="/*" exact={true} element={<PageNotFound/>}/>
            </Routes>

        </>
    )
}
export default App;
