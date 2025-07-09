import YoungImg from '../../assets/ytasks-home-image.svg'

import { Link } from 'react-router'

const Home = () => {
  return (
    <main className="min-h-screen flex justify-center   ">

      <div className='container flex my-35 mb-0 '>
        
   <div className="box-animation flex-start flex w-2xl justify-end">

<div className=" w-120  ">
<img src={YoungImg} alt="Crie suas tarefas" className="young obj-fit-cover" />
</div>
      </div>

           <div className="box-intro w-2xl flex justify-center pd">

            <div className="  p-4 shadow-lg gap-5 h-120 bg-gray-200 br-20  mb-0 w-120 rounded-2xl flex flex-col items-center">
<h1 className="font-sans  font-500 text-5xl/14 mt-10 mb-5 text-shadow-xs text-gray-800 text-line-20 px-4">Crie tarefas de forma simples. </h1>
<p className='px-4 mb-10 text-gray-500'>Precisa organizar suas atividades? Crie e gerencie suas tarefas diárias de forma simples e eficiente em nosso site! Comece agora a planejar seu dia e aumente sua produtividade.</p>
            <Link to="/create-tasks"className='btn-grad mt-5'>
Começar
            </Link>
            </div>
      </div>

      </div>

   


  <div className="note" style={{left: "0%"}}>

  </div>
 
      <div className="note"></div>
      <div className="note"></div>
      <div className="note"></div>
      <div className="note"></div>
      <div className="note"></div>
      <div className="note"></div>

    </main>

    
  )
}

export default Home