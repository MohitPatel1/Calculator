import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

// Initialize OneSignal
window.OneSignal = window.OneSignal || [];
OneSignal.push(function() {
  OneSignal.init({
    appId: "76e82076-dd38-4313-a8f2-c828f8a71a73",
    notifyButton: {
      enable: true,
    },
  });
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
