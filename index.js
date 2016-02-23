'use strict'

var Mad = document.getElementById('btnMad');
Mad.addEventListener('click',function(){

  map.centerAndZoom([-3.688510, 40.453010],5);
  var delay = 1000;
  setTimeout(function(){
  map.centerAndZoom([-3.688510, 40.453010],10);
     }, delay); 
 })


var Bcn = document.getElementById('btnBcn');
Bcn.addEventListener('click',function(){

map.centerAndZoom([-3.688510, 40.453010],5);
  var delay = 1000;
  setTimeout(function(){
  map.centerAndZoom([2.154007, 41.390205],10);
     }, delay); 
 })


var Riv = document.getElementById('btnRiv');
Riv.addEventListener('click',function(){

map.centerAndZoom([-3.688510, 40.453010],5);
  var delay = 1000;

 
  setTimeout(function(){
  map.centerAndZoom([-3.529895, 40.371853],16);
     }, delay);
 })
