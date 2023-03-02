import React from 'react'
import "./Home.css"
import chat from "../../assets/icon-chat.png"
import money from "../../assets/icon-money.png"
import security from "../../assets/icon-security.png"


function Home() {
  return (
    <div className="container">
      <div class="hero">
        <section class="hero-content">
          <h2 class="sr-only">Promoted Content</h2>
          <p class="subtitle">No fees.</p>
          <p class="subtitle">No minimum deposit.</p>
          <p class="subtitle">High interest rates.</p>
          <p class="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>
      <section className="features">
        <h2 className="sr-only">Features</h2>
         
         {/* Chat */}

        <div className="feature-item">
            <img src={chat} alt="Chat Icon" className="feature-icon" />
            <h3 className="feature-item-title">You are our #1 priority</h3>
            <p>
                Need to talk to a representative? You can get in touch through our
                24/7 chat or through a phone call in less than 5 minutes.
            </p>
        </div>

            {/* Money */}

        <div className="feature-item">
            <img
                src={money}
                alt="Chat Icon"
                className="feature-icon"
            />
            <h3 className="feature-item-title">More savings means higher rates</h3>
            <p>
                The more you save with us, the higher your interest rate will be!
            </p>
        </div>

          {/* Security */}

        <div className="feature-item">
          <img
            src={security}
            alt="Chat Icon"
            className="feature-icon"
          />
          <h3 className="feature-item-title">Security you can trust</h3>
          <p>
            We use top of the line encryption to make sure your data and money
            is always safe.
          </p>
        </div>

      </section>
    </div>
  )
}

export default Home
