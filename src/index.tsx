import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './scss/global.scss'
import App from './components/app'
import reportWebVitals from './reportWebVitals'
import store from "./services/store.js"
import {HTML5Backend} from "react-dnd-html5-backend"
import {DndProvider} from "react-dnd"

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <DndProvider backend={HTML5Backend}>
                <App />
            </DndProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()