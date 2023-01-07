import {
  Button,
  Input,
  InputWarraper,
  Title,
  Wrapper,
  Message,
} from "./CountDownTimer.styles";
import { useState, useEffect, useRef } from "react";

export default function CountDownTimer() {
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [timerStatus, setTimerStatus] = useState(false);
  const timerStoppedRef = useRef();

  useEffect(() => {
    if (timerStatus === true) {
      setTimeout(() => {
        console.log("sec...", sec);
        console.log("min...", min);
        console.log("hour...", hour);
        if (hour === 0 && min === 0 && sec === 0) {
          // timer stops
          timerStoppedRef.current = true;
          setTimerStatus(false);
        } else {
          if (sec === 0) {
            setSec(59);
            if (min === 0) {
              if (hour > 0) {
                setMin(59);
                setHour((hour) => hour - 1);
              }
            } else setMin((min) => min - 1);
          } else {
            setSec((sec) => sec - 1);
          }
        }
      }, 1000);
    }
  });

  return (
    <Wrapper>
      <Title>Counter</Title>
      <InputWarraper>
        <Input
          placeholder="hour"
          type="number"
          value={hour}
          max="24"
          readOnly={timerStatus}
          onChange={(e) => setHour(e.target.value)}
        />
        :
        <Input
          placeholder="min"
          type="number"
          value={min}
          max="60"
          readOnly={timerStatus}
          onChange={(e) => setMin(e.target.value)}
        />
        :
        <Input
          placeholder="sec"
          type="number"
          value={sec}
          max="60"
          readOnly={timerStatus}
          onChange={(e) => setSec(e.target.value)}
        />
      </InputWarraper>
      <Title style={{ fontSize: 50 }}>
        {hour} : {min} : {sec}
      </Title>
      <Button onClick={() => setTimerStatus(true)}>Start</Button>

      <Message>
        {timerStoppedRef &&
          timerStoppedRef.current === true &&
          timerStatus === false &&
          "Timer Stopped"}
      </Message>
    </Wrapper>
  );
}
