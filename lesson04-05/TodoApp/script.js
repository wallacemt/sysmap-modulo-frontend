function finshedTasks(e) {
  const li = e.target.parentElement;
  li.classList.toggle("done");
  e.target.textContent = e.target.textContent === "Finalizar" ? "Desfazer" : "Finalizar";
}

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const input = document.querySelector("input");
  const taskText = input.value;

  if (taskText === "") { 
    return;
  }

  const span = document.createElement("span");
  span.innerText = taskText;
  const button = document.createElement("button");
  button.classList.add("btn");
  button.innerText = "Finalizar";
  button.addEventListener("click", finshedTasks);

  const li = document.createElement("li");
  li.appendChild(span);
  li.appendChild(button);

  const ul = document.querySelector(".tasks ul");
  ul.appendChild(li);
});
