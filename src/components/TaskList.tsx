import { useRef, useEffect } from "react"

interface Props {
  textCard : string,
  dateTask : Date,
  taskDifficulty : number,
 taskId : number;
  
}
const TaskList = ({textCard, dateTask, taskDifficulty, taskId } : Props) => {

  //changing colors of notes
const randomColor = Math.floor(Math.random() * 16777215).toString(16);
const ref = useRef<HTMLDivElement>(null)
const dfElement = useRef<HTMLDivElement>(null)

  useEffect(() => {
   if (ref.current)
       ref.current.style.backgroundColor = `#${randomColor}`
        
     return
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //formating actually date to pt-br
 const formatDate = new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "short",
    timeStyle: "short",
    timeZone: "America/Sao_Paulo",
  });

  const formatedDate = formatDate.format(dateTask).toString()
console.log(formatedDate)

//show more details of tasks

  const ToogleMore = () => {
  const taskDetails = document.getElementById( `details-${taskId}`)

if(taskDetails?.classList.value.includes("hidden")){
taskDetails.classList.remove("hidden")
}    else if(taskDetails) {
taskDetails.classList.add("hidden")
    }
  return

  }

// show difficult level
let difficultyLevel = ""



if (taskDifficulty > 8 && dfElement.current) {
difficultyLevel = "(Muito difícil)"
dfElement?.current.classList.add("text-red-500")
} 
 else if (taskDifficulty > 5 && dfElement.current) {
  difficultyLevel = "(difícil)"
dfElement?.current.classList.add("text-orange-400")
}

 else if (taskDifficulty > 3 && dfElement.current) {
  difficultyLevel = "(Normal)"
dfElement?.current.classList.add("text-yellow-400")
} 
 else if( taskDifficulty < 3 && dfElement.current ){
  difficultyLevel = "(Fácil)"
dfElement?.current.classList.add("text-green-400")
} 





  return (
    <div className="text-black  w-100 flex flex-col gap-4 w-2xl p-2 mb-2">


      <div ref={ref}  id="task" className="task   justify-center flex-col shadow-lg ">
       
<div className="flex justify-around items-center min-h-15">
  
  <div className="flex">

    
<input className="mr-2" type="checkbox" />

  <h4 className="text-white text-shadow-lg font-bold"> {textCard}</h4>

  </div>
  


  <button className="text-white text-shadow-lg " onClick={ToogleMore}>
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
  <p ref={dfElement}  className=" text-shadow-lg font-bold">
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