let usersList = document.getElementById('users');

socket.emit('join', {
    name: sessionStorage.getItem('name'),
    room: sessionStorage.getItem('room')
});

socket.on('join', function(data){
    let content = '';
    for(let item of data){
        content += `<li style='color: ${generateRandomColor()};'>${item}</li>`;
    } 
    usersList.innerHTML = content;
});

function generateRandomColor(){
    return `#${Math.floor(Math.random()*16777215).toString(16)}`;
}