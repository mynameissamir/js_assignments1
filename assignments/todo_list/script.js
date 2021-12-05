var data=0;
let newTodoInput = document.getElementsByTagName('input')[0];
const addTodoBtn = document.getElementsByTagName('button')[0];
const todolist = document.getElementsByClassName('todos')[0];

function additem(){
    var para = document.createElement("p");
    para.setAttribute("key",data);
    var input1=newTodoInput.value;
    para.innerHTML=input1;
    todolist.appendChild(para);
    data=data+1;
    para.onclick = function() {
        para.remove();
    }
}

addTodoBtn.addEventListener('click',additem)