import {
  Button,
  Input,
  InputWarraper,
  Title,
  Wrapper,
  Message,
  ButtonContainer,
} from "./CountDownTimer.styles";
import { useState, useEffect, useRef } from "react";
import ReactAudioPlayer from "react-audio-player";

export default function CountDownTimer() {
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [timerStatus, setTimerStatus] = useState(false);
  const timerStoppedRef = useRef();
  const audioRef = useRef();
  const [audio] = useState(
    typeof Audio !== "undefined" && new Audio("beep.mp3")
  );

  const resetTimer = () => {
    setTimerStatus(false);
    setHour(0);
    setMin(0);
    setSec(0);
    timerStoppedRef.current = null;
  };

  const formatTime = (timeNumber) => {
    if (timeNumber.toString().length === 1) {
      return "0" + timeNumber.toString();
    } else return timeNumber.toString();
  };

  useEffect(() => {
    if (timerStatus === true) {
      setTimeout(() => {
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

  useEffect(() => {
    if (timerStoppedRef?.current && !timerStatus) {
      audio.play();
    }
  }, [timerStatus]);

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
        {formatTime(hour)} : {formatTime(min)} : {formatTime(sec)}
      </Title>

      <ButtonContainer>
        <Button onClick={() => setTimerStatus(true)}>Start</Button>
        <Button onClick={() => setTimerStatus(false)}>Stop</Button>
        <Button onClick={resetTimer}>Reset</Button>
      </ButtonContainer>

      <Message>
        {timerStoppedRef &&
          timerStoppedRef.current === true &&
          timerStatus === false &&
          "Time is Over!!!"}
      </Message>
    </Wrapper>
  );
}
