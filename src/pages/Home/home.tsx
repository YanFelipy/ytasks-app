import YoungImg from '../../assets/ytasks-home-image.svg'
import Notes from '../../components/Notes'


import { useNavigate } from 'react-router'


const Home = () => {
  const navigate = useNavigate()
 
  const ani = () => {
       const myElement = document.getElementById("Ref") as HTMLElement
       myElement.classList.add("write-notes")

    setTimeout(() => {
     navigate("/create")
   },1000 );
  }

  return (
    <main className="min-h-screen flex justify-center max-w-screen ">

      <div id="Ref" className='container flex my-35 mb-0 mw-w-100'>
        
   <div className="box-animation flex-start flex w-2xl justify-end">

<div className=" w-120  ">
<img src={YoungImg} alt="Crie suas tarefas" className="young obj-fit-cover" />
</div>
      </div>

           <div className="box-intro w-2xl flex justify-center ">

            <div className="intro p-2 shadow-lg gap-5 h-120 bg-white br-20  mb-0 w-120 rounded-2xl flex flex-col items-center">
<h1 className="font-sans  font-500 text-5xl/14   text-shadow-xs text-gray-800 text-line-20 p-5">Crie notas e tarefas de forma simples. </h1>
<p className='px-6 mb-10 text-gray-500'>Precisa organizar suas atividades? Crie e gerencie suas tarefas diárias de forma simples e eficiente em nosso site! Comece agora a planejar seu dia e aumente sua produtividade.</p>
<div className='flex items-center buttons '>
            <button onClick={ani} className='btn-grad  mr-5'>
            <i className="bi bi-pencil-square mr-2"></i>
Começar
            </button>


            <a href="https://github.com/YanFelipy/ytasks-app"  className='btn-grad'>
           <i className="bi bi-github mr-2"></i>
Docs
            </a>

</div>
            </div>
      </div>

      </div>

   
<Notes />

    </main>

    
  )
}

export default Home