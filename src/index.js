document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector("form");
  addEventListener("submit", (e) => {
    e.preventDefault();
    handleToDo(e.target.newTask.value);
    form.reset();
  });
});

function handleToDo(todo) {
  let p = document.createElement("p");
  let btn = document.createElement("button");
  btn.textContent = "X";
  btn.addEventListener("click", handleDelete);
  p.textContent = `${todo} `;
  p.appendChild(btn);
  document.querySelector("#tasks").appendChild(p);
}

function handleDelete(e) {
  e.target.parentNode.remove();
}
