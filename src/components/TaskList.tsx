import { useRef, useEffect} from "react"


const TaskList = () => {
const randomColor = Math.floor(Math.random() * 16777215).toString(16);
const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
   if (ref.current)
       ref.current.style.backgroundColor = `#${randomColor}`
        
     return
  }, []);


  return (
    <div className="text-black  w-100 flex flex-col gap-4 w-2xl p-2 mb-5">

      <div ref={ref} className="task bg-orange-800 ">
<div className="flex justify-around items-center min-h-20">
  <div className="flex">
  <input type="checkbox" />
  <h4> Título da Tarefa</h4>

  </div>
  <button className="Ver mais">
Ver Mais
  </button>
</div>
      </div>

        <div className="task bg-blue-400 ">
<div className="flex justify-around items-center min-h-20">
  <div className="flex">
  <input type="checkbox" />
  <h4> Título da Tarefa</h4>

  </div>
  <button className="Ver mais">
Ver Mais
  </button>
</div>
      </div>


  <div className="task bg-yellow-500 ">
<div className="flex justify-around items-center min-h-20">
  <div className="flex">
  <input type="checkbox" />
  <h4> Título da Tarefa</h4>

  </div>
  <button className="Ver mais">
Ver Mais
  </button>
</div>
      </div>


    </div>

    
  )
}

export default TaskList