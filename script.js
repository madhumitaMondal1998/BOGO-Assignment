document.addEventListener("DOMContentLoaded", function() {
    const closedBoxOne = document.getElementById("offer-close-1");
    const closedBoxTwo = document.getElementById("offer-close-2");
    const closedBoxThree = document.getElementById("offer-close-3");
    const openBoxOne = document.getElementById("offer-open-1");
    const openBoxTwo = document.getElementById("offer-open-2");
    const openBoxThree = document.getElementById("offer-open-3");

    const closedBoxes = [closedBoxOne, closedBoxTwo, closedBoxThree];
    const openBoxes = [openBoxOne, openBoxTwo, openBoxThree];

    closedBoxes.forEach((closedBox, index) => {
        closedBox.addEventListener("click", () => {
            closedBoxes.forEach(box => box.classList.remove("display-hidden"));

            openBoxes.forEach(box => {
                box.classList.add("display-hidden");
                box.classList.remove("open-box");
            });

            openBoxes[index].classList.remove("display-hidden");
            openBoxes[index].classList.add("open-box");

            closedBox.classList.add("display-hidden");
        });
    });
});
