const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d"); // ctx === context;
canvas.width = 900; //960
canvas.height = 600; //640

//global variable
const defenders = [];
const enemies = [];
let gameOver = false;

//defenders
class Defender {
  constructor() {
    /* this.health = Math.floor(Math.random() * 100 + 1); */
    this.health = 10;
    this.killed = false;
    this.position = 1;
    /* this.position = Math.floor(Math.random() * 5 + 1); */
    this.shooting = false;
  }
}

function handleDefender() {
  const defNumber = 1;
  for (let i = 0; i < defNumber; i++) {
    defenders.push(new Defender());
    console.log(defenders.length + " numOfDef");
  }
}

document.addEventListener("click", function () {
  handleDefender();
  handleEnemies();
});

function handleCombat() {
  for (let i = 0; i < defenders.length; i++) {
    let currentDefender = defenders[i];
    if (defenders.length == 0 || enemies.length == 0) {
      gameOver = true;
    }
    for (let j = 0; j < enemies.length; j++) {
      let currentEnemy = enemies[j];
      if (
        currentDefender &&
        currentEnemy &&
        collision(currentDefender, currentEnemy)
      ) {
        if (!currentEnemy.killed && !currentDefender.killed) {
          currentEnemy.movement = 0;
          currentDefender.shooting = true;
          if (currentEnemy && currentEnemy.movement === 0) {
            currentDefender.health -= 1;
            console.log(currentDefender.health + " defender.health");
            if (currentDefender.health <= 0) {
              currentDefender.killed = true;
              currentDefender.shooting = false;
              currentEnemy.movement = currentEnemy.speed;
              console.log(currentEnemy.movement + ` enemy.movement`);
            }
          }
          if (currentDefender && currentDefender.shooting) {
            currentEnemy.health -= 1;
            console.log(currentEnemy.health + " enemy.health");
            if (currentEnemy.health <= 0) {
              currentEnemy.killed = true;
              currentDefender.shooting = false;
              enemies.splice(j, 1);
              j--;
              console.log(currentDefender.shooting + " defender.shooting");
            }
          }
        } else {
          currentEnemy.movement = currentEnemy.speed;
        }
      }
    }
    if (currentDefender && currentDefender.killed) {
      defenders.splice(i, 1);
      i--;
      console.log("defender has killed");
    }
  }
}

/* function handleCombat() {
  class Defenderr {
    constructor() {
      this.health = 10;
      this.killed = false;
    }
  }
  let defenderrs = [];
  for (let d = 0; d < 1; d++) {
    defenderrs.push(new Defenderr());
  }
  class Enemyy {
    constructor() {
      this.health = 6;
      this.killed = false;
    }
  }
  let enemiess = [];
  for (let e = 0; e < 1; e++) {
    enemiess.push(new Enemyy());
  }

  for (let i = 0; i < defenderrs.length; i++) {
    for (let j = 0; j < enemiess.length; j++) {
      if (!defenderrs[i].killed && !enemiess[j].killed) {
        defenderrs[i].health--;
        console.log(defenderrs[i].health);
        enemiess[j].health--;
        console.log(enemiess[j].health);
        console.log("-------");
        if (defenderrs[i].health <= 0) {
          defenderrs[i].killed = true;
        }
        if (enemiess[j].health <= 0) {
          enemiess[j].killed = true;
        }
      } else {
        gameOver = true;
      }
    }
  }
  // Game Over Logic
  for (let i = 0; i < defenderrs.length; i++) {
    if (!defenderrs[i].killed) {
      return; // If any defender is still alive, the game continues
    }
  }
  for (let j = 0; j < enemiess.length; j++) {
    if (!enemiess[j].killed) {
      return; // If any enemy is still alive, the game continues
    }
  }
  gameOver = true; // If all defenders or all enemies are killed, the game is over
} */

//enemies
class Enemy {
  constructor() {
    this.speed = 1;
    this.movement = this.speed;
    /* this.health = Math.floor(Math.random() * 100 + 1); */
    this.health = 7;
    this.position = 1;
    /* this.position = Math.floor(Math.random() * 5 + 1); */
    this.killed = false;
  }
}
function handleEnemies() {
  const enemyNumber = 2;
  for (let i = 0; i < enemyNumber; i++) {
    enemies.push(new Enemy());
    console.log(enemies.length + " numOfEnemy");
  }
}

function animate() {
  /* ctx.clearRect(0, 0, canvas.width, canvas.height); */
  handleCombat();
  if (!gameOver) {
    requestAnimationFrame(animate);
  }
}
animate();

function collision(a, b) {
  if (a.position === b.position) {
    result = true;
    console.log(result);
    {
      return true;
    }
  }
}
