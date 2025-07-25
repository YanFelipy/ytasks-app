import { useEffect} from "react"

//hooks
import { useToogle } from "../hooks/useToogle"
import { useChangeColors } from "../hooks/useChangeColors"


interface Props {
  textCard : string;
 noteId : number;
 dateNote : string;
 note : string;
}


const NotesList = ({textCard, noteId, note, dateNote } : Props) => {

const {ToogleMore } = useToogle()
const {ChangeColor} = useChangeColors()


  //changing colors of notes
useEffect(()=>{

  if (noteId){ 
     ChangeColor(noteId)}

},[])


  return (
    <div className="text-black  w-100 flex flex-col gap-4 w-2xl p-2 mb-2">


      <div   id={`divChangeColor-${noteId}`}  className="task   justify-center flex-col shadow-lg ">
       
<div className="flex justify-around items-center min-h-15">
  
  <div className="flex">

    


  <h4 className="text-white text-shadow-lg font-bold"> {textCard}</h4>

  </div>
  


  <button className="text-white text-shadow-lg " onClick={()=>{ToogleMore(noteId)}}>
  Ver mais
<i className=" ml-2 bi bi-chevron-down text-white text-shadow-lg">

  </i> 
  </button>
</div>

   <div id={`details-${noteId}`}className=" flex  text-sm/7 flex-col  items-start p-4 text-white  ">

<div>
<p className="text-black">{note}</p>
    <span className="  text-shadow-lg">   <i className=" text-shadow-lg bi bi-calendar-check mr-2"></i>{dateNote}</span>
</div>
    </div>
    
      </div>

       




<div>

</div>


    </div>




    
  )
}

export default NotesList