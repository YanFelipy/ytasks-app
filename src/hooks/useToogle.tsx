  
  export const useToogle = () => {

  const toogleCreateTasks = () => {
   const lists = document.getElementById("lists")
const formNotes = document.getElementById("form-notes-box")
const formTasks = document.getElementById("form-tasks-box")


if (formTasks?.classList.value.includes("hidden")) {
 lists?.classList.add("flex-col")
  formNotes?.classList.add("hidden")
  formTasks.classList.remove("hidden")
} else {
  formTasks?.classList.add("hidden")
 lists?.classList.remove("flex-col")

}

}

    const toogleCreateNotes = () => {
       const lists = document.getElementById("lists")
const formNotes = document.getElementById("form-notes-box")
const formTasks = document.getElementById("form-tasks-box")


if (formNotes?.classList.value.includes("hidden")) {
 lists?.classList.add("flex-col")
  formTasks?.classList.add("hidden")
  formNotes.classList.remove("hidden")
} else {
  formNotes?.classList.add("hidden")
 lists?.classList.remove("flex-col")

}

  }
return {toogleCreateTasks, toogleCreateNotes}
  
}
