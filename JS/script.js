const buttons = document.querySelectorAll(".image-picker li");
const image = document.querySelector(".iphone-img");


buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {

        console.log(btn.className)
        const classe = btn.className;
        image.setAttribute("src", `img/iphone_${classe}.jpg`)

    buttons.forEach((btn) =>
      btn.querySelector(".color").classList.remove("selected")
    );

    const button = e.target;

    const cs = button.getAttribute("class");


    setTimeout(() => {
      image.classList.toggle("changing");
    }, 200);
  });
}); 