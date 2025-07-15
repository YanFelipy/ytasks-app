import {
  useState,
  type ChangeEvent,
  type FormEvent /* type useEffect  */,
} from "react";

//interfaces
import type { ITask } from "../interfaces/ITask.tsx";

//hooks
import {useToogle} from '../hooks/useToogle.tsx'

interface Props {
  btnText: string;
  taskList: ITask[];
  setTaskList: React.Dispatch<React.SetStateAction<ITask[]>>;
}

const TaskForm = ({ btnText, taskList, setTaskList }: Props) => {

const {toogleCreateTasks } = useToogle()

  //states
  const [id, setId] = useState<number>(0);
  const [error, setError] = useState<string>("");
  const [nameTask, setNameTask] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(0);
  const [date, setDate] = useState<Date>(new Date());


  const formatDate = new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "short",
    timeStyle: "short",
    timeZone: "America/Sao_Paulo",
  });

  const now = formatDate.format(new Date());

  //events
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name == "nameTask") {
      setNameTask(e.target.value);
    } else if (e.target.name == "difficulty") {
      setDifficulty(e.target.valueAsNumber);
    } else {
      setDate(new Date(e.target.value));
    }
  };

  const submitCreateTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const selectedDate = formatDate.format(date);
  
    if (selectedDate < now) {
      console.log("Data menor que a de hoje");
      setError("Data inválida, insira uma data maior que a de hoje!");
    } else {
        setError("");
  
        const id = Math.floor(Math.random() *1000)
         const newTask : ITask = {id, nameTask, difficulty, date}

    setTaskList!([...taskList, newTask])
    
    setNameTask("")
    setDifficulty(0)
    setDate(new Date())


    toogleCreateTasks()
    
    console.log(taskList)
    
  }
};

  return (
    <form
      onSubmit={submitCreateTask}
      className=" text-black  w-100 flex flex-col gap-4 w-2xl p-2 mb-5"
    >
      <label className="flex flex-col items-start w-65">
        <span className="mb-2">O que você vai fazer?</span>
        <input
          value={nameTask}
          name="nameTask"
          onChange={onInputChange}
          placeholder="Insira sua tarefa"
          className="block min-w-0 rounded-md grow border border-gray-900/10  py-1.5  pl-1 text-base text-gray-900 placeholder:text-gray-400 placeholder:text-gray-400 w-60"
          type="text"
        />
      </label>

      <label className="flex flex-col items-start w-40">
        <span className="mb-2">Dificuldade da tarefa :</span>
        <input
          value={difficulty}
          name="difficulty"
          onChange={onInputChange}
          className="block  min-w-0 rounded-md grow border border-gray-900/10  py-1.5  pl-1 text-base text-gray-900 placeholder:text-gray-400 placeholder:text-gray-400  w-40"
          placeholder="Insira de 0 a 10"
          min="0"
          max="10"
          type="number"
        />
      </label>

      <div className="flex gap-1">
        <label className="flex flex-col items-start w-60">
          <span className="mb-2">Data e horário :</span>
          <input 
            value={date.toISOString().slice(0, 16)}
            name="date"
            onChange={onInputChange}
            className="block min-w-0 rounded-md grow border border-gray-900/10  py-1.5  pl-1 text-base text-gray-900 placeholder:text-gray-400 placeholder:text-gray-400  w-50 "
            type="datetime-local" 
          />
        </label>
      </div>
      <div className="submit-box flex flex-col">
        <label className="flex flex-col items-center mt-5 ">
          <input className="btn-grad w-50" value={btnText} type="submit" />
        </label>

        {error && (
          <div className="flex justify-center">
            <p className=" p-4 bg-gray-180 font-bold-500 text-red-800">
              {" "}
              {error}
            </p>
          </div>
        )}
      </div>
    </form>
  );
};

export default TaskForm;
