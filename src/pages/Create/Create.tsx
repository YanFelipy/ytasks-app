// Components
import Notes from "../../components/Notes.tsx";

//Forms and lists
import NotesForm from "../../components/NotesForm.tsx";
import TaskForm from "../../components/TaskForm.tsx";
import NotesList from "../../components/NotesList.tsx";
import TaskList from "../../components/TaskList.tsx";

//Interfaces
 import type { ITask } from "../../interfaces/ITask";

 // Hooks
 import { useState } from "react";
import { useToogle } from "../../hooks/useToogle.tsx";

const Create = () => {

  const [taskList, setTaskList] = useState<ITask[]>([])
  const {toogleCreateTasks, toogleCreateNotes} = useToogle()

console.log(taskList)

  return (
    <main className="min-h-screen flex justify-center max-w-screen ">
      <div        id="Ref"
        className="container-tasks p-5 flex my-10 mb-0 flex-row-reverse gap-10 "
      >
<div className=" flex flex-col gap-1">
        <div id="form-tasks-box" className=" form-tasks-box shadow-lg hidden rounded-xl w-120 h-min bg-white py-2 flex flex-col  items-center ">
         <div className="flex justify-end w-1/1 ">
          <button className="my-2 btn-animated"onClick={toogleCreateTasks}>
            <i className="bi bi-x-lg  text-black px-8  "></i>
            </button>
         </div>
          <h1 className="text-black text-2xl p-2 mb-4 " >
            Criar uma nova tarefa
          </h1>  
          <TaskForm btnText="Enviar tarefa" taskList={taskList} setTaskList={setTaskList}/> 
        </div>

            <div id="form-notes-box" className=" form-notes-box  shadow-lg hidden rounded-xl w-120 h-min bg-white py-2 flex flex-col  items-center ">
                  <div className="flex justify-end w-1/1 ">
          <button className="my-2 btn-animated"onClick={toogleCreateTasks}>
            <i className="bi bi-x-lg  text-black px-8  "></i>
            </button>
         </div>
               <h1 className="text-black text-2xl p-2 mb-4 " >
            Criar uma nova anotação
          </h1>
          <NotesForm btnText="Enviar Nota" /> 
        </div>

        </div>

<div id="lists" className=" flex  gap-1">

<div className="box-tasks-form w-2xl flex items-center  min-h-120 flex-col">
          <div className="tasks rounded-xl shadow-lg w-120 flex flex-col justify-center items-center  min-h 4 bg-white">
             <h1 className="text-black text-2xl p-2 my-2" >Lista de tarefas</h1>
              
{taskList.length == 0 ? (
<div className="flex items-center justify-center p-4">
    <p className="text-black text-sans text-xl p-4">Você ainda não criou novas tarefas! :/ 
      </p>
  </div>
)    : "" }
      

                      {taskList && taskList.map((task) => (
               
                         <TaskList key={task.id} textCard={task.nameTask} dateTask={task.date} taskDifficulty={task.difficulty} taskId={task.id} />

  
                      ))}

            
                  
                  <div>
                    
                    <div className="flex items-center justify-center p-4">

  <button onClick={toogleCreateTasks} className=" text-black">
<i className="bi bi-pencil-square mr-2"></i>
Criar uma nova tarefa
  </button>

                    </div>
</div>

          </div>
        </div>

        

             <div className="box-notes w-2xl flex items-center  min-h flex-col">
          <div className="tasks rounded-xl  shadow-lg w-100 min-h  bg-white">  
            <NotesList textCard="Título da anotação" handleCreateNote={toogleCreateNotes} />
          </div>
        </div>

</div>
        
        
      </div>

      <Notes />
    </main>
  );
};

export default Create
