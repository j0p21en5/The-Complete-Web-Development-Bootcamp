let namasteBtn = document.querySelector('button');
namasteBtn.addEventListener('click',inputMsg) ;
function inputMsg() {
    let name = prompt('Enter any Key ') ;
    namasteBtn.textContent='Namaste World! : '+ name;

}jay