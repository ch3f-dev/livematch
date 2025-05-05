const pitch = document.querySelector('.mainPitch');


// this is declaring variable for each footballers on the pitch
const footballers = [
    { name: 'Doji', id: 'P1', x: 100, y: 100 }, // x and y represents the initial position of player on the horizontal and vertical axis respectively
    { name: 'Longs', id: 'P2', x: 200, y: 150 },
    { name: 'Shuaibu', id: 'P3', x: 300, y: 200 },
    { name: 'Dyelshak', id: 'P4', x: 400, y: 250 },
    { name: 'Peter', id: 'P5', x: 500, y: 300 },
    { name: 'Edwin', id: 'P6', x: 600, y: 350 },
    { name: 'Longs', id: 'P7', x: 0, y: 0 },
    { name: 'Shuaibu', id: 'P8', x: 100, y: 50 },
    { name: 'Dyelshak', id: 'P9', x: 200, y: 100 },
    { name: 'Peter', id: 'P10', x: 300, y: 150 },
    { name: 'Edwin', id: 'P11', x: 400, y: 200 },
    { name: 'Edwin', id: 'P12', x: 500, y: 250 },
];

// this loop creates a div for each footballers on the pitch
footballers.forEach(footballer => {
    player= document.createElement('div');
    player.id = footballer.id;
    player.innerText = footballer.name;
    player.className = 'absolute w-10 h-10 bg-white text-black font-bold rounded-full flex items-center justify-center text-sm transition-all duration-500';
    player.style.left = `${footballer.x}px`;
    player.style.top = `${footballer.y}px`;
    pitch.appendChild(player);
});
  

// this function helps to determine the players movement
function animation() {
    footballers.forEach(footballer => {
      const player = document.getElementById(footballer.id);
  
      // Create a random step between -10 and 10
      let horizantal = Math.round(Math.random() * 20) - 10;
      let vertical = Math.round(Math.random() * 20) - 10;
      footballer.x += horizantal;
      footballer.y += vertical;
  
      // Keep players inside the pitch boundaries (assuming 600x600)
      footballer.x = Math.max(0, Math.min(570, footballer.x)); // 600 - player size (30)
      footballer.y = Math.max(0, Math.min(570, footballer.y));
  
      // Move the player on the screen
      player.style.left = `${footballer.x}px`;
      player.style.top = `${footballer.y}px`;
    });
  
    // Call this function again after 1000 milliseconds (1 second)
    setTimeout(animation, 1000);
  }
  
  // Start the animation
animation();
  
function showEvent(text) {
    const eventEl = document.createElement('div');
    eventEl.innerText = text;
    eventEl.className = 'absolute top-4 left-1/2 transform -translate-x-1/2 bg-yellow-300 text-black px-4 py-2 rounded shadow-lg font-bold';
    pitch.appendChild(eventEl);

    setTimeout(() => eventEl.remove(), 3000);
};



 // Simulate events
 function showEvent(text) {
    const board = document.createElement('div');
    board.innerText = text;
    board.className = 'absolute top-4 left-1/2 transform -translate-x-1/2 bg-yellow-300 text-black px-4 py-2 rounded shadow-lg font-bold';
    pitch.appendChild(board);

    setTimeout(() => board.remove(), 3000);
  }

  setInterval(() => {
    const display = ['GOAL! ⚽', 'Foul ❌', 'Substitution 🔁'];
    const randomDisplay = display[Math.floor(Math.random() * display.length)];
    showEvent(randomDisplay);
  }, 7000);
    
  
