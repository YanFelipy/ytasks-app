import Notes from "../../components/Notes.tsx";

import NotesForm from "../../components/NotesForm.tsx";
import TaskForm from "../../components/TaskForm";


import NotesList from "../../components/NotesList";
import TaskList from "../../components/TaskList";

// import { ITask } from "../../interfaces/ITask";

const CreateTask = () => {


  return (
    <main className="min-h-screen flex justify-center max-w-screen ">
      <div
        id="Ref"
        className="container-tasks p-5 bg-gray-200 flex my-10 mb-0 flex-row-reverse gap-10"
      >
        <div className=" form-box rounded-xl w-120 h-min bg-white py-2 flex flex-col  items-center ">
          <h1 className="text-black text-2xl p-2 my-7" >
            Criar uma nova tarefa
          </h1>
          <TaskForm btnText="Enviar tarefa" /> 
        </div>

            <div className=" form-box rounded-xl w-120 h-min bg-white py-2 flex flex-col  items-center ">
          <h1 className="text-black text-2xl p-2 my-7" >
            Criar uma nova anotação
          </h1>
          <NotesForm btnText="Enviar Nota" /> 
        </div>

<div className=" flex flex-col gap-5">

<div className="box-tasks-form w-2xl flex items-center  h-min flex-col">
          <div className="tasks rounded-xl w-100 h-80 4 bg-white">
            <h1 className="text-black text-2xl p-2" >Lista de tarefas</h1>
            <TaskList textCard="Título da tarefa" />
          </div>
        </div>

        

             <div className="box-anotations w-2xl flex items-center  min-h-min flex-col">
          <div className="tasks rounded-xl w-100 h-80 4 bg-white">
            <h1 className="text-black text-2xl p-2 my-2">Anotações</h1>
            <NotesList textCard="Título da anotação"/>
          </div>
        </div>

</div>
        
        
      </div>

      <Notes />
    </main>
  );
};

export default CreateTask;
