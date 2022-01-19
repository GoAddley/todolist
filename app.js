const form = document.querySelector('.container');
const ul = document.getElementById('list');
const val = document.querySelector('.input');
const error = document.querySelector('.error');

form.addEventListener('submit', e => {
    e.preventDefault();
    //div
    const div = document.createElement('div');
    div.classList.add('innderDiv');
    //Create new li for list
    const li = document.createElement('li');
    li.textContent = val.value;
    li.classList.add('list-item');
    div.appendChild(li);
    //Create Remove button
    const delBtn = document.createElement('button');
    delBtn.textContent = 'Remove';
    delBtn.classList.add('delBtn');
    li.appendChild(delBtn);
    val.value = '';
    //remove button to delete items
    delBtn.addEventListener('click', () =>{
        li.remove();
        delBtn.remove();
    });
});

