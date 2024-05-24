document.querySelector('.burger').addEventListener('click', function(){
    if (document.getElementById('burger').checked) {
    document.querySelector('.nav').style.display='block'
}else{
    document.querySelector('.nav').style.display='none'
}
})
