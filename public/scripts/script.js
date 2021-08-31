let messages = document.getElementById('messages');
let form = document.getElementById('form');
let input = document.getElementById('input');

getALLMessages();

async function getALLMessages(){
    let data = JSON.stringify({
        room: sessionStorage.getItem('room')
    });
    let response = await fetch('/chat', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: data
    });
    let result = await response.json();
    for(let item of result){
        createMessage(item.user, item.date, item.content);
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (input.value) {
        socket.emit('chat message', {
            user: sessionStorage.getItem('name'),
            message: input.value
        });
        input.value = '';
    }
});

socket.on('chat message', async function(data) {
    let date = new Date();
    let formatDate = new Date(new Date().toString().split('GMT')[0]+' UTC').toISOString();
    
    let data2 = JSON.stringify({
        room: sessionStorage.getItem('room'),
        user: sessionStorage.getItem('name'),
        content: data.message,
        date: formatDate
    });
    let response = await fetch('/message', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: data2
    });
    let result = await response.json();

    createMessage(data.user, formatDate, data.message);
    
    window.scrollTo(0, document.body.scrollHeight);
});

function createMessage(user, date, content){
    let timeNow = '';
    let d = `${date.slice(0, date.indexOf('T'))}`;
    let time = `${date.slice(date.indexOf('T') + 1, date.indexOf('.000Z'))}`;
    timeNow = `${d}-${time}`;
   
    let item = document.createElement('li');
    if(user === sessionStorage.getItem('name')){
        item.innerHTML = `
        <p class="fw-bold">${user}</p>
        <p class="mb-4">${content}</p>
        <div class="message-timestamp-right">${timeNow}</div>`;
        item.setAttribute('class', 'message-green');
    } else {
        item.innerHTML = `
        <p class="fw-bold">${user}</p>
        <p class="mb-4">${content}</p>
        <div class="message-timestamp-left">${timeNow}</div>`;
        item.setAttribute('class', 'message-blue');
    } 
    messages.appendChild(item);
}