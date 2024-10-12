const playerButton = document.getElementById('playerButton');
const dmButton = document.getElementById('dmButton');

playerButton.addEventListener('click', () => {
  window.location.href = "player.html"; 
});

dmButton.addEventListener('click', () => {
  window.location.href = "dm.html"; 
});
