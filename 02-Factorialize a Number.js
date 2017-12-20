
function factorialize(num) {
  var factor = 1;
  
  if(num <= 0){
    return 1;    
  }
  
  for(var ix = 1; ix <= num; ix++){
    factor *= ix;
  }
      
  
  return factor;
}

factorialize(5);

