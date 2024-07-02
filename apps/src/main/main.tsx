import React from 'react'

//global style
import './reset.css'
import './main.css'

import ReactDOM from 'react-dom/client'
import { Layout } from '../../../layouts/src/Layout'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>,
)
