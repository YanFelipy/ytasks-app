import { useEffect} from "react"
import DropMenu from '../components/DropMenu'

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

// eslint-disable-next-line react-hooks/exhaustive-deps
},[])


  return (
    <div className="text-black  w-100 flex flex-col gap-4 w-2xl p-2 mb-2">


      <div   id={`divChangeColor-${noteId}`}  className="task  justify-center flex-col shadow-lg ">
       
<div className="flex justify-around items-center min-h-15 p-2">
  
  <div className="flex">
  <h4 className="text-white text-shadow-lg font-bold"> {textCard}</h4>
  </div>
  

<div className="buttons w-1/2 flex justify-end gap-3">
  

<div className="text-white ">
      <button className="inline-flex w-full justify-center rounded-md  px-4 py-2 text-sm font-semibold text-white shadow-xs hover:ring-1  hover:ring-1-inset " onClick={()=>{ToogleMore(noteId)}}>
<i className=" bi bi-chevron-down text-white text-shadow-lg">  </i> 
  </button>

    </div>
  <div className="text-white">
    <DropMenu />
    </div>

</div>
</div>

   <div id={`details-${noteId}`}className=" flex  text-sm/7 flex-col  items-start p-4  text-white  ">

<div className="w-full text-start">
<p className="text-shadow-lg bg-gray-400/50 px-2 mb-4">{note}</p>
    <span className="  text-shadow-lg float-right mt-2">   <i className=" text-shadow-lg bi bi-calendar-check mr-2"></i>{dateNote}</span>
</div>
    </div>
    
      </div>

       




<div>

</div>


    </div>




    
  )
}

export default NotesList