

//hooks 
import { useToogle } from "../hooks/useToogle"
import { useSetDifficulty } from "../hooks/useSetDifficulty"
import { useChangeColors } from "../hooks/useChangeColors"
import { useEffect } from "react";

interface Props {
  textCard : string,
  dateTask : Date,
  taskDifficulty : number,
 taskId : number;
  
}
const TaskList = ({textCard, dateTask, taskDifficulty, taskId } : Props) => {

const {ToogleMore } = useToogle()
const {setDifficulty} = useSetDifficulty()
const {ChangeColor} = useChangeColors()
const difficultyLevel = setDifficulty(taskDifficulty, taskId)

useEffect(()=>{
  
  
  if (taskId){ 
     ChangeColor(taskId)}

// eslint-disable-next-line react-hooks/exhaustive-deps
},[])


  //changing colors of notes


  //formating actually date to pt-br
 const formatDate = new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "short",
    timeStyle: "short",
    timeZone: "America/Sao_Paulo",
  });

  const formatedDate = formatDate.format(dateTask).toString()
console.log(formatedDate)

//show more details of tasks








  return (
    <div className="text-black  w-100 flex flex-col gap-4 w-2xl p-2 mb-2">


      <div   id={`divChangeColor-${taskId}`}  className="task   justify-center flex-col shadow-lg ">
       
<div className="flex justify-around items-center min-h-15">
  
  <div className="flex">

    
<input className="mr-2" type="checkbox" />

  <h4 className="text-white text-shadow-lg font-bold"> {textCard}</h4>

  </div>
  


  <button className="text-white text-shadow-lg " onClick={()=>{ToogleMore(taskId)}}>
  Ver mais
<i className=" ml-2 bi bi-chevron-down text-white text-shadow-lg">

  </i> 
  </button>
</div>

   <div id={`details-${taskId}`}className=" flex  text-sm/7 flex-col  items-start p-4 text-white  ">

<div className="flex">
  <p className="mr-2"> Dificuldade da tarefa : <span>
  {taskDifficulty}  
    </span>
  </p>
  <p id={`difficultyName-${taskId}`}   className=" text-shadow-lg font-bold">
    {difficultyLevel}
    </p> 
  </div>

    <span className="  text-shadow-lg">   <i className=" text-shadow-lg bi bi-calendar-check mr-2"></i>{formatedDate}</span>
    </div>
      </div>

       




<div>

</div>


    </div>

    
  )
}

export default TaskList