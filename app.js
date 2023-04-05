var link = document.querySelectorAll(".main-list__link");
console.log(link);
link.forEach(function(item){
    item.addEventListener('click', function(event){
      item.classList.remove('active');
      item.add('active');
    });
});
