import React from 'react'
import Sidebar from './Sidebar'

import './Chatbot.css'
import Main from './Main'
import ContextProvider from '../../Context/Context'
const Chatbot = () => {
  return (
    <ContextProvider>
      <div className="chatbot-wrapper">
      <Sidebar/>
      <Main/>
      </div>
    </ContextProvider>
      

  )
}

export default Chatbot
