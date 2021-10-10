//variable
const input = document.querySelector(".todo-input");
const button = document.querySelector(".to-do_btn");
const list = document.querySelector(".todo_list");
const select =document.querySelector(".select");

//event
    button.addEventListener("click" , addlist);
    list.addEventListener("click" , cheakdelete);
    // select.addEventListenedr("click" , rolling);

//function
function addlist(event)
{
    // if we take any previous property become clear
    event.preventDefault();
    // // console.log("hello");
    //todo div create to add to do li
    
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    
    // create li
    
    const newtodo = document.createElement("li");
    newtodo.innerText = input.value;
    
    newtodo.classList.add("todo-item");
    //TodoDiv child newtodo
    todoDiv.appendChild(newtodo);


    //creating div
    const buttondiv = document.createElement('div');
    buttondiv.classList.add("button_div");
    newtodo.appendChild(buttondiv);

    //create button
    //correct
    const correct = document.createElement("button");
    correct.innerHTML= '<i class="fas fa-thumbs-up"></i>';
    correct.classList.add("correct-todo");
    buttondiv.appendChild(correct);
    //delete
    const deletion = document.createElement("button");
    deletion.innerHTML= '<i class="fas fa-trash"></i>';
    deletion.classList.add("delete");
    buttondiv.appendChild( deletion);
    
    list.appendChild(todoDiv);
    input.value ="";
}


function cheakdelete(event)
{
    const item = event.target;

    // console.log(item);
    if(item.classList[0] === "delete")
    {
       const item_parent = item.parentElement;
       const parent_item_parent = item_parent.parentElement;
       
        parent_item_parent.classList.add('fall');
       
    //    parent_item_parent.addEventListener('transitioned' , function()
    //    {
    //        parent_item_parent.style.display = "none";
    //    });
        
        setInterval(() => {
            parent_item_parent.classList.add("display");
            
        }, 500);
       
    }
    if(item.classList[0] === "correct-todo")
    {
       const item_parent_correct = item.parentElement;
       const parent_item_parent_correct = item_parent_correct.parentElement;

       parent_item_parent_correct.classList.toggle("completed");
       const sound = new Audio("sound/foodsound.mp3");
       sound.play();
    }
}

