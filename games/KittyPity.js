/*
First time? Check out the tutorial game:
https://sprig.hackclub.com/gallery/getting_started

@title: KittyPity
@author: 
@tags: []
@addedOn: 2024-00-00
*/

// Sprites
const player = "p"
const Goal = "t"
const box = "B"
const Maze = "G"
const Enemy = "E"
const Poodle = "R"




//Tunes And General

const level3 = tune`
410.958904109589: B5^410.958904109589,
410.958904109589: B5^410.958904109589,
410.958904109589: B5^410.958904109589,
410.958904109589: E5~410.958904109589,
410.958904109589: F5~410.958904109589,
410.958904109589: G5~410.958904109589,
410.958904109589: F5~410.9589041095.. . B5.4.0......4109589,
410.958904109589: A5~410.958904109589 + C5^410.958904109589,
410.958904109589: G5~410.958904109589 + B4^410..58904109589,
410.958904109589: F5~410.958904109589 + B5~410..58904109589 + C5^410.958904109589 + A4^410.958904109589,
410.958904109589: G5-410.958904109589,
410.958904109589: A5-410.958904109589 + B4^410.958904109589,
410.958904109589: G5-410.958904109589 + C5^410.958904109589 + A4^410.958904109589,
410.958904109589: E5~410.958904109589 + B4^410.958904109589,
410.958904109589: D5~410.958904109589 + A5-410.958904109589,
410.958904109589: E5~410.958904109589 + C5^410.958904109589,
410.958904109589: F5-410.958904109589 + B4^410.958904109589,
410.958904109589: G5-410.958904109589 + F5^410.958904109589 + C5^410.958904109589 + A4^410.958904109589,
410.958904109589: F5-410.958904109589 + A5~410.958904109589,
410.958904109589: E5-410.958904109589 + B5-410.958904109589 + G5-410.958904109589,
410.958904109589: C5-410.958904109589 + A5~410.958904109589,
410.958904109589: E5~410.958904109589,
410.958904109589: F5~410.958904109589 + A4^410.958904109589,
410.958904109589: G5~410.958904109589 + B4^410.958904109589,
410.958904109589: E5~410.958904109589 + A4^410.958904109589 + C5^410.958904109589,
410.958904109589: E5-410.958904109589 + B4^410.958904109589,
410.958904109589: D5-410.958904109589 + A4^410.958904109589 + F4-410.958904109589,
410.958904109589: C5-410.958904109589 + F5~410.958904109589 + D5^410.958904109589 + G4-410.958904109589 + E4-410.958904109589,
410.958904109589: D5-410.958904109589 + B4^410.958904109589 + A5~410.958904109589 + F4-410.958904109589,
410.958904109589: G5-410.958904109589 + C5^410.958904109589 + A4^410.958904109589 + B5^410.958904109589 + E4~410.958904109589,
410.958904109589: B4^410.958904109589 + G5~410.958904109589 + B5~410.958904109589,
410.958904109589: A5^410.958904109589`
const Undo = tune`
160.42780748663102,
160.42780748663102: D4^160.42780748663102 + A5~160.42780748663102,
160.42780748663102: E4^160.42780748663102 + G5~160.42780748663102 + A5-160.42780748663102 + D4/160.42780748663102,
160.42780748663102: F4^160.42780748663102 + F5~160.42780748663102 + A5-160.42780748663102 + D4/160.42780748663102,
160.42780748663102: G4^160.42780748663102 + E5~160.42780748663102 + A5-160.42780748663102 + D4/160.42780748663102,
160.42780748663102: A4^160.42780748663102 + D5~160.42780748663102 + A5-160.42780748663102,
160.42780748663102: B4^160.42780748663102 + C5~160.42780748663102,
160.42780748663102: A4-160.42780748663102 + D5/160.42780748663102 + D4~160.42780748663102,
160.42780748663102: G4-160.42780748663102 + E5/160.42780748663102 + A5^160.42780748663102 + D4~160.42780748663102,
160.42780748663102: F4-160.42780748663102 + F5/160.42780748663102 + A5^160.42780748663102 + D4~160.42780748663102,
160.42780748663102: E4-160.42780748663102 + G5/160.42780748663102 + A5^160.42780748663102 + D4~160.42780748663102,
160.42780748663102: D4-160.42780748663102 + A5/160.42780748663102,
160.42780748663102: A5^160.42780748663102 + G5~160.42780748663102 + F5~160.42780748663102 + E5~160.42780748663102 + C5~160.42780748663102,
160.42780748663102: G5^160.42780748663102 + A5-160.42780748663102 + E5~160.42780748663102 + D5~160.42780748663102 + C5~160.42780748663102,
160.42780748663102: F5^160.42780748663102 + G5-160.42780748663102 + A4^160.42780748663102 + B4^160.42780748663102 + G4^160.42780748663102,
160.42780748663102: E5^160.42780748663102 + F5-160.42780748663102 + F4^160.42780748663102 + D4^160.42780748663102,
160.42780748663102: D5^160.42780748663102 + E5-160.42780748663102 + F4^160.42780748663102 + E4^160.42780748663102 + D4^160.42780748663102,
160.42780748663102: C5^160.42780748663102 + D5-160.42780748663102 + A4-160.42780748663102 + B4-160.42780748663102,
160.42780748663102: A4-160.42780748663102 + C5-160.42780748663102 + G4~160.42780748663102 + F4~160.42780748663102 + B5~160.42780748663102,
160.42780748663102: B4~160.42780748663102 + C5~160.42780748663102 + A4~160.42780748663102,
160.42780748663102: D5^160.42780748663102 + C5-160.42780748663102,
160.42780748663102: E5^160.42780748663102 + B4-160.42780748663102 + E4-160.42780748663102,
160.42780748663102: F5^160.42780748663102 + A4-160.42780748663102,
160.42780748663102: E5^160.42780748663102 + A4-160.42780748663102 + D4-160.42780748663102,
160.42780748663102: D5^160.42780748663102 + B4-160.42780748663102,
160.42780748663102: C5^160.42780748663102 + B4-160.42780748663102 + B5~160.42780748663102 + C4~160.42780748663102,
160.42780748663102: D5^160.42780748663102 + A4-160.42780748663102,
160.42780748663102: E5^160.42780748663102 + E4-160.42780748663102 + B4-160.42780748663102,
160.42780748663102: F5^160.42780748663102 + B4-160.42780748663102 + C4~160.42780748663102 + G4~160.42780748663102,
160.42780748663102: G5^160.42780748663102 + E4-160.42780748663102 + B4-160.42780748663102 + A4-160.42780748663102,
320.85561497326205`
const BattleRoyale = tune`
500: F4~500 + E5~500,
500: D4^500 + G4~500 + E5-500 + D5-500,
500: E4^500 + A4~500,
500: F4^500 + G5/500,
500: G4^500 + A5/500 + F5/500,
500: A4^500 + G5/500,
500: B4^500 + D4-500,
500: C5^500 + E4-500 + C4-500 + E5-500,
500: B4^500 + D4-500 + A5~500 + F5-500 + D5-500,
500: A4^500 + B5~500 + G5~500 + E5-500,
500: G4^500 + A5~500,
500: F4^500 + E5/500,
500: E4^500 + F5/500 + D5/500,
500: D4^500 + E5/500 + G5^500,
500: A4-500 + A5^500 + F5^500,
500: B4-500 + G4-500 + D5~500 + G5^500,
500: A4-500 + E5~500 + C5~500,
500: A5-500 + D5~500,
500: D4~500 + B5-500 + G5-500,
500: E4~500 + C4~500 + A5-500,
500: D4~500,
5500`
const Knockout = tune`
160.42780748663102,
160.42780748663102: D4^160.42780748663102 + A5~160.42780748663102,
160.42780748663102: E4^160.42780748663102 + G5~160.42780748663102 + A5-160.42780748663102 + D4/160.42780748663102,
160.42780748663102: F4^160.42780748663102 + F5~160.42780748663102 + A5-160.42780748663102 + D4/160.42780748663102,
160.42780748663102: G4^160.42780748663102 + E5~160.42780748663102 + A5-160.42780748663102 + D4/160.42780748663102,
160.42780748663102: A4^160.42780748663102 + D5~160.42780748663102 + A5-160.42780748663102,
160.42780748663102: B4^160.42780748663102 + C5~160.42780748663102,
160.42780748663102: A4-160.42780748663102 + D5/160.42780748663102 + D4~160.42780748663102,
160.42780748663102: G4-160.42780748663102 + E5/160.42780748663102 + A5^160.42780748663102 + D4~160.42780748663102,
160.42780748663102: F4-160.42780748663102 + F5/160.42780748663102 + A5^160.42780748663102 + D4~160.42780748663102,
160.42780748663102: E4-160.42780748663102 + G5/160.42780748663102 + A5^160.42780748663102 + D4~160.42780748663102,
160.42780748663102: D4-160.42780748663102 + A5/160.42780748663102,
160.42780748663102: A5^160.42780748663102 + G5~160.42780748663102 + F5~160.42780748663102 + E5~160.42780748663102 + C5~160.42780748663102,
160.42780748663102: G5^160.42780748663102 + A5-160.42780748663102 + E5~160.42780748663102 + D5~160.42780748663102 + C5~160.42780748663102,
160.42780748663102: F5^160.42780748663102 + G5-160.42780748663102 + A4^160.42780748663102 + B4^160.42780748663102 + G4^160.42780748663102,
160.42780748663102: E5^160.42780748663102 + F5-160.42780748663102 + F4^160.42780748663102 + D4^160.42780748663102,
160.42780748663102: D5^160.42780748663102 + E5-160.42780748663102 + F4^160.42780748663102 + E4^160.42780748663102 + D4^160.42780748663102,
160.42780748663102: C5^160.42780748663102 + D5-160.42780748663102 + A4-160.42780748663102 + B4-160.42780748663102,
160.42780748663102: A4-160.42780748663102 + C5-160.42780748663102 + G4~160.42780748663102 + F4~160.42780748663102 + B5~160.42780748663102,
160.42780748663102: B4~160.42780748663102 + C5~160.42780748663102 + A4~160.42780748663102,
160.42780748663102: D5^160.42780748663102 + C5-160.42780748663102,
160.42780748663102: E5^160.42780748663102 + B4-160.42780748663102 + E4-160.42780748663102,
160.42780748663102: F5^160.42780748663102 + A4-160.42780748663102,
160.42780748663102: E5^160.42780748663102 + A4-160.42780748663102 + D4-160.42780748663102,
160.42780748663102: D5^160.42780748663102 + B4-160.42780748663102,
160.42780748663102: C5^160.42780748663102 + B4-160.42780748663102 + B5~160.42780748663102 + C4~160.42780748663102,
160.42780748663102: D5^160.42780748663102 + A4-160.42780748663102,
160.42780748663102: E5^160.42780748663102 + E4-160.42780748663102 + B4-160.42780748663102,
160.42780748663102: F5^160.42780748663102 + B4-160.42780748663102 + C4~160.42780748663102 + G4~160.42780748663102,
160.42780748663102: G5^160.42780748663102 + E4-160.42780748663102 + B4-160.42780748663102 + A4-160.42780748663102,
320.85561497326205`
const Wall = 'W'

