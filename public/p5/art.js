const COLORS = [
  [251, 81, 79],
  [7, 197, 140],
  [35, 110, 221],
  [214, 38, 38],
  [251, 52, 32],
  [64, 161, 238],
  [43, 38, 179],
  [250, 46, 152],
  [84, 221, 250],
  [251, 179, 21],
  [15, 15, 42],
  [245, 206, 73],
  [180, 128, 252],
];
const MIN_RANGE = 10;
const MAX_RANGE = 100;
let art;

class Art {
  constructor() {
    this.coords = {
      x: width / 2,
      y: height / 2,
    };
    this.color = [random(0, 255), random(0, 255), random(0, 255)];
  }

  getColor() {
    const randomColor = random(COLORS);
    this.color = randomColor;
  }

  getNewCoords() {
    const generateMoveCoord = (currentCoordValue) => {
      const newDirection = Array.from({ length: 3 }).map(() =>
        random([-1, 0, 1])
      );
      return (
        currentCoordValue + random(newDirection) * random(MIN_RANGE, MAX_RANGE)
      );
    };
    const { x, y } = this.coords;
    this.newCoords = {
      x: constrain(generateMoveCoord(x), 0, width - 1),
      y: constrain(generateMoveCoord(y), 0, height - 1),
    };
  }

  render() {
    stroke(color(this.color));
    strokeWeight(random([5, 8, 10, 15]));
    line(this.coords.x, this.coords.y, this.newCoords.x, this.newCoords.y);
  }
}

function setup() {
  const canvas = createCanvas(228, 228);
  canvas.parent("canvasHolder");
  frameRate(100);
  art = new Art();
}

function draw() {
  art.getColor();
  art.getNewCoords();
  art.render();
  stroke("white");
  strokeWeight(0);
  const diamondX = width / 2 - 14.375;
  const diamondY = height / 2 - 12.5;
  beginShape(TRIANGLE_FAN);
  vertex(diamondX + 14.375, diamondY + 12.5);
  vertex(diamondX + 14.375, diamondY + 3.75);
  vertex(diamondX + 23, diamondY + 12.5);
  vertex(diamondX + 14.375, diamondY + 21.25);
  vertex(diamondX + 5.5, diamondY + 12.5);
  vertex(diamondX + 14.375, diamondY + 3.75);
  endShape();
}
