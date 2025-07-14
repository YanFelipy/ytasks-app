import { useRef, useEffect } from "react"

interface Props {
  textCard : string,
  dateTask : Date
  
}
const TaskList = ({textCard, dateTask } : Props) => {
const randomColor = Math.floor(Math.random() * 16777215).toString(16);
const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
   if (ref.current)
       ref.current.style.backgroundColor = `#${randomColor}`
        
     return
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

 const formatDate = new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "short",
    timeStyle: "short",
    timeZone: "America/Sao_Paulo",
  });

  const formatedDate = formatDate.format(dateTask).toString()
console.log(formatedDate)



const toogleMore = () => {
  const task = document.getElementById("more")

  if(task?.classList.value.includes("min-h-20"))
    
    task?.classList.add("min-h-50")
}





  return (
    <div className="text-black  w-100 flex flex-col gap-4 w-2xl p-2 mb-2">


      <div ref={ref}  id="task" className="task   justify-center flex-col shadow-lg ">
       
<div className="flex justify-around items-center min-h-15">
  
  <div className="flex">

    
<input className="mr-2" type="checkbox" />

  <h4 className="text-white text-shadow-lg font-bold"> {textCard}</h4>

  </div>
  


  <button className="text-white text-shadow-lg " onClick={toogleMore}>
  Ver mais
<i className=" ml-2 bi bi-chevron-down text-white text-shadow-lg">

  </i> 
  </button>
</div>

   <div className="flex justify-end text-sm p-4 text-white  ">

    <span className="px-3  text-shadow-lg">     <i className=" text-shadow-lg bi bi-calendar-check mr-2"></i>{formatedDate}</span>
    </div>
      </div>

       




<div>

</div>


    </div>

    
  )
}

export default TaskList