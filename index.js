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


var BtnStrts = document.getElementById('BtnStrts');
BtnStrts.addEventListener('click',function(){

  map.setBasemap('streets');
 });


var BtnTopo = document.getElementById('BtnTopo');
BtnTopo.addEventListener('click',function(){

map.setBasemap('topo');
 });


var BtnSat = document.getElementById('BtnSat');
BtnSat.addEventListener('click',function(){

map.setBasemap('satellite');
 });


var BtnOcean = document.getElementById('BtnOcean');
BtnOcean.addEventListener('click',function(){

map.setBasemap('oceans');
 });
 
 




 /*

<script>
  
require(["dojo/dom", "dojo/domReady!"], function() {

var BtnOcean = document.getElementById('Strts');
BtnOcean.addEventListener('click',function(){

map.setBasemap('oceans');
 });
});

</script>



*/