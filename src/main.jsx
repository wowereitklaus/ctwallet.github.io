import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.jsx'
import '@/index.css'
import GlobalProvider from '@/contexts/GlobalContext'

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrateRoot(
    rootElement,
    <GlobalProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </GlobalProvider>
  );
} else {
  ReactDOM.createRoot(rootElement).render(
    <GlobalProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </GlobalProvider>
  );
}