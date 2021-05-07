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
