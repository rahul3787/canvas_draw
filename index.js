let isDrawing = false;
let isDraw = false;

let x = 0;
let y = 0;

var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";

var TrinagleId = [];

const canvas = document.getElementById("myCanvas");
const context = canvas.getContext("2d");

canvas.addEventListener("mousedown", (e) => {
  x = e.offsetX;
  y = e.offsetY;
  isDrawing = true;
});

window.addEventListener("mouseup", (e) => {
  if (isDrawing === true) {
    drawLine(context, x, y, e.offsetX, e.offsetY);
    x = 0;
    y = 0;
    isDrawing = false;
  }
});

function drawLine(context, x1, y1, x2, y2) {
  console.log("MOVETO: ", x1, " ", y1);

  console.log("LineTO: ", x2, " ", y2);

  console.log("S", context);

  context.beginPath();
  context.strokeStyle = "black";
  context.lineWidth = 1;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);

  context.lineTo(x2 + 100, y2 + 130);
  const bgColor = "#" + (((1 << 24) * Math.random()) | 0).toString(16);

  console.log(bgColor);
  context.fillStyle = bgColor;

  //   console.log(bgColor + `${Math.floor(Math.random() * chars.length)}`);

  context.id = bgColor + `${Math.floor(Math.random() * chars.length)}`;

  TrinagleId.push(context.id);

  context.fill();
  context.closePath();
  context.stroke();
}
