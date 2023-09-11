import './index.css'
import React from "react";
import ReactDom from 'react-dom/client'
import App from "./App";

const el = document.querySelector('#root')
const root = ReactDom.createRoot(el)

root.render(<App/>)
