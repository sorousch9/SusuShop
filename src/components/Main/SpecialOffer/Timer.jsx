import { useState, useEffect } from "react";
import "./timer.scss";

export const Timer = (props) => {
  const [days, setDays] = useState(6);
  const [hours, setHours] = useState(24);
  const [minutes, setMinutes] = useState(59);
  const [seconds, setSeconds] = useState(59);
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
      if (seconds === 0) {
        if (minutes === 0) {
          if (hours === 0) {
            clearInterval(myInterval);
          } else {
            setHours(hours - 1);
            setMinutes(59);
            setSeconds(59);
          }
        }
      }
      if (seconds === 0) {
        if (minutes === 0) {
          if (hours === 0) {
            if (days === 0) {
              clearInterval(myInterval);
            } else {
              setDays(days - 1);
              setHours(24);
              setMinutes(59);
              setSeconds(59);
            }
          }
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <div>
      {minutes === 0 && seconds === 0 ? null : (
        <div className="timer">
          <span>{days}</span>Tage
          <span>{hours < 10 ? `0${hours}` : hours}</span>:
          <span>{minutes < 10 ? `0${minutes}` : minutes}</span> :
          <span> {seconds < 10 ? `0${seconds}` : seconds}</span>
        </div>
      )}
    </div>
  );
};
