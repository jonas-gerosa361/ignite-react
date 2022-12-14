import { Play } from "phosphor-react";
import { CountdownContainer, FormContainer, HomeContainer, Separator, StartCountdownButton } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <FormContainer>
        <div>
          <label htmlFor="task">Work to be done: </label>
          <input id="task" type="text" />

          <label htmlFor="minutesDuration">For: </label>
          <input id="minutesDuration" type="number" />

          <span> minutes.</span>
        </div>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton type="submit">
          <Play size={24} />
          Start
        </StartCountdownButton>
      </FormContainer>
    </HomeContainer>
  );
}
