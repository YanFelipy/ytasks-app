export const useChangeColors = () => {
  const ChangeColor = (taskId: number) => {
    const divChangeColor = document.getElementById(`divChangeColor-${taskId}`);
    //changing colors of notes
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);

    if (divChangeColor) {
      divChangeColor.style.backgroundColor = `#${randomColor}`;
    }
  };

  return { ChangeColor };
};