// Walks

const step1 = tune`
192.30769230769232: C4~192.30769230769232,
5961.538461538462`
const step2 = tune`
192.30769230769232: B5~192.30769230769232,
5961.538461538462`
const step3 = tune`
200: B5^200,
6200`
const step4 = tune`
185.1851851851852: B5^185.1851851851852,
5740.740740740741`

//Level 3
const Sun = "s"
const nighttime = "n"
const grass = "g"

// ImportantVariable

setLegend(
  [player, bitmap`
................
................
....LL000000....
....LL064640....
....LL064640....
....LL066660....
....LL000000....
.....L00660.....
.....L00660.....
.....L00000.....
.....LLLLL......
................
................
................
................
................`],
  [box, bitmap`
................
................
................
........000.....
.....000000.....
....00000000....
....00003030....
....00003030....
....00003000....
....00003000....
....00000000....
....00000000....
................
................
................
................`],
  [Goal, bitmap`
................
...00000........
...93390........
...93390........
...90090........
...00000........
...00000........
................
................
................
................
................
................
................
................
................
................`],
  [Wall, bitmap`
0007077070000007
0000000000000777
0000070000007700
0000070077770707
0000077770000077
0000000000000007
0000000000000000
0000000000000000
0000000000000000
0000000000777000
0000007770777000
0000777770777000
0000077770000000
0000000000000000
0000000000000000
0000000000000000`],

  [Sun, bitmap`
..........000000
..........062260
..........062260
..........001100
............13..
................
................
................
................
................
................
................
................
................
................
................`],
  [nighttime, bitmap`
0555555555555577
0555555555555555
0577757775555757
0777777777777777
0555555555555555
0555555555555555
0777555555555555
0777777777777777
0777777777777777
0555555555555555
0775777777777777
0777777777755557
0777777555555555
0555557555555555
0777755577777777
0555555555555555`],
  [grass, bitmap`
................
................
................
................
................
................
................
................
................
................
................
................
................
................
FFDDFDDDFFDDDFFF
FFFFFFFFFDDFFFDF`],
  [Enemy, bitmap`
................
................
................
................
.....000000.....
.....0L2L00.....
.....0L2L00.....
...0002220000...
...0222222200...
...0222222200...
...0202220200...
...0202220200...
...0000000000...
.....020200.....
.....020200.....
.....000000.....`],
  [Maze, bitmap`
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000`],
  [Poodle, bitmap`
.........2......
........222.222.
........281.182.
........2811182.
........2112112.
........2112112.
........2182812.
........2218112.
.......LL222222.
......L3L030302.
.....L33L030302.
.....LLLL000002.
...............2
................
................
................`],
);

let level = 0;

const levels = [
  map`
........
........
........
........
........
........
........`,
  map`
GGGGG
G.t.R
G.B.G
G...G
GGpGG`,
  map`
WWWWW
BBp.W
tB..W
BWWWW`,
  map`
nnns
ngBp
nnng`,
  map`
GG...t
G..B..
p.....
.....G
EG.GEG
GGGGGG`,
  map`
GGGGGG
GR..tG
G...BG
G....G
GR..pG
GGGGGG`,
  map`
GGGGGG
GG...G
G.G..G
G..G.G
G...GG
GGGGGG`,
];

// Main Menu

addText("Press K to start", { x: 2, y: 4, color: color`1` });

////

const currentLevel = levels[level];
setMap(currentLevel);

setSolids([player, box, nighttime, Sun, Wall, Maze, Enemy]);

setPushables({
  [player]: [box]
});

function StartGame() {
  if (level == 0) {
    playTune(level3)
  } else {
    return false;
  }
}

function EnemyMove() {
  let playerSprite = getFirst(player);
  let Enemies = getAll(Enemy);

  Enemies.forEach(Enemy => {
    // Calculate distance between enemy and player
    let dx = playerSprite.x - Enemy.x;
    let dy = playerSprite.y - Enemy.y;

    // Move towards player in the direction with the highest change
    if (Math.abs(dx) > Math.abs(dy)) {
      // Move horizontally
      Enemy.x += Math.sign(dx);
    } else {
      // Move vertically
      Enemy.y += Math.sign(dy);
    }
  });
}

