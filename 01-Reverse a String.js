
function reverseString(str) {
  str.split("");
    var l = (str.length);
    var reverse = new Array(l);
  
      for(var ix = 0; ix < l; ix++){
      reverse[ix] = str[(l-1)-ix];
      }
  
   reverse = reverse.join('');
    
  return reverse;
}

reverseString("hello");

