import { ReactNode, createContext, useState } from "react"

interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
  interruptedDate?: Date;
  finishedDate?: Date;
}

interface CyclesContextData {
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  amountSecondsPassed: number
  cycles: Cycle[]
  setCycleAsFinished: () => void
  handleSecondsPassed: (seconds: number) => void
  createCycle: (data: NewCycleFormData) => void
  interruptCycle: () => void
}

type NewCycleFormData = {
  task: string;
  minutesAmount: number;
}

export const CyclesContext = createContext({} as CyclesContextData);

interface CyclesContextProviderProps {
  children: ReactNode
}

export function CyclesContextProvider({children}: CyclesContextProviderProps) {
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);
  const [cycles, setCycles] = useState<Cycle[]>([]);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  function setCycleAsFinished() {
    setCycles(state =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, finishedDate: new Date()};
        }

        return cycle;
      })
    );

    document.title = 'Ignite Timer';
    setActiveCycleId(null);
  }

  function handleSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds);
  }

  function createCycle(data: NewCycleFormData) {
    const newCycle: Cycle = {
      id: String(new Date().getTime()),
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    setCycles((state) => [...cycles, newCycle]);
    setActiveCycleId(newCycle.id);
    setAmountSecondsPassed(0);
  }

  function interruptCycle() {
    setCycles(state =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return {...cycle, interruptedDate: new Date()};
        }

        return cycle;
      })
    );

    document.title = 'Ignite Timer';
    setActiveCycleId(null);
  }

  return (
    <CyclesContext.Provider value={{
      activeCycle,
      activeCycleId,
      amountSecondsPassed,
      cycles,
      setCycleAsFinished,
      handleSecondsPassed,
      createCycle,
      interruptCycle
    }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
