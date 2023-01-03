import { HandPalm, Play } from "phosphor-react";
import { HomeContainer, StartCountdownButton, StopCountdownButton } from "./styles";
import { NewCycleForm } from "./components/NewCycleForm";
import { Contdown } from "./components/Contdown";
import { FormProvider, useForm } from "react-hook-form";
import * as zod from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { CyclesContext } from "../../contexts/CyclesContextProvider";

export function Home() {
  const { activeCycle, createCycle, interruptCycle } = useContext(CyclesContext);

  const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, 'Insert the task\'s name'),
    minutesAmount: zod.number().min(1).max(60),
  })

  // Valid option to be used.
  // interface NewCycleFormData {
  //   task: string;
  //   minutesAmount: number
  // }

  // Another option is to use zod to auto generate our type
  type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    }
  });

  const { handleSubmit, watch, reset } = newCycleForm;

  function resetForm() {
    console.log('passei aqui');
    reset();
  }

  function handleInterruptCycle() {
    interruptCycle()
    reset();
  }

  const isSubmitDisabled = !watch('task');

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(createCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Contdown resetForm={resetForm} />

        { activeCycle ? (
          <StopCountdownButton onClick={handleInterruptCycle} type="button">
            <HandPalm size={24} />
              Stop
          </StopCountdownButton>
        ) : (
          <StartCountdownButton disabled={isSubmitDisabled} type="submit">
            <Play size={24} />
              Start
          </StartCountdownButton>
        )
        }
      </form>
    </HomeContainer>
  );
}
