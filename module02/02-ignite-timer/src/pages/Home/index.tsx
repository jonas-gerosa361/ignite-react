import { Play } from "phosphor-react";
import { CountdownContainer, FormContainer, HomeContainer, MinutesDurationInput, Separator, StartCountdownButton, TaskINput } from "./styles";
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Insert the task\'s name'),
  minutesAmount: zod.number().min(5).max(60),
})

// Valid option to be used.
// interface NewCycleFormData {
//   task: string;
//   minutesAmount: number
// }

// Another option is to use zod to auto generate our type
type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {
  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    }
  });

  function handleCreateNewCycle(data: NewCycleFormData) {
    console.log(data);
    reset();
  }

  const isSubmitDisabled = !watch('task');

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormContainer>
          <label htmlFor="task">Work to be done: </label>

          <TaskINput
            id="task"
            list="task-suggestions"
            type="text"
            placeholder="Enter the task's name"
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
            {...register('minutesAmount', { valueAsNumber: true})}
          />

          <span> minutes.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton disabled={isSubmitDisabled} type="submit">
          <Play size={24} />
          Start
        </StartCountdownButton>
      </form>
    </HomeContainer>
  );
}
