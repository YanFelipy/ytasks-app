import Notes from "../../components/Notes.tsx";

import NotesForm from "../../components/NotesForm.tsx";
import TaskForm from "../../components/TaskForm";


import NotesList from "../../components/NotesList";
import TaskList from "../../components/TaskList";

// import { ITask } from "../../interfaces/ITask";

const CreateTask = () => {

  const handleCreateTask = () => {
    document.getElementById("form-notes-box")?.classList.add("hidden")
document.getElementById("form-box")?.classList.remove("hidden")
  }

    const handleCreateNote = () => {
          document.getElementById("form-box")?.classList.add("hidden")
document.getElementById("form-notes-box")?.classList.remove("hidden")
  }


  return (
    <main className="min-h-screen flex justify-center max-w-screen ">
      <div
        id="Ref"
        className="container-tasks p-5 flex my-10 mb-0 flex-row-reverse gap-10"
      >
<div className=" flex flex-col gap-1">
        <div id="form-box" className=" form-box shadow-lg hidden rounded-xl w-120 h-min bg-white py-2 flex flex-col  items-center ">
          <h1 className="text-black text-2xl p-2 my-7" >
            Criar uma nova tarefa
          </h1>
          <TaskForm btnText="Enviar tarefa" /> 
        </div>

            <div id="form-notes-box" className=" form-notes-box  shadow-lg hidden rounded-xl w-120 h-min bg-white py-2 flex flex-col  items-center ">
          <h1 className="text-black text-2xl p-2 my-7" >
            Criar uma nova anotação
          </h1>
          <NotesForm btnText="Enviar Nota" /> 
        </div>

        </div>

<div className=" flex flex-col gap-1">

<div className="box-tasks-form w-2xl flex items-center  h-120 flex-col">
          <div className="tasks rounded-xl shadow-lg w-100 min-h 4 bg-white">
            <h1 className="text-black text-2xl p-2" >Lista de tarefas</h1>
            <TaskList textCard="Título da tarefa"  handleCreateTask={handleCreateTask}/>
          </div>
        </div>

        

             <div className="box-anotations w-2xl flex items-center  min-h-min flex-col">
          <div className="tasks rounded-xl  shadow-lg w-100 min-h 4 bg-white">
            <h1 className="text-black text-2xl p-2 my-2">Anotações</h1>
            <NotesList textCard="Título da anotação" handleCreateNote={handleCreateNote} />
          </div>
        </div>

</div>
        
        
      </div>

      <Notes />
    </main>
  );
};

export default CreateTask;
