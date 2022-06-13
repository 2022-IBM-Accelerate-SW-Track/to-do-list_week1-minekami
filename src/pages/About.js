import React, { Component } from 'react';
import "./About.css";
import MePhoto from "../assets/MePhoto.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        <div class="split left">
          <div className="centered">
            <img 
              className="profile_image"
              src={MePhoto}
              alt="Profile Pic"
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Andrew Mimura</div>
            <div className="brief_description">
              Rising Junior at Pepperdine University.
              Majoring in Computer Science with a minor in Data Science.
              Interests include MMA, Video Games, and Baking. 
              Hidden Talent for Foosball.
            </div>
          </div>
        </div>
      </div>
    )
  }
}