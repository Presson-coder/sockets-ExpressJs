const joinRoomButton = document.getElementById('room-button');
const messageInput = document.getElementById('message-input');
const roomInput = document.getElementById('room-input');
const form = document.getElementById('form');

form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = messageInput?.value;
    const room = roomInput?.value;

    if(message === '') return;
    displayMessage(message);

    messageInput.value = '';
});

function displayMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    document.getElementById('message-container')?.append(messageElement);
}

joinRoomButton?.addEventListener('click', () => {
    const room = roomInput?.value;
})