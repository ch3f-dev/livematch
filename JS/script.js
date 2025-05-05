const pitch = document.querySelector('.mainPitch');

// Add left goal box (taller, narrower)
const leftPost = document.createElement('div');
leftPost.className = 'absolute left-0 top-1/2 transform -translate-y-1/2 w-36 h-56 border-4 border-white';
pitch.appendChild(leftPost);

// Add right goal box (taller, narrower)
const rightPost = document.createElement('div');
rightPost.className = 'absolute right-0 top-1/2 transform -translate-y-1/2 w-36 h-56 border-4 border-white';
pitch.appendChild(rightPost);

// Add center line
const centerLine = document.createElement('div');
centerLine.className = 'absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-white opacity-60';
pitch.appendChild(centerLine);

// Add center circle arc
const centerCircle = document.createElement('div');
centerCircle.className = 'absolute border border-white rounded-full';
centerCircle.style.width = '120px';
centerCircle.style.height = '120px';
centerCircle.style.left = '50%';
centerCircle.style.top = '50%';
centerCircle.style.transform = 'translate(-50%, -50%)';
pitch.appendChild(centerCircle);

// Footballers on the pitch
const footballers = [
  { name: 'Doji', id: 'P1', x: 100, y: 100 },
  { name: 'Longs', id: 'P2', x: 200, y: 150 },
  { name: 'Shuaibu', id: 'P3', x: 300, y: 200 },
  { name: 'Dyelshak', id: 'P4', x: 400, y: 250 },
  { name: 'Peter', id: 'P5', x: 500, y: 300 },
  { name: 'Edwin', id: 'P6', x: 570, y: 350 },
  { name: 'Longs', id: 'P7', x: 0, y: 0 },
  { name: 'Shuaibu', id: 'P8', x: 100, y: 50 },
  { name: 'Dyelshak', id: 'P9', x: 200, y: 100 },
  { name: 'Peter', id: 'P10', x: 300, y: 150 },
  { name: 'Edwin', id: 'P11', x: 400, y: 200 },
  { name: 'Edwin', id: 'P12', x: 500, y: 250 },
];

// Create div for each footballer
footballers.forEach(footballer => {
  const player = document.createElement('div');
  player.id = footballer.id;
  player.innerText = footballer.name;
  player.className =
    'absolute w-10 h-10 bg-white text-black font-bold rounded-full flex items-center justify-center text-sm transition-all duration-500';
  player.style.left = `${footballer.x}px`;
  player.style.top = `${footballer.y}px`;
  pitch.appendChild(player);
});

// this handles player movement
function animation() {
  footballers.forEach(footballer => {
    const player = document.getElementById(footballer.id);

    // Random steps
    const horizontal = Math.round(Math.random() * 20) - 10;
    const vertical = Math.round(Math.random() * 20) - 10;
    footballer.x += horizontal;
    footballer.y += vertical;

    // this allows players to stay within the pitch
    footballer.x = Math.max(0, Math.min(570, footballer.x));
    footballer.y = Math.max(0, Math.min(570, footballer.y));

    player.style.left = `${footballer.x}px`;
    player.style.top = `${footballer.y}px`;
  });

  setTimeout(animation, 1000);
}

animation();

// Show match events like goal, foul etc as text
function showEvent(text) {
  const board = document.createElement('div');
  board.innerText = text;
  board.className =
    'absolute top-4 left-1/2 transform -translate-x-1/2 bg-yellow-300 text-black px-4 py-2 rounded shadow-lg font-bold';
  pitch.appendChild(board);

  setTimeout(() => board.remove(), 3000);
}

// Simulate random events
setInterval(() => {
  const display = ['GOAL! ⚽', 'Foul ❌', 'Substitution 🔁'];
  const randomDisplay = display[Math.floor(Math.random() * display.length)];
  showEvent(randomDisplay);
}, 7000);
