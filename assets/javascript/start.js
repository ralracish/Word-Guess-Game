//Press any letter key to get started..
 document.onkeyup = function(evt) {

   evt = evt || window.event;
   var charCode = evt.which || evt.keyCode;
   var charStr = String.fromCharCode(charCode);

   /////Begin when letter key are pressed/////////
   if (/[a-z]/i.test(charStr)) {