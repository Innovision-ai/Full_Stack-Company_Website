import React from 'react'
import './SecondProduct.css'
import lady from "../../../../assets/Lady.png"
import Line from "../../../../assets/Line.png"
import RedLocation from "../../../../assets/RedLocation.png"
import "./SecondProduct.css"
const SecondProduct = () => {
  return (
    <>
    <div className="travel-container">
                <img src={RedLocation} alt="Location" className="travel-icon" />
      <div className="travel-heading">
        <h2>My Travel AI</h2>
      </div>

      <h1 className="travel-subtitle">
        <span>Plan Your Flights, Hotels & Tour With </span>
        <span className="ai-text">AI</span>
      </h1>

      <div className="travel-main-content">
        <div className="chat-bubbles">
          <div className="bubble">Which hotels in Shimla offer mountain views?</div>
          <div className="bubble">Best places in Manali?</div>
          <div className="bubble long">
            I have 4 days between two business meetings in Singapore. What can I explore in that time, and where can I stay close to the airport?
          </div>
          <div className="bubble">Do I need Visa for Bali?</div>
        </div>

        <div className="graphic-area">
          <img src={Line} alt="Line" className="dotted-line" />
          <img src={lady} alt="Lady with luggage" className="lady-image" />
        </div>

        <div className="travel-btn-wrap">
        <button
  className="travel-button"
  onClick={() => window.location.href = 'https://innovisontech.com/travel-agent-ai/'}
>
  Explore AI
</button>
        </div>
      </div>
    
    </div>
      
    </>
  )
}

export default SecondProduct
