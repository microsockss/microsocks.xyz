var cons = document.getElementById("terminal");
var text = '~$ "DEVELOPER"';
var lineArr = text.split("\n");
var TextArrs = [];
var toggle = true;
var isEnd = false;
var isSpassPressed = false;
for(var i = 0; i < lineArr.length; i++){
  TextArrs.push(lineArr[i]);
}
var i =0 ,j = 0;
document.addEventListener('keydown', function(event) {
  if(event.which === 32){
   isSpassPressed = true;
  }
});
function addChar() {
  if(isSpassPressed){
    i = 0;
    j = 0;
    isEnd = false;
    cons.innerHTML = "";
    isSpassPressed = false;
  }
  if(isEnd){
    var cursor = document.getElementById("cursor");
    cursor.style.display = 'none';
    if(toggle){
      cursor.style.display = '';
    }else{
      cursor.style.display = 'none';
    }
    toggle = !toggle;
  }
  if(TextArrs[i][j]){
    if(j ===0){
      cons.innerHTML += ""+TextArrs[i][j++];
    }else{
      cons.innerHTML += TextArrs[i][j++];
    }
  } else if(TextArrs[i++]) {
    cons.innerHTML += "<br />";
    j = 0;
    if(i >= TextArrs.length){
      /*i = 0;*/ //to reset each time and start again automatically make i = 0 here
      cons.innerHTML = cons.innerHTML.toString().substr(0,cons.innerHTML.toString().length-4) + "<span id=\"cursor\"></span>";
      isEnd = true;
    }
  }
}
setInterval(addChar,100);
