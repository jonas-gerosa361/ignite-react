import { useContext } from "react";
import { HistoryContainer, HistoryList, Status } from "./styles"
import { CyclesContext } from "../../contexts/CyclesContextProvider";
import { formatDistanceToNow } from "date-fns";

export function History() {
  const { cycles } = useContext(CyclesContext);
  return (
    <HistoryContainer>
      <h1>Task history</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Duration</th>
              <th>Started</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {cycles.map(cycle => {
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.minutesAmount} minutes</td>
                  <td>
                    {formatDistanceToNow(cycle.startDate, {
                      addSuffix: true
                    })}
                  </td>
                  <td>
                    { cycle.finishedDate && <Status statusColor="green">Finished</Status> }
                    { cycle.interruptedDate && <Status statusColor="red">Canceled</Status> }
                    { (!cycle.finishedDate && !cycle.interruptedDate) && <Status statusColor="yellow">In Progress</Status> }
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
}
