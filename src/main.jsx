import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from "react-hot-toast";
import store from './app/Store.js';
import { Provider } from 'react-redux'



createRoot(document.getElementById('root')).render(
 <Provider store={store}>
     <StrictMode>
    <>
     <App />
     <Toaster position="top-right" />
    </>
   
  </StrictMode>,
 </Provider>
)
