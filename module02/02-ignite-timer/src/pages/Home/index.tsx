import { Play } from "phosphor-react";
import { CountdownContainer, FormContainer, HomeContainer, MinutesDurationInput, Separator, StartCountdownButton, TaskINput } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <FormContainer>
        <div>
          <label htmlFor="task">Work to be done: </label>

          <TaskINput
            id="task"
            list="task-suggestions"
            type="text"
            placeholder="Enter the task's name"
          />

          <datalist id="task-suggestions">
            <option value="Project 1" />
            <option value="Project 2" />
            <option value="Project 3" />
          </datalist>

          <label htmlFor="minutesDuration">For: </label>
          <MinutesDurationInput
            id="minutesDuration"
            type="number"
            placeholder="00"
            step={5}
            min={5}
            max={60}
          />

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
