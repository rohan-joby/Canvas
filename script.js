const canvas = document.querySelector("#board");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let isDraw = false;
// ctx.strokeStyle = "#111";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 10;

let startX = 0;
let startY = 0;
let hue = 0;

function draw(e) {
  if (!isDraw) {
    return;
  }
  //console.log(startX, startY);

  ctx.beginPath();
  ctx.strokeStyle = `hsl(${hue}, 50%, 60%)`;
  ctx.moveTo(startX, startY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [startX, startY] = [e.offsetX, e.offsetY];

  hue++;
  if (hue > 360) {
    hue = 0;
  }
}

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", (e) => {
  isDraw = true;
  [startX, startY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener("mouseup", () => (isDraw = false));
canvas.addEventListener("mouseout", () => (isDraw = false));
