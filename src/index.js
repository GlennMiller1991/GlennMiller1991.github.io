import {createRoot} from "react-dom/client";
import {App} from "./app/app";

const root = document.getElementById('root')
root && createRoot(root).render(<App/>)
