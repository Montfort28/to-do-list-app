const inputBox= document.getElementById("input-box");
const container= document.getElementById("list-container");
const addButton= document.getElementById("add-button");
addButton.addEventListener('click',() => {
    if(inputBox.value === ''){
        alert("Add a Task!");
    }
    else{
        let li= document.createElement("li");
        li.innerHTML= inputBox.value;
        container.appendChild(li);
        let span= document.createElement("span");
        span.innerHTML= "\u00d7";
        li.appendChild(span);
    }
    inputBox.value= "";
    save();
});

container.addEventListener("click", function(event) {
    var targetElement = event.target;

    if (targetElement.tagName === "LI") {
        targetElement.classList.toggle("checked");
        save();
    } else if (targetElement.tagName === "SPAN") {
        targetElement.parentElement.remove();
        save();
    }
});

function save(){
    localStorage.setItem("data", container.innerHTML);
} 
function showTask(){
    container.innerHTML = localStorage.getItem("data");
}
showTask();