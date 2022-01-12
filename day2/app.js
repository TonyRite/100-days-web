const input = document.querySelector('#inp');
const btn = document.querySelector('#btn');
const toDo = document.querySelector('.to-do');


// Creating the items when the user clicks the Add Button. 
function addItem(){
     // stop Adding Items.
    function stopAdding(e) {
        e.preventDefault();
      }
    if(input.value.length === 0){
        alert('Please Enter Something to add ! ');
        btn.addEventListener('click', stopAdding());
     }else if(input.value.length >= 40){
        alert('Maximum value of letters is 40 !');
        btn.addEventListener('click', stopAdding());
     }

    // Creating and appending Elements.
    const div = document.createElement('div');
    const li = document.createElement('li');
    const button = document.createElement('button');
    li.innerHTML = input.value;
    button.innerHTML = 'Remove';
    div.appendChild(li);
    div.appendChild(button);
    toDo.appendChild(div);

    // This removes the input text when you add an Item.    
    if(input.value === li.innerHTML){
        input.value = '';
    }
    //Removing the list.
    button.addEventListener('click', ()=>{
        div.remove();
    });
}

// Adding the Item to the list by pressing the Enter key.
input.addEventListener('keydown', event =>{
    if(event.key === 'Enter'){
        addItem();
    }
});