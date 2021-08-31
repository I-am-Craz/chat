const joinForm = document.forms['join-form'];
let userName = joinForm.elements['name'];
let room = joinForm.elements['room'];

joinForm.onsubmit = async (e) => {
    e.preventDefault();

    sessionStorage.setItem('name', userName.value.trim());
    sessionStorage.setItem('room', room.options[room.selectedIndex].textContent.trim());
    
    window.location.href = 'http://localhost:7000/chat';
}