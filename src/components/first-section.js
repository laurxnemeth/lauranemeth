import headshot from '../pictures/headshot.jpg';
import InfoModal from './InfoModal'
import Button from 'react-bootstrap/Button'
import React from 'react';

export default function NameAndHeadshot() {
  const [modalShow, setModalShow] = React.useState(false);

  return(
    <div id="first-section">
      <div id="top-section">
        <h3 id="title">front-end engineer</h3>
        <span class="sub" onClick={() => setModalShow(true)}>wanna chat? click here!</span>
        {/* link opens module with contact me info*/}
      </div>
      <div id="name-and-headshot">
        <div>
          <h1 className="name">Laura</h1>
          <h1 className="name">Nemeth</h1>
        </div>
        <div id="wrap">
          <div id="decorative-circle"></div>
          <img
            className="headshot"
            src={headshot}
            alt="Headshot of Laura Nemeth, they stand in front of trees whilst wearing a colorful button up shirt"
          />
        </div>
      </div>
      <InfoModal show={modalShow} onHide={() => setModalShow(false)} />
  </div>
  );
};