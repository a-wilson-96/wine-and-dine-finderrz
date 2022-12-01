//  www.themealdb.com/api/json/v1/1/lookup.php?i=
var flist = document.getElementById('saved-food');
var dlist = document.getElementById('saved-drinks');
var savedFood = localStorage.getItem('savedFood');
var savedDrink = localStorage.getItem('savedDrink');

var foodArr = savedFood.split(',');
var drinkArr = savedDrink.split(',');
console.log(foodArr);
console.log(drinkArr);

for(i=0; i < foodArr.length; i++) {
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(foodArr[i]));
    flist.appendChild(li);
}

for(i=0; i < drinkArr.length; i++) {
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(drinkArr[i]));
    dlist.appendChild(li);
}



// console.log(savedFood.length);
// console.log(savedDrink.length);