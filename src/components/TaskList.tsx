
const TaskList = () => {



  return (
    <div className="text-black  w-100 flex flex-col gap-4 w-2xl p-2 mb-5">

      <div  className="task bg-orange-800 ">
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

        <div className="task bg-orange-800 ">
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


  <div className="task bg-orange-800 ">
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