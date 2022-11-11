//multipe element DOM
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('item'));
// console.log(document.getElemntsByTagName('li'));

// const items = document.querySelectorAll('.item');
// items.forEach((item) => console.log(item));

// ul.remove();
// ul.lastElementChild.remove();


//const ul = document.querySelector('.items');
//ul.firstElementChild.innerHTML = '<h1>Hello<h1>';
// const a = document.querySelector('.item1');
// a.style.color = 'green';

// ul.children[1].innerHTML = '<h3>Brad</h3>';
// const b = document.querySelector('.item2');
// b.style.color = 'Yellow';
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>';


//btn clic,mouseover,mousehover

// const btn = document.querySelector('.btn');

// btn.addEventListener('click',(e)=>{
//     e.preventDefault(); 
//     // console.log(e.target.id);
//     document.querySelector('#my-form').style.background ='#ccc'; 
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('items').lastElementChild.innerHTML = '<h1>Hello</h1>';
// });

// btn.addEventListener('mouseover',(e)=>{
//     e.preventDefault(); 
//     document.querySelector('#my-form')
//     .getElementsByClassName.style.background ='#fff'; 
//     document.querySelector('bodyback').classList.add('bg-dark1');
// });
// btn.addEventListener('mouseout',(e)=>{
//     e.preventDefault(); 
//     document.querySelector('#my-form')
//     .getElementsByClassName.style.background ='#fff'; 
//     document.querySelector('bodyback').classList.add('bg-dark1');
// });
 
const myform = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailForm = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');
myform.addEventListener('submit',onsubmit);

function onsubmit(e){
    e.preventDefault();

    if(nameInput.value ===  '' || emailForm.value === ''){
        msg.classList.add('error');
        msg.innerHTML ='please enter fields';
        
        setTimeout( ()=>msg.remove(),3000);
    }else{
       const li = document.createElement('li');
       li.appendChild(document.createTextNode (`${nameInput.value} : ${emailForm.value}`));
       userList.appendChild(li);
    //clear fields

    nameInput.value = ' ';
    emailForm.value = '';
    }

}