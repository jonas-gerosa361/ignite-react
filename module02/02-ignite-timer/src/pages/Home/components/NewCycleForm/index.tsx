import { useContext } from "react";
import { FormContainer, MinutesDurationInput, TaskINput } from "./styles";
import { CyclesContext } from "../..";
import { useFormContext } from "react-hook-form";

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext);
  const { register } = useFormContext();

  return (
    <FormContainer>
      <label htmlFor="task">Work to be done: </label>

      <TaskINput
        id="task"
        list="task-suggestions"
        type="text"
        placeholder="Enter the task's name"
        disabled={!!activeCycle}
        {...register('task')}
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
          disabled={!!activeCycle}
          {...register('minutesAmount', { valueAsNumber: true})}
        />

      <span> minutes.</span>
    </FormContainer>
  )
}