function PoodleMove() {
  let playerSprite = getFirst(player);
  let Poodles = getAll(Poodle);

  Poodles.forEach(Poodle => {
    // Calculate distance between enemy and player
    let dx = playerSprite.x - Poodle.x;
    let dy = playerSprite.y - Poodle.y;

    // Move towards player in the direction with the highest change
    if (Math.abs(dx) > Math.abs(dy)) {
      // Move horizontally
      Poodle.x += Math.sign(dx);
    } else {
      // Move vertically
      Poodle.y += Math.sign(dy);
    }
    if (playerSprite.y - Poodle.y == 0 && playerSprite.x - Poodle.x == 0) {


      setTimeout(() => {
        if (level < 7) {
        addText("Your dead!", { x: 4, y: 4, color: color`7` });
        }
      }, 2000)

      clearText()

      setMap(currentLevel);
    }
  });
}

function resetLevel() {
  // Clear any text on the screen
  clearText();

  // Reset the level variable to the initial level (e.g., level 0)
  level = 0;

  // Get the current level map based on the reset level
  const currentLevel = levels[level];

  // Reset the game map to the initial level map
  setMap(currentLevel);

}

let LevelTextNumber = level.toString(); // the int turned Into a string

function LevelSystem() {
  addText(LevelTextNumber, { x: 1, y: 1, color: color`6` });
}


onInput("s", () => {
  getFirst(player).y += 1
});

onInput("w", () => {
  getFirst(player).y -= 1
  playTune(step2, 1)
});

onInput("a", () => {
  getFirst(player).x -= 1

});

onInput("d", () => {
  getAll(player).x += 1
  playTune(step4, 1)
});

setTimeout(() => {
  onInput("k", () => {
    StartGame()
  });
  clearText()
}, 200)

onInput("j", resetLevel);





afterInput(() => {

  const targetfound = tilesWith(Goal).length;
  const NumberCovered = tilesWith(Goal, box).length;
  const grassfall = tilesWith(box).length;
  const Covered = tilesWith(box, grass).length;
  const currentLevel = levels[level];

  let iterationCount = 0;
  const maxIte = 10;
  const max2 = 2;

  LevelSystem();
LevelTextNumber = `${level}`;

    console.log(LevelTextNumber)
  // Starting the game!

  while (level == 5 && iterationCount < maxIte) {
    // do stuff
    EnemyMove();

    iterationCount++;
  }

  while (level <= 6 && iterationCount < max2) {
    PoodleMove();
    iterationCount++;

  }

  if (NumberCovered == targetfound) {
    level += 1;

    

    if (currentLevel !== undefined) {
      setMap(currentLevel);
    }

    if (level == 7) {
      setTimeout(() => {
        addText("Thats the end!", { x: 4, y: 4, color: color`3` });
      }, 1000)

    }

  }

  setTimeout(() => {}, 2500)

  clearText();





});