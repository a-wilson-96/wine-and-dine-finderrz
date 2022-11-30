//  www.themealdb.com/api/json/v1/1/lookup.php?i=
var list = document.getElementById('saved-food')
var savedFood = localStorage.getItem('localfood');
var savedDrink = localStorage.getItem('localdrink');
// var idLink = "www.themealdb.com/api/json/v1/1/lookup.php?i=";
// var didLink = "www.thecocktaildb.com/api/json/v1/1/lookup.php?i="
// var li = document.createElement('li');
// var arr = [];
// var darr = [];


// console.log(savedFood.length);
// console.log(savedFood);
// // console.log(savedFood.lastIndexOf)

// // turns localstorage string into arrays of int
// arr = savedFood.split(',').map(element => {
//   return Number(element);
// });

// // console.log(arr);
// var flink;
// for (i=0; i < arr.length; i++) {
//   flink = idLink + arr[i];
//   fetch(flink)
//   .then(function (res) {
//     return res.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function(err) {
//     return(err);
//   });
// }

// console.log(savedDrink);
// darr = savedDrink.split(',').split.map(element => {
//   return Number(element);
// });

// var dlink;
// for (i=0; i < darr.length; i++) {
//   dlink = didLink +darr[i];
//   console.log(dlink);
// }



// for(i=0; i<savedFood.length; i++) {
//     // list.appendChild(document.createElement("li"));
//     li.append(idLink + savedFood[i]);
//     list.appendChild(li);
// }




// fetch(nation) //food by nation api
// .then(function (res) {
//   return res.json();
// })
// .then(function (data) {
//   console.log(data);
//   if(data.meals == null) {
//     console.log("Error: incorrect meal input");
//   }else {
//    console.log(data);
//   }
// })
// .catch(function(err) {
//   return(err);
// });

// fetch(base) //cocktail by drink choice api
//   .then(function (res) {
//     return res.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (err) {
//     return (err);
//   });