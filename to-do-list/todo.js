//things
const form = document.querySelector('#formforadd');
const input = document.querySelector('#addtask');
const deleteall = document.querySelector('#deleteall');
const ul = document.querySelector('#list');
const deletebtn = document.querySelector('#deletetask');
let items;

loaditems();

EventListener();

function EventListener(){
    form.addEventListener('submit',typeandadd);
    ul.addEventListener('click',displaynone);
    deleteall.addEventListener('click',displaynoneall);
}

function typeandadd(e){

    if(input.value === ''){
        alert('Lan girsene görev');
    }else{
            createitems(input.value);
                setitemfromls(input.value);
            
                e.preventDefault();
            
                input.value = '';
    }


}

function loaditems(){

    items = getItemsFromLS();
    items.forEach(function(item){
        createitems(item);
    })
}

function getItemsFromLS(){

    if(localStorage.getItem('items') === null){
        items = [];
    }else{
        items = JSON.parse(localStorage.getItem('items'));
    }
    return items;

}

function setitemfromls(text){

    items = getItemsFromLS();
    items.push(text);
    localStorage.setItem('items',JSON.stringify(items));

}
    
function createitems(text){
    
    const li = document.createElement('li');
    li.classList='list-group-item d-flex justify-content-between';
    li.appendChild(document.createTextNode(text));

    const div = document.createElement('div');

    const a = document.createElement('a');
    a.setAttribute('id','deletetask');
    a.setAttribute('href','#');

    const i = document.createElement('i');
    i.classList='fas fa-times';

    a.appendChild(i);
    div.appendChild(a);
    li.appendChild(div);
    ul.appendChild(li);
    
}

    function displaynone(e){
    if(e.target.className === 'fas fa-times'){
        e.target.parentElement.parentElement.parentElement.remove();
        deleteitemfromls(e.target.parentElement.parentElement.parentElement.textContent);
    }
}

    function displaynoneall(e){

        ul.innerHTML='';
        localStorage.clear()
        e.preventDefault();

    }
    function deleteitemfromls(text){

        let items = getItemsFromLS();
        items.forEach(function(item,index){
            if(item === text){
                items.splice(index,1);
            }
        })

        localStorage.setItem('items',JSON.stringify(items));

    }
