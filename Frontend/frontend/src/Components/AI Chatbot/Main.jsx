import React, { useContext } from "react"
import {
  FaCode,
  FaCompass,
  FaLightbulb,
  FaMicrophone,
  FaUserCircle,
} from "react-icons/fa"
import { FaMessage } from "react-icons/fa6"
import { MdAddPhotoAlternate } from "react-icons/md"
import { IoMdSend } from "react-icons/io"

import geminiLogo from "../../assets/images/geminiLogo.png"
import "./Chatbot.css"
import { Context } from "../../Context/Context"

const Main = () => {
  const {
    input,
    setInput,
    recentPrompt,
    showResult,
    loading,
    resultData,
    onSent,
  } = useContext(Context)

  return (
    <div className="main">
      <div className="main-content">
        {/* Top bar */}
        <div className="top-bar">
          <p>Gemini</p>
          <FaUserCircle />
        </div>

        {/* Greeting or Chat section */}
        {!showResult ? (
          <>
            <div className="greeting">
              <p>
                <span>Hello, Arya.</span>
              </p>
              <p>How can I help you today?</p>
            </div>

            <div className="suggestions">
              <div className="suggestion-card" onClick={() => onSent("Suggest top 10 webseries")}>
                <p>Suggest top 10 webseries.</p>
                <FaCompass className="card-icon" />
              </div>
              <div className="suggestion-card" onClick={() => onSent("What is loop in Javascript?")}>
                <p>What is loop in Javascript?</p>
                <FaLightbulb className="card-icon" />
              </div>
              <div className="suggestion-card" onClick={() => onSent('Who is known as the "Mother of Dragons"?')}>
                <p>Who is known as the "Mother of Dragons"?</p>
                <FaMessage className="card-icon" />
              </div>
              <div className="suggestion-card" onClick={() => onSent("Who sits on the Iron Throne at the end of the series?")}>
                <p>Who sits on the Iron Throne at the end of the series?</p>
                <FaCode className="card-icon" />
              </div>
            </div>
          </>
        ) : (
          <div className="chat-section">
            <div className="chat-question">
              <FaUserCircle className="user-icon" />
              <p>{recentPrompt}</p>
            </div>

            <div className="chat-answer">
              <img src={geminiLogo} alt="Gemini Logo" />
              {loading ? (
                <div className="w-full flex flex-col gap-2">
                  <hr className="loading-bar" />
                  <hr className="loading-bar" />
                  <hr className="loading-bar" />
                </div>
              ) : (
                <p
                  className="response"
                  dangerouslySetInnerHTML={{ __html: resultData }}
                ></p>
              )}
            </div>
          </div>
        )}

        {/* Input section */}
        <div className="input-section">
          <div className="input-box">
            <input
              type="text"
              placeholder="Enter a prompt here..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") onSent()
              }}
            />
            <div className="icon-group">
              <MdAddPhotoAlternate />
              <FaMicrophone />
              {input && <IoMdSend onClick={() => onSent(input)} />}
            </div>
          </div>

          <p className="disclaimer">
            Gemini may display inaccurate info, including about people, so
            double-check its responses.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Main
