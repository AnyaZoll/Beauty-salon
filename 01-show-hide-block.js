const button1 = document.querySelector('#button-1');
const content = document.querySelector('#content');
button1.addEventListener("click", function(){
    content.classList.toggle('works_img');
})