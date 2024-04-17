import React from 'react'
import { Provider } from 'react-redux'
import './scss/global.scss'
import App from './components/app'
import reportWebVitals from './reportWebVitals'
import store from "./services/store"
import { HTML5Backend } from "react-dnd-html5-backend"
import { DndProvider } from "react-dnd"
import {createRoot} from "react-dom/client";

const rootContainer = document.getElementById('root');

if (rootContainer) {
    const root = createRoot(rootContainer);

    root.render(
        <React.StrictMode>
            <Provider store={store}>
                <DndProvider backend={HTML5Backend}>
                    <App />
                </DndProvider>
            </Provider>
        </React.StrictMode>
    );

    reportWebVitals();
} else {
    console.error("Не найден корневой контейнер");
}