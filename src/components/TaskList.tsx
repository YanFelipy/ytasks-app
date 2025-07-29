import { useEffect, useState } from "react";

//hooks
import { useToogle } from "../hooks/useToogle";
import { useSetDifficulty } from "../hooks/useSetDifficulty";
import { useChangeColors } from "../hooks/useChangeColors";
import { useFormatDate } from "../hooks/useFormatDate";
import DropMenu from "./DropMenu";

//interfaces
import type { ITask } from "../interfaces/ITask";
import EditModal from "./EditModal";

interface Props {
  textCard: string;
  dateTask: string;
  taskDifficulty: number;
  taskId: number;
  taskList: ITask[];
  setTaskList: React.Dispatch<React.SetStateAction<ITask[]>>;
}
const TaskList = ({  textCard,  dateTask,  taskDifficulty,  taskId,  taskList,  setTaskList,}: Props) => {
  //states
  const [difficultyLevel, setDifficultyLevel] = useState<string>("");
    const [open, setOpen] = useState<boolean>(false )

  //des. hooks
  const { ToogleMore } = useToogle();
  const { setDifficulty } = useSetDifficulty();
  const { ChangeColor } = useChangeColors();
  const { formatDate } = useFormatDate();

  //changing colors of notes
  useEffect(() => {
    if (taskId) {
      ChangeColor(taskId);
    }
    setDifficultyLevel(setDifficulty(taskDifficulty, taskId));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //formating actually date to pt-br
  const dateObject = new Date(dateTask);
  const formatedDate = formatDate.format(dateObject).toString();




    const handleEditTask = (id: number) => {

    if (taskList) {
      setTaskList(
        taskList.filter((task) => {
          return task.id !== id;
        })
      );
    }
  };

  //deleting task
  const handleDeleteTask = (id: number) => {
    if (taskList) {
      setTaskList(
        taskList.filter((task) => {
          return task.id !== id;
        })
      );
    }
  };

  return (
    <div className="text-black  w-100 flex flex-col gap-4 w-2xl p-2 mb-2">
      <div
        id={`divChangeColor-${taskId}`}
        className="task   justify-center flex-col shadow-lg "
      >
        <div className="flex justify-between px-4 items-center min-h-15 ">
          <div className="flex">
            <input className="mr-2" type="checkbox" />

            <h4 className="text-white text-shadow-lg font-bold"> {textCard}</h4>
          </div>

          <div className="buttons w-1/2 flex justify-end gap-3">
            <div className="text-white ">
              <button
                className="inline-flex w-full justify-center rounded-md  px-4 py-2 text-sm font-semibold text-white shadow-xs hover:ring-1  hover:ring-1-inset "
                onClick={() => {
                  ToogleMore(taskId);
                }}
              >
                <i className=" bi bi-chevron-down text-white text-shadow-lg">
                  {" "}
                </i>
              </button>
            </div>
            <div className="text-white">
              <DropMenu toogleEdit={() => setOpen(true)}
                handleDelete={() => {
                  handleDeleteTask(taskId);
                }}
              />
            </div>
          </div>
        </div>

        <div
          id={`details-${taskId}`}
          className=" flex  text-sm/7 flex-col  items-start p-4 text-white  "
        >
          <div className="flex">
            <p className="mr-2">
              {" "}
              Dificuldade da tarefa : <span>{taskDifficulty}</span>
            </p>
            <p
              id={`difficultyName-${taskId}`}
              className=" text-shadow-lg font-bold"
            >
              {difficultyLevel}
            </p>
          </div>

          <span className="  text-shadow-lg">
            {" "}
            <i className=" text-shadow-lg bi bi-calendar-check mr-2"></i>
            {formatedDate}
          </span>
        </div>
      </div>
<EditModal openModal={open} setOpen={setOpen} taskList={taskList} setTaskList={setTaskList}/>
    
    </div>
  );
};

export default TaskList;
