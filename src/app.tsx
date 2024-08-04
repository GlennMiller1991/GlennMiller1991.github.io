import React from 'react';
import { observer } from "mobx-react-lite";
// import {Portfolio} from "./pages/portfolio/portfolio";
// import {Login} from "./pages/auth/Login/Login";
import { Routes, Route } from 'react-router-dom'
import { app } from "@/app/constants";
import { Alert } from "@/lib/ui/alert/Alert";
import { WindowWrapper } from '@/lib/ui/window-wrapper/window-wrapper';

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
