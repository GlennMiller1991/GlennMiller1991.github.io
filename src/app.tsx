import React from 'react';
// import {WindowWrapper} from './common/components/WindowWrapper/WindowWrapper'
import { observer } from "mobx-react-lite";
// import {Portfolio} from "./pages/portfolio/portfolio";
// import {Login} from "./pages/auth/Login/Login";
import { Routes } from 'react-router-dom'
import { app } from "./app/constants";
import { Alert } from "./lib/ui/Alert/Alert";

console.log('test')
export const App = observer(() => {

    if (!app.isAppReady) return null
    return (
        <div>
            <Routes>
                {/*<Route path={'/auth'} element={<Login/>}/>*/}
                {/*<Route path={'/*'} element={<Portfolio/>}/>*/}
            </Routes>
            {/*{*/}
            {/*    app.windowContent &&*/}
            {/*    <WindowWrapper>*/}
            {/*        {*/}
            {/*            app.windowContent*/}
            {/*        }*/}
            {/*    </WindowWrapper>*/}
            {/*}*/}
            {
                // app.alertMessage &&
                <Alert>
                    app.alertMessage
                </Alert>
            }
        </div>
    );
})
