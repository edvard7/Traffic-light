import React, { useState, useEffect } from 'react';
import './TrafficLight.css';

const TrafficLight = () => {
  const [color, setColor] = useState('red');

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (color === 'red') {
        setColor('green');
      } else if (color === 'green') {
        setColor('yellow');
      } else {
        setColor('red');
      }
    }, 3000);

    return () => clearTimeout(timeout);
  }, [color]);

  return (
    <div className="traffic-light">
      <div className={`light ${color === 'red' ? 'red' : ''}`}></div>
      <div className={`light ${color === 'yellow' ? 'yellow' : ''}`}></div>
      <div className={`light ${color === 'green' ? 'green' : ''}`}></div>
    </div>
  );
}

export default TrafficLight;