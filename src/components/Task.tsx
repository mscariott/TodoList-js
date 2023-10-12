import styles from "./Task.module.css"
import { Check, Trash } from "@phosphor-icons/react";
import { TaskType } from "../App";

export interface TaskProps{
  data: TaskType;
  onHandleCheck: (value: TaskType) => void;
  onHandleDeleted: (value: number) => void;
}


export function Task({data, onHandleCheck,onHandleDeleted}: TaskProps){

  function handleCheckTask(){
    onHandleCheck(data);
  }

  return(
  <div className={data.done ? styles.done : styles.tasks}>

    <button type ="button" onClick={handleCheckTask}>
      {data.done && <Check size={12} weight="bold"/>}
    </button>

    <p>{data.text}</p>

    <button>
      <Trash type ="button" onClick={() => onHandleDeleted(data.id)} size={14}/>
    </button>
  </div>
  )

}