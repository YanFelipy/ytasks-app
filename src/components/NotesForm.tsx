import { useState, type ChangeEvent, type FormEvent, /* type useEffect  */} from "react";

//interfaces
 // import { INote } from "../interfaces/INote.tsx";

interface Props {
    btnText : string;
    }
    
    const NoteForm = ({btnText}: Props) => {
          
          const firstDate = new Date()
  const formatDate = new Intl.DateTimeFormat('pt-BR', {
  dateStyle: 'short',
  timeStyle: 'short',
  timeZone: 'America/Sao_Paulo'
}); 

const now = formatDate.format(firstDate)
      
      const [id, setId ] = useState<number>(0)
      const [error, setError] = useState<string>("")
      const [nameNote, setNameNote] = useState<string>("")
      const [note, setNote] = useState<string>("")
      const [date, setDate] = useState<Date>  (new Date())
  


      
      //events
    const onInputChange = (e : ChangeEvent<HTMLInputElement | HTMLTextAreaElement >) => {
    
 if (e.target.name == "nameNote") {
setNameNote(e.target.value)
   
   } else if (e.target.name == "bodyNote") {
setNote(e.target.value)
   
   } else  {
setDate(new Date(e.target.value))
}
   


    }


    const onSubmit = (e: FormEvent) => {
    e.preventDefault()

setDate(new Date(now))


    if(note.length < 5  ) {
    console.log("Data menor que a de hoje")
    setError("Insira pelomenos uma palavra")


    } else if (nameNote.length < 4) {
         setError("Insira uma palavra com pelomenos 4 letras no campo de título")
    }       else {
                setError("")
  }
}
      
  return (
   <form onSubmit={onSubmit} className=" text-black  w-100 flex flex-col gap-4 w-2xl p-2 mb-5">
  

  <label className="flex flex-col items-start w-65" >
    <span className="mb-2">Título da anotação</span>
    <input  required name="nameNote"  onChange={onInputChange} placeholder="Insira sua tarefa"  className="block min-w-0 rounded-md grow border border-gray-900/10  py-1.5  pl-1 text-base text-gray-900 placeholder:text-gray-400 placeholder:text-gray-400 w-60" type="text" />
  </label>

   <label className="flex flex-col items-start w-100">
    <span className="mb-2">O que você gostaria de anotar?</span>
    <textarea required name="bodyNote" onChange={onInputChange} className="block  min-w-0 rounded-md grow border border-gray-900/10  py-1.5  pl-1 text-base text-gray-900 placeholder:text-gray-400 placeholder:text-gray-400  w-100"  placeholder="Max 200 caracteres. " minLength={5} maxLength={200} rows={4}/>
  </label>



<div className="submit-box flex flex-col">
   <label className="flex flex-col items-center mt-5 ">

    <input className="btn-grad w-50" value={btnText} type="submit" />
  </label>

{error && 
 <div className="flex justify-center">
  <p className=" p-4 bg-gray-180 font-bold-500 text-red-800"> {error}</p>
  </div> }
</div>
   



</form>
  )
}

export default NoteForm