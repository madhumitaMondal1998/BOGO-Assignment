document.addEventListener("DOMContentLoaded", function () {
  const closedBoxOne = document.getElementById("offer-box-close-one");
  const closedBoxTwo = document.getElementById("offer-box-close-two");
  const closedBoxThree = document.getElementById("offer-box-close-three");
  const openBoxOne = document.getElementById("offer-box-open-one");
  const openBoxTwo = document.getElementById("offer-box-open-two");
  const openBoxThree = document.getElementById("offer-box-open-three");

  const closedBoxes = [closedBoxOne, closedBoxTwo, closedBoxThree];
  const openBoxes = [openBoxOne, openBoxTwo, openBoxThree];

  closedBoxes.forEach((closedBox, index) => {
    closedBox.addEventListener("click", () => {
      closedBoxes.forEach((box) => box.classList.remove("display-hide"));

      openBoxes.forEach((box) => {
        box.classList.add("display-hide");
        box.classList.remove("open-box");
      });

      openBoxes[index].classList.remove("display-hide");
      openBoxes[index].classList.add("open-box");

      closedBox.classList.add("display-hide");
    });
  });
});
