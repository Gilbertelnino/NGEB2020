const open = document.querySelector('.fa-bars');
const ul = document.querySelector('.show');

const openNav = ()=>{
    ul.style.display= 'block';
    ul.style.flexDirection = 'column'
    console.log('clicked')
}
// open.addEventListener('click',openNav)