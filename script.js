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

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", () => (isDraw = true));
canvas.addEventListener("mouseup", () => (isDraw = false));
canvas.addEventListener("mouseout", () => (isDraw = false));
