let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let value = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {

    if (button.innerText === "=") {
      value = eval(value);
      input.value = value;
    }

    else if (button.innerText === "AC") {
      value = "";
      input.value = "";
    }

    else if (button.innerText === "DEL") {
      value = value.slice(0, -1);
      input.value = value;
    }

    else {
      value += button.innerText;
      input.value = value;
    }

  });
});
