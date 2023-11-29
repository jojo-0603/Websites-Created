document.querySelector('#cross').style.display = 'none';
document.querySelector('#ham').addEventListener('click', function(){
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
})
