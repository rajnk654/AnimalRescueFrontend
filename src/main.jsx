import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './Context/auth.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  
  <BrowserRouter>
  <AuthProvider>
  <GoogleOAuthProvider clientId="891906603364-pl6phg11ggdsgvn0482fuc4qjq5tmpgh.apps.googleusercontent.com">
    <App />
    </GoogleOAuthProvider >
    </AuthProvider>
  </BrowserRouter>
  </>
)
