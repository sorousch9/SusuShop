import { useState, useEffect } from "react";
interface TimerState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
export const Timer = () => {
  const [timer, setTimer] = useState<TimerState>({
    days: 6,
    hours: 24,
    minutes: 59,
    seconds: 59,
  });
  useEffect(() => {
    const myInterval = setInterval(() => {
      setTimer((prevTimer) => {
        const { days, hours, minutes, seconds } = prevTimer;
        if (seconds > 0) {
          return { ...prevTimer, seconds: seconds - 1 };
        }
        if (minutes === 0 && seconds === 0) {
          if (hours === 0) {
            if (days === 0) {
              clearInterval(myInterval);
              return prevTimer;
            }
            return { days: days - 1, hours: 24, minutes: 59, seconds: 59 };
          }
          return { ...prevTimer, hours: hours - 1, minutes: 59, seconds: 59 };
        }
        return { ...prevTimer, minutes: minutes - 1, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(myInterval);
  }, []);

  return (
    <div>
      {timer.minutes === 0 && timer.seconds === 0 ? null : (
        <div className="timer">
          <span>{timer.days}</span>Tage
          <span>{timer.hours < 10 ? `0${timer.hours}` : timer.hours}</span>:
          <span>
            {timer.minutes < 10 ? `0${timer.minutes}` : timer.minutes}
          </span>{" "}
          :
          <span>
            {" "}
            {timer.seconds < 10 ? `0${timer.seconds}` : timer.seconds}
          </span>
        </div>
      )}
    </div>
  );
};
