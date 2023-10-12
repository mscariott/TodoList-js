import './global.css'
import styles from './App.module.css'
import clipboar from './assets/Clipboard.svg'
import { Header } from './components/Header'
import { Input } from './components/Input'
import { Task } from './components/Task'
import { PlusCircle } from "@phosphor-icons/react"

import { useState } from 'react'

export interface TaskType {
  id: number;
  text: string;
  done: boolean;
}



function App() {

  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [cont, setCont] = useState(0)
  const [newTaskText, setNewTaskText] = useState('')

  function handleCreateNewTask() {
    setTasks(prevState => {
      const newtask =
        [...prevState,
        {
          id: cont,
          text: newTaskText,
          done: false
        }]
   
      return newtask
    })

    setNewTaskText("")

    setCont(prevState => prevState + 1)
  }

  function handleCheck(taskFinished: TaskType) {


    setTasks(prevState => {

      const newState = [...prevState];
      const index = newState.indexOf(taskFinished)
      newState[index].done = !newState[index].done;
      return newState
    })
  }

  function handleDelete(taskDeleted: number) {

    setTasks(tasks.filter(task => task.id !== taskDeleted))
  }


  return (
    <>
      <Header />
      <main>
        <div className={styles.addTask}>
          <Input
            placeholder="Adicione uma nova tarefa"
            value={newTaskText}
            onChange={(e) => setNewTaskText(e.target.value)}
          />

          <button onClick={handleCreateNewTask}> <p>Criar</p> <PlusCircle size={16} /> </button>
        </div>

        <div className={styles.menu}>

          <nav>
            <div className={styles.createdTasks}>
              <span>Tarefas criadas</span>
              <p>{tasks.length}</p>
            </div>
            <div className={styles.tasksDone}>
              <span>Concluídas</span>
              <p>0</p>
            </div>
          </nav>


          {tasks.length > 0 ?
            < div className={styles.content}>
              {
                tasks.map((task) => (
                  <Task
                    key={task.id}
                    data={task}
                    onHandleCheck={handleCheck}
                    onHandleDeleted={handleDelete}
                  />
                ))
              }
            </div>
            :
            <div className={styles.empty}>
              <img src={clipboar} alt="Imagem de uma prancheta de anotações" />
              <h1>Você ainda não tem tarefas cadastradas</h1>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          }

        </div>
      </main >


    </>
  )
}

export default App
