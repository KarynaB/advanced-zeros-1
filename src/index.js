module.exports = function getZerosCount(number, base) {
  // your implementation
  let i = 2;
  let count = 0; 
  let last, key, fo, max;
  let mas = [];
  let result = {};

  do
  {
      if (base % i == 0)
      {
          mas.push(i);
          base = base / i;
      }
      else{i++;}
  }while (i <= base)

  mas.forEach(function(a){
      if (result[a] != undefined)
          ++result[a];
      else
          result[a] = 1;
  });

     fo = Object.values(result);
     max = Math.max(...fo);

     Object.prototype.getKey = function(value){
        for(key in result){
          if(result[key] == value){
            return key;
          }
        }
        return null;
      };

    for (key in result) {
        if(result.hasOwnProperty(key))
        last = key; 	
    }

    if (fo[0]<last) key = last;
    else key = result.getKey(max);

    max = result[key];

  while(number){
  number = (number/key)|0;
  count += number;
  }

  return (count/max)|0;
}
 
