module.exports = function getZerosCount(number, base) {
  // your implementation


  var i = 2; 
  var k=1;
  var mas = [];
  let count =1;
  let arr =[];

  do
  {
      if (base % i == 0)
      {
          mas.push(i);
          base = base / i;
      }
      else{i++;}
  }while (i <= base)


  var result = {};
  mas.forEach(function(a){
      if (result[a] != undefined)
          ++result[a];
      else
          result[a] = 1;
  });
    mas=[];


var lastKey;
var key;

    let fo = Object.values(result);
    let max = Math.max(...fo);

let sum=0;

  for(let i =0; i<fo.length; i++){
 		sum+=fo[i];
  }

var sortable = [];
for (var key in result) {
    sortable.push([key]);
	sortable.push([result[key]]);
}

sortable.sort(function(a, b) {
    return a[1] - b[1];
});

//alert( sortable );


for(var key in result){
//alert( "Ключ: " + key + " значение: " + result[key] );
	    if(result.hasOwnProperty(key)){
			var last =key;
      	
    }

if (sortable[sortable.length-1]<last){
		key = last;

//alert("посл" + key);
}	
else 
    {
Object.prototype.getKey = function(value){
  for(var key in result){
    if(result[key] == value){
      return key;
    }
  }
  return null;
};
	key = result.getKey(max);
    }
}

max=result[key];

 arr.push(result[key]);
mas.push(key);

//alert("макс" + max);
//alert(mas);
//alert(arr);

let ret =0;

  while(number){
  number = (number/mas[0])|0;
  ret+=number;
  }
  return (ret/max)|0;
}
 
