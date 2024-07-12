import {App} from "./app/app";
import {StrictMode} from "react";
import {createRoot} from "react-dom/client";

const root = document.getElementById('root')
root && createRoot(root).render(
    <StrictMode>
        <App/>
    </StrictMode>
)
