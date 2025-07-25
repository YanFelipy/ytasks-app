import {
  useEffect,
  useState,
  type ChangeEvent,
  type FormEvent /* type useEffect  */,
} from "react";

//hooks
import { useFormatDate } from "../hooks/useFormatDate";
import { useToogle } from "../hooks/useToogle.tsx";
//interfaces
import type { INotes } from "../interfaces/INotes.ts";

interface Props {
  btnText: string;
  notesList: INotes[];
  setNotesList: React.Dispatch<React.SetStateAction<INotes[]>>;
}

const NoteForm = ({ btnText, notesList, setNotesList }: Props) => {
  
  //des hooks
  const { formatDate } = useFormatDate();
  const {toogleCreateNotes } = useToogle()
  
  //states
  const [id, setId] = useState<number>(0);
  const [error, setError] = useState<string>("");
  const [noteName, setNameNote] = useState<string>("");
  const [note, setNote] = useState<string>("");
  const [noteDate, setNoteDate] = useState<string>("");
  
  //formating date
  const now = formatDate.format(new Date());

  useEffect(() => {
    setNoteDate(now)
  },[now])
  console.log(noteDate)
  
  //events
  const onInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.target.name == "nameNote") {
      setNameNote(e.target.value);
    } else  {
      setNote(e.target.value);
    }
   
  };
  
  //submting form
  const submitCreateNote = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    
    if (note.length < 5) {
      setError("Insira pelomenos uma palavra");
      console.log(error);
    } else if (noteName.length < 4) {
      setError("Insira uma palavra com pelomenos 4 letras no campo de título");
      console.log(error);
    } else {
      

      const id = Math.floor(Math.random() * 1000);
      const newNote: INotes = { id, noteName, note, noteDate };

      setNotesList!([...notesList, newNote]);

      setError("");

          toogleCreateNotes()
    }
    console.log(noteDate);
  };

  return (
    <form
      onSubmit={submitCreateNote}
      className=" text-black  w-100 flex flex-col gap-4 w-2xl p-2 mb-5"
    >
      <label className="flex flex-col items-start w-65">
        <span className="mb-2">Título da anotação</span>
        <input
          required
          name="nameNote"
          onChange={onInputChange}
          placeholder="Insira sua anotação"
          className="block min-w-0 rounded-md grow border border-gray-900/10  py-1.5  pl-1 text-base text-gray-900 placeholder:text-gray-400 placeholder:text-gray-400 w-60"
          type="text"
        />
      </label>

      <label className="flex flex-col items-start w-100">
        <span className="mb-2">O que você gostaria de anotar?</span>
        <textarea
          required
          name="bodyNote"
          onChange={onInputChange}
          className="block  min-w-0 rounded-md grow border border-gray-900/10  py-1.5  pl-1 text-base text-gray-900 placeholder:text-gray-400 placeholder:text-gray-400  w-100"
          placeholder="Max 200 caracteres. "
          minLength={5}
          maxLength={200}
          rows={4}
        />
      </label>

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

export default NoteForm;
