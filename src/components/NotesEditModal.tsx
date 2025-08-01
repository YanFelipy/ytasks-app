'use client'

import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'

import NotesForm from './NotesForm';
import type { INotes } from '../interfaces/INotes';


export const SetToogleModal = () => {

} 
interface Props  {
openModal : boolean;
notesList : INotes[];
annotation?: INotes | null | undefined;
setOpen : React.Dispatch<React.SetStateAction<boolean>>
updateNote? (id: number, noteName: string, note: string, noteDate: string) : void,
setNotesList: React.Dispatch<React.SetStateAction<INotes[]>>;
}

const NotesEditModal = ({openModal, notesList, annotation , updateNote, setOpen, setNotesList }: Props) => {

  return (
    <div>
  
      <Dialog open={openModal} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white p-2 text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
            >  
            <div className='edit-window-controls flex justify-between'>

 <div className='flex items-center gap-2 px-4 py-2'>
 <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-gray-100 sm:mx-0 sm:size-10">
                    <i className="bi bi-pencil-square  text-blue-400 "></i>
                  </div>

                   <DialogTitle as="h3" className="text-base font-semibold text-gray-900">
                      Editar Anotação
                    </DialogTitle>

            </div>
           

             <div className=" px-2 py-2 sm:flex sm:flex-row sm:px-4">
               
               
                <button
                  type="button"
                  data-autofocus
                  onClick={() => setOpen(false)}
                  className="inline-flex  justify-cener rounded-md bg-white   text-sm font-semibold text-gray-900 shadow-xs hover:ring-1 ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
              <i className="bi bi-x-lg text-black px-4 py-3 "></i>
                </button>
              </div>

            </div>
           


              <div className="bg-white px-2 pt-2 pb-2 sm:p-2 sm:pb-4 flex
              justify-center">
                <div className="sm:flex sm:items-start">
                  
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  
                    <div className="mt-2 w-full">
                      <NotesForm btnText="Editar Anotação"  notesList={notesList} setNotesList={setNotesList} annotation={annotation} updateNote={updateNote}/>
                    </div>
                  </div>
                </div>
              </div>
           
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  )
} 
export default NotesEditModal
