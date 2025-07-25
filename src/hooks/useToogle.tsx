export const useToogle = () => {
  const toogleCreateTasks = () => {
    const lists = document.getElementById("lists");
    const formNotes = document.getElementById("form-notes-box");
    const formTasks = document.getElementById("form-tasks-box");

    if (formTasks?.classList.value.includes("hidden")) {
      lists?.classList.add("flex-col");
      formNotes?.classList.add("hidden");
      formTasks.classList.remove("hidden");
    } else {
      formTasks?.classList.add("hidden");
      lists?.classList.remove("flex-col");
    }
  };

  const toogleCreateNotes = () => {
    const lists = document.getElementById("lists");
    const formNotes = document.getElementById("form-notes-box");
    const formTasks = document.getElementById("form-tasks-box");

    if (formNotes?.classList.value.includes("hidden")) {
      lists?.classList.add("flex-col");
      formTasks?.classList.add("hidden");
      formNotes.classList.remove("hidden");
    } else {
      formNotes?.classList.add("hidden");
      lists?.classList.remove("flex-col");
    }
  };

  const ToogleMore = (taskId: number) => {
    const taskDetails = document.getElementById(`details-${taskId}`);

    if (taskDetails?.classList.value.includes("hidden")) {
      taskDetails.classList.remove("hidden");
      taskDetails.classList.add("border-t");
    } else if (taskDetails) {
      taskDetails.classList.add("hidden");
    }
  };

  return { toogleCreateTasks, toogleCreateNotes, ToogleMore };
};
