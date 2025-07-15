
export const useSetDifficulty = () => {
    let difficultyLevel = ""
    
    const setDifficulty = (taskDifficulty : number, taskId : number) => {
        const dfElement = document.getElementById(`difficultyName-${taskId}`)
        
if ( dfElement != null && taskDifficulty > 8) {
difficultyLevel = "(Muito difícil)"
dfElement.classList.add("text-red-500")
} 
 else if (dfElement != null  &&taskDifficulty > 5 ) {
  difficultyLevel = "(difícil)"
dfElement?.classList.add("text-orange-400")
}

 else if (dfElement != null  && taskDifficulty > 3 ) {
  difficultyLevel = "(Normal)"
dfElement?.classList.add("text-yellow-400")
} 
 else if( dfElement != null  && taskDifficulty < 3 ||  taskDifficulty >= 0){
  difficultyLevel = "(Fácil)"
dfElement?.classList.add("text-green-400")
} 

return difficultyLevel
   }



  return {setDifficulty }
}