import React from 'react';
import { observer } from "mobx-react-lite";
// import {Portfolio} from "./pages/portfolio/portfolio";
// import {Login} from "./pages/auth/Login/Login";
import { Routes, Route } from 'react-router-dom'
import { app } from "@/app/constants";
import { Alert, WindowWrapper } from "@/lib/ui";

export const App = observer(() => {

    if (!app.isAppReady) return null
    return (
        <div>
            <Routes>
                {/* <Route path={'/auth'} element={<Login/>}/> */}
                {/* <Route path={'/*'} element={<Portfolio/>}/> */}
            </Routes>
            {
                app.windowContent &&
                <WindowWrapper>
                    {
                        app.windowContent
                    }
                </WindowWrapper>
            }
            {
                app.alertMessage &&
                <Alert>
                    {
                        app.alertMessage
                    }
                </Alert>
            }
        </div>
    );
})
