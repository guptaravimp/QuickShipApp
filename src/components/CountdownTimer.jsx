import React, { useState, useEffect } from 'react';

export default function CountdownTimer({ cutoffTime }) {
  const [timeLeft, setTimeLeft] = useState(cutoffTime * 3600);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours}h ${minutes}m ${seconds}s`;
  };

  return <div className='flex   mr-4 ml-4 mb-4 gap-2'>Time Left for Same-day Delivery: <p id='timeleft'>{formatTime(timeLeft)}</p></div>;
}
