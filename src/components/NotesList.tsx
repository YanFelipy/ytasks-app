import { useRef, useEffect} from "react"

interface Props {
  textCard : string,
handleCreateNote : (e : React.MouseEvent<HTMLButtonElement>) => void
}
const NotesList = ({textCard, handleCreateNote } : Props) => {
const randomColor = Math.floor(Math.random() * 16777215).toString(16);
const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
   if (ref.current)
       ref.current.style.backgroundColor = `#${randomColor}`
        
     return
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <div className="text-black  w-100 flex flex-col gap-4 w-2xl p-2 mb-5">
<h1 className="text-black text-2xl p-2 my-2">Lista de Anotações</h1>
      <div ref={ref} className="task bg-orange-800 shadow-lg ">
<div className="flex justify-around items-center min-h-20">
  <div className="flex">


  <h4> {textCard}</h4>

  </div>
  <button className="Ver mais">
Ver Mais
  </button>
</div>
      </div>

        <div className="task bg-blue-400 shadow-lg ">
<div className="flex justify-around items-center min-h-20">
  <div className="flex">

  <h4> Título da Tarefa</h4>

  </div>
  <button className="Ver mais">
Ver Mais
  </button>
</div>
      </div>


  <div className="task bg-yellow-500  shadow-lg">
<div className="flex justify-around items-center min-h-20">
  <div className="flex">

  <h4> Título da Tarefa</h4>

  </div>
  <button className="Ver mais">
Ver Mais
  </button>
</div>
      </div>

<div>
  <button onClick={handleCreateNote} className="">
<i className="bi bi-pencil-square mr-2"></i>
Criar uma nova anotação
  </button>
</div>


    </div>

    
  )
}

export default NotesList