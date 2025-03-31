import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

useEffect(() => {
  // Ensure this code runs only on the client side
  if (typeof window !== 'undefined') {
    OneSignal.init({
      appId: '76e82076-dd38-4313-a8f2-c828f8a71a73',
      // You can add other initialization options here
      notifyButton: {
        enable: true,
      },
      // Uncomment the below line to run on localhost. See: https://documentation.onesignal.com/docs/local-testing
      allowLocalhostAsSecureOrigin: true
    });
  }
}, []);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
