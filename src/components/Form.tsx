import type { ChangeEvent, SyntheticEvent } from "react";

interface Props {
    btnText : string;
    onSubmit : (e: SyntheticEvent) => void;
    onInputChange : (e:  ChangeEvent<HTMLInputElement>) => void;
}



const Form = ({btnText, onSubmit, onInputChange}: Props ) => {
  return (
  <form onSubmit={onSubmit} className=" text-black  w-100 flex flex-col gap-4 w-2xl p-2 mb-5">
  <label className="flex flex-col items-start">
    <span className="mb-2">O que você vai fazer?</span>
    <input  onChange={onInputChange} placeholder="Insira sua tarefa"  className="block min-w-0 rounded-md grow border border-gray-900/10  py-1.5  pl-1 text-base text-gray-900 placeholder:text-gray-400 placeholder:text-gray-400" type="text" />
  </label>
<div className="flex gap-4">
  <label className="flex flex-col items-start">
    <span className="mb-2">Dia :</span>
    <input  onChange={onInputChange} className="block min-w-0 rounded-md grow border border-gray-900/10  py-1.5  pl-1 text-base text-gray-900 placeholder:text-gray-400 placeholder:text-gray-400  " type="date" />
  </label>

    <label className="flex flex-col items-start ">
    <span className="mb-2">Horário :</span>
    <input  onChange={onInputChange} className="block bg-gray-400 min-w-0 rounded-md grow border border-gray-900/10  py-1.5  pl-1 text-base text-gray-900 placeholder:text-gray-400 placeholder:text-gray-400  " type="time" />
  </label>

</div >
      <label className="flex flex-col items-start mt-5">

    <input className="btn-grad" value={btnText} type="submit" />
  </label>



</form>
  )
}

export default Form