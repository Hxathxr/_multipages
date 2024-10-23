import React, { useState, useEffect } from 'react';
import './Animation.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const ballDiameter = 100;
const fieldWidth = 600;
const fieldHeight = 500;
const maxLeft = fieldWidth - ballDiameter;
const maxTop = fieldHeight - ballDiameter;

const Animation = () => {
  const [posLeft, setPosLeft] = useState(0);
  const [posTop, setPosTop] = useState(0);
  const [goRight, setGoRight] = useState(true);
  const [goDown, setGoDown] = useState(true);
  const [running, setRunning] = useState(false);
  const [vx] = useState(5);
  const [vy] = useState(5);
  const [rotation, setRotation] = useState(0);
  const [rotationSpeed, setRotationSpeed] = useState(0);
  const [rotationDirection, setRotationDirection] = useState(1);
  const [background, setBackground] = useState('');

  const changeBallBackground = (type) => {
    const backgroundImages = {
      None: '',
      Basketball: 'url(./img/basketball.png)',
      Football: 'url(./img/football.png)',
      Volleyball: 'url(./img/volleyball.png)',
      Human: 'url(./img/human.jpg)',
      Logo: 'url(./img/logo.png)',
      Cartoon: 'url(./img/cartoon.jpg)',
    };
    setBackground(backgroundImages[type] || '');
  };

  const runClick = () => {
    setRunning(!running);
  };

  const calculate = () => {
    let newPosLeft = posLeft;
    let newPosTop = posTop;
    let newGoRight = goRight;
    let newGoDown = goDown;

    if (goRight) {
      newPosLeft += vx;
      if (newPosLeft > maxLeft) {
        newPosLeft = maxLeft;
        newGoRight = false;
        changeRotation();
      }
    } else {
      newPosLeft -= vx;
      if (newPosLeft < 0) {
        newPosLeft = 0;
        newGoRight = true;
        changeRotation();
      }
    }

    if (goDown) {
      newPosTop += vy;
      if (newPosTop > maxTop) {
        newPosTop = maxTop;
        newGoDown = false;
        changeRotation();
      }
    } else {
      newPosTop -= vy;
      if (newPosTop < 0) {
        newPosTop = 0;
        newGoDown = true;
        changeRotation();
      }
    }

    setPosLeft(newPosLeft);
    setPosTop(newPosTop);
    setGoRight(newGoRight);
    setGoDown(newGoDown);
  };

  const changeRotation = () => {
    const newRotationSpeed = Math.random() * 7 + 3;
    const newRotationDirection = Math.random() < 0.5 ? 1 : -1;
    setRotationSpeed(newRotationSpeed);
    setRotationDirection(newRotationDirection);
  };

  const renderBall = () => {
    setRotation((prevRotation) => prevRotation + rotationSpeed * rotationDirection);
  };

  const process = () => {
    if (running) {
      calculate();
      renderBall();
    }
  };

  useEffect(() => {
    const interval = setInterval(process, 8);
    return () => clearInterval(interval);
  }, [running, posLeft, posTop, rotationSpeed, rotationDirection]);

  return (
    <div id="container" style={{ margin: '10px auto', width: 'fit-content' }}>
      <div
        id="field"
        style={{
          position: 'relative',
          width: fieldWidth,
          height: fieldHeight,
          border: '1px solid black',
          backgroundColor: '#f0f0f0',
          overflow: 'hidden',
          backgroundImage: "url('./img/field.jpg')",
        }}
      >
        <div
          id="ball"
          style={{
            width: ballDiameter,
            height: ballDiameter,
            borderRadius: '50%',
            backgroundColor: 'white',
            position: 'absolute',
            left: posLeft,
            top: posTop,
            transform: `rotate(${rotation}deg)`,
            border: '1px solid black',
            backgroundImage: background,
            backgroundSize: '100%',
            transformOrigin: 'center',
          }}
        ></div>
      </div>
      <div id="controls" className="d-flex flex-wrap gap-2 mt-3">
        <button className={`btn btn-${running ? 'danger' : 'success'}`} onClick={runClick}>
          <i className={`bi bi-${running ? 'pause' : 'play'}`}></i> {running ? 'Stop' : 'Run'}
        </button>
        <button className="btn btn-outline-primary" onClick={() => changeBallBackground('None')}>none</button>
        <button className="btn btn-outline-primary" onClick={() => changeBallBackground('Basketball')}>basketball</button>
        <button className="btn btn-outline-primary" onClick={() => changeBallBackground('Football')}>football</button>
        <button className="btn btn-outline-primary" onClick={() => changeBallBackground('Volleyball')}>volleyball</button>
        <button className="btn btn-outline-primary" onClick={() => changeBallBackground('Human')}>human</button>
        <button className="btn btn-outline-primary" onClick={() => changeBallBackground('Cartoon')}>cartoon</button>
        <button className="btn btn-outline-primary" onClick={() => changeBallBackground('Logo')}>logo</button>
      </div>
    </div>
  );
};

export default Animation;
