import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import ReactGA from "react-ga4";

ReactGA.initialize("G-X1Z5D2LKWT", {
  gaOptions: {
    debug_mode: true, // 👈 VERY IMPORTANT
  },
});
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
