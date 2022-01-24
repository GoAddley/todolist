const form = document.querySelector('.container');
const ul = document.getElementById('list');
const val = document.querySelector('.input');
const inner = document.querySelector('.inner');

form.addEventListener('submit', e => {
    e.preventDefault();
    //Condition to see if input field has been filled in
    if(val.value === ''){
        const error = document.createElement('h3');
        error.classList.add('error');
        error.innerHTML = 'You need to add something!';
        error.style.color = '#ffffff';
        console.log('Works!');
        inner.appendChild(error);
        //set timer for error message to hide
        setInterval(() => {
            error.style.display = 'none';
        }, 1500);
    } else {
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
        //Append to list
        ul.appendChild(div);
        }
});

