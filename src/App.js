import React, { useRef, useEffect } from 'react';
import './App.css';
import { gsap } from "gsap";
import girl from "./images/MeditatingDoodle.png";
import boy from "./images/ZombieingDoodle.png";
import box from "./images/UnboxingDoodle.png";


function App() {
    let text = useRef(null);
    let text2 = useRef(null);


    useEffect(() => {
        gsap.fromTo(
            text,
            {
                repeat: -1,
                x: 0,
                ease: "linear",
                duration: 10
            },
            {
                repeat: -1,
                x: -220,
                ease: "linear",
                duration: 6
            }
        )
    }, []);

  return (
    <div className="App">

    <div className="header">
        <h1 className="header-text" ref={element => {text = element}}>
            <span>Slow Pulse Sunday</span>
            <span>Slow Pulse Sunday</span>
            <span>Slow Pulse Sunday</span>
            <span>Slow Pulse Sunday</span>
            <span>Slow Pulse Sunday</span>
            <span>Slow Pulse Sunday</span>
            <span>Slow Pulse Sunday</span>
            <span>Slow Pulse Sunday</span>
            <span>Slow Pulse Sunday</span>
            <span>Slow Pulse Sunday</span>
            <span>Slow Pulse Sunday</span>
        </h1>
    </div>

  <div className="landing">
  <div>
  <h1>Slow Pulse</h1>

      <img src={girl}/>

      <h1>Sunday</h1>

      </div>
  </div>

  <div className=" section values container-fluid">
  <h3>We believe in...</h3>
      <div className="row">
          <div className="col-md">
              <h6>Paying artists fairly</h6>
              <p>We say no to “paying with exposure.” 50% of all profits go directly to you.</p>

          </div>

          <div className="col-md">
              <h6>Producing sustainably</h6>
              <p>Sustainable consumption is the future. We use environmentally friendly fabrics and print on demand to minimize inventory waste</p>
          </div>

          <div className="col-md">
              <h6>Inclusivity</h6>
              <p>Diversity isn’t just a catchphrase to us. We are dedicated to spotlighting artists of all genders, identities and backgrounds.</p>

          </div>
      </div>
      </div>

      <div className="section business">
      <h3>How it Works</h3>
      <div className="row">
          <div className="col-md">
              <h6>You draw</h6>
              <img src={boy}/>
              <p>We say no to “paying with exposure.” 50 percent of all profits go directly to you.</p>

          </div>

          <div className="col-md">
              <h6>We produce</h6>
              <img src={box}/>

              <p>Sustainable consumption is the future. We use environmentally friendly fabrics and print on demand to minimize inventory waste</p>
          </div>

          <div className="col-md">
              <h6>We ship</h6>
              <img src={box}/>
              <p>Diversity isn’t just a catchphrase to us. We are dedicated to spotlighting artists of all genders, identities and backgrounds.</p>

          </div>
      </div>
      </div>
</div>
  );
}

export default App;
