import React, { useRef, useEffect } from 'react';
import './App.css';
import { gsap } from "gsap";
import girl from "./images/MeditatingDoodle.png";
import boy from "./images/ZombieingDoodle.png";
import box from "./images/UnboxingDoodle.png";
import curate from "./images/MessyDoodle.png";
import about from "./images/CoffeeDoddle.png";
import Questions from './Questions.js';

import { GrMailOption } from 'react-icons/gr';


function App() {
    let text = useRef(null);
    let text2 = useRef(null);
    var leftarrow = '\u27f6';
    var rightarrow = '\u27f5';

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
                x: -240,
                ease: "linear",
                duration: 6
            }
        )
    }, []);

  return (
    <div className="App">

    <div className="header">
        <p className="header-text" ref={element => {text = element}}>
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
        </p>
    </div>

  <div className="landing container-fluid">
  <div className="row">
 <div className="col-md-7">

  <h1>Slow Pulse Sunday</h1>
      <h6>Slow Pulse Sunday is a sustainable clothing brand dedicated to supporting artists.
      We release curated collections with original artwork from our favorite artists.</h6>
</div>
<div className="col-md-5">
 <img src={girl}/>
 </div>
      </div>
  </div>

  <div className="section values container-fluid">
  <div className="row heading">
  <h4>We subscribe to the not-so-radical notion that brands are socially accountable.</h4>
  </div>
      <div className="row">
          <div className="col-md">
              <h5>TRANSPARENCY</h5>
              <p>Anyone can see a full breakdown of our production costs,
              our markup price, and the exact amount going to our artists.</p>

          </div>

          <div className="col-md">
              <h5>SUSTAINABILITY</h5>
              <p>Sustainable consumption is the future. Our print-on-demand model means no item goes to waste.
              We only source our fabrics from environmentally-conscious companies.</p>
          </div>

          <div className="col-md">
              <h5>INCLUSIVITY</h5>
              <p>Diversity isn’t just a buzz word to us.
              We are dedicated to highlighting artists of all identities and backgrounds.</p>

          </div>
      </div>
      </div>

      <div className="section business">
      <h3>How we work</h3>
      <div className="row">
          <div className="col-md">
              <h5>You create</h5>
              <img src={boy}/>
              <p>You create artwork on your own terms.
              On the last week of every month, we take designs for our next collection.</p>

          </div>

          <div className="col-md">
              <h5>We curate + produce + ship</h5>
              <img src={curate}/>
              <p>We carefully curate a collection that spotlights diverse voices and
              our artists work with us to design how their clothing piece looks.
              We take care of pricing, production, and shipping. </p>
          </div>

          <div className="col-md">
              <h5>You get paid!</h5>
              <img src={box}/>
              <p>We're creatives too, and we say no to paying with exposure.
             Artists are paid 50% of the profits from their sales.</p>
          </div>
      </div>
      </div>

      <div className="section artists">
      <h3>Be part of our next artist cohort</h3>
      <div>
      <p>Fill out the form below and we'll be in touch!</p>
      <a id="link" href="https://slowpulsesunday.typeform.com/to/L7tQRZs4">I'm ready!</a>
</div>
      </div>

      <div className="section faq">
      <h3>FAQ</h3>
          <div className="faq-div">
          <Questions />
          </div>
          <h5>MORE QUESTIONS?</h5>
         <p>{leftarrow} hello@slowpulsesunday.com {rightarrow}</p>
      </div>

      <div className="section about container-fluid">
      <h3>The humans behind it all</h3>
          <div className="row">
          <div className="col-md">
            <img src={about}/>
          </div>
          <div className="col-md">
          <h5>HELLO!</h5>
          <p>Slow Pulse Sunday was created with lots of love (and coffee) by Christine, Alex, and Catherine.
          We are students at Brown University, George Washington University, and Bryn Mawr College.</p>
            <h5>TALK TO US</h5>
            <p>hello@slowpulsesunday.com</p>
           </div>
          </div>
      </div>
</div>
  );
}

export default App;
