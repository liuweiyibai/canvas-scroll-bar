/*
 * @Author: Administrator
 * @Date:   2017-03-02 14:19:04
 * @Last Modified by:   Administrator
 * @Last Modified time: 2017-03-02 14:19:31
 */

'use strict';
var mycanvas = document.getElementById("mycanvas");
var context = mycanvas.getContext("2d");
//外圆
function arc1() {
  context.beginPath();
  context.strokeStyle = "rgb(255,238,210)";
  //用径向渐变去填充圆的颜色
  var grd = context.createRadialGradient(250, 250, 1, 250, 250, 100);
  // offset:颜色渐变的优先级，值是在0-1之间
  grd.addColorStop(1, "rgb(18,53,85)");
  context.fillStyle = grd;
  context.lineWidth = 5;
  context.arc(250, 250, 100, 0, Math.PI * 2);
  context.fill();
  context.stroke();
  context.closePath();
}
//进度条的圆
function arc2(n) {
  context.beginPath();
  context.strokeStyle = "rgb(209,73,78)";
  context.arc(250, 250, 100, 0, n * deg);
  context.lineWidth = 10;
  context.stroke();
  context.closePath();
}
//百分比的文字
function text(n) {
  context.beginPath();
  context.fillStyle = "rgb(209,73,78)";
  context.font = "50px 幼圆";
  context.fillText(n + "%", 220, 260);
  context.stroke();
  context.closePath();
}
var num = 1;
// 进度条和文字要保持一致的递增
var deg = Math.PI * 2 / 100; //将圆划分成一百等份跟百分比一样
function timer() {
  context.clearRect(0, 0, mycanvas.width, mycanvas.height);
  arc1();
  arc2(num);
  text(num);
  num++;
  if (num > 100) {
    num = 0;
  }
}
setInterval(timer, 100);
