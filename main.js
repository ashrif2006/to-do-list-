let input = document.getElementById("input");

let btn = document.getElementById("btn");

let ul = document.getElementById("ul");
let tasks = [] ;

if(localStorage.getItem("tasks")){
    tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks.forEach(task => {
        ul.innerHTML+=`
            <li><p class="text" onclick="halfDelete(this)">${task}</p> <span onclick="deleteItem(this)">X</span></li>
        `
    })
}
btn.addEventListener("click", () => {
  if (input.value != "") {
    tasks.push(input.value);
    localStorage.setItem("tasks",JSON.stringify(tasks));
    ul.innerHTML += `
            <li><p class="text" onclick="halfDelete(this)">${input.value}</p> <span onclick="deleteItem(this)">X</span></li>
        `;
  }
  input.value = "";
});

function deleteItem(item) {
    let text =item.parentElement.querySelector(".text").innerText;
    tasks =tasks.filter(task => task!=text);
    localStorage.setItem("tasks",JSON.stringify(tasks));
  item.parentElement.remove();

}

function halfDelete(el) {
  el.classList.toggle("done");
}
