import { useContext, useEffect } from "react";
import { CountdownContainer, Separator } from "./styles";
import { differenceInSeconds } from "date-fns";
import { CyclesContext } from "../../../../contexts/CyclesContextProvider";

interface CountDownProps {
  resetForm: () => void
}

export function Contdown({resetForm}: CountDownProps) {
  const { activeCycle, setCycleAsFinished, amountSecondsPassed, handleSecondsPassed } = useContext(CyclesContext);
  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;

  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;
  const minutesAmount = Math.floor(currentSeconds / 60);
  const secondsAmount = currentSeconds % 60;
  const minutes = String(minutesAmount).padStart(2, '0');
  const seconds = String(secondsAmount).padStart(2, '0');

  useEffect(() => {
    if (!activeCycle) {
      return
    }

    document.title = `${minutes}:${seconds}`;
  }, [minutes, seconds, activeCycle])


  useEffect(() => {
    let interval: number;
    if (!activeCycle) {
      return;
    }

    interval = setInterval(() => {
      const secondsPassed = differenceInSeconds(new Date(), activeCycle.startDate);
      if (secondsPassed >= totalSeconds) {
        setCycleAsFinished();

        handleSecondsPassed(totalSeconds);
        clearInterval(interval)
        resetForm();
        return;
      }

      handleSecondsPassed(secondsPassed);
    }, 1000);

    return () => {
      clearInterval(interval);
    }
  }, [activeCycle]);

  return (
    <CountdownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Separator>:</Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountdownContainer>
  )
}
