function palindrome(str) {
  var symbols = /\W|_/g;
  str = str.replace(symbols, "").toLowerCase();
  
  var p = str.replace(symbols, "").toLowerCase().split("").reverse("").join("");
  return Boolean(str === p );
  
}



palindrome("eye");

