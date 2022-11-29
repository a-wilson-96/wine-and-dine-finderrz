// //  User Inputs Cuisine and Alcohol 

// THEN user clicks submit button 
//     IF both inputs are not received
//         ALERT both inputs are required  
//     IF both inputs are received 
//         SHOW cuisine and cocktail ingredients
//         SHOW image of cuisine and cocktail 

// IF user clicks generate new pairing 
//     THEN random pairing will generate

// IF user clicks save your pairing 
//     ALERT this pairing has been saved    
//     THEN current selection is saved to list on local storage

// CLICK user clicks previous pairings
//     THEN user is directed to the list on the local storage  

var foodApiURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=';
var drinkApiURL = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=';
var nationChoice;
var drinkChoice;
var queryURL;

var searchForm = document.querySelector('#search-food-drink');  

function getNationChoice(choice) { //takes user input and returns the URL for the chosen food
  nationChoice = choice;
  queryURL = foodApiURL + nationChoice;
  return queryURL;
}//end getNationChoice 

function getDrink(choice) { //takes user input and returns the URL for the chosen drink
  drinkChoice = choice;
  queryURL = drinkApiURL + drinkChoice;
  return queryURL;
}//end getDrink

function getNation(data) {

}//end getNation

function getPairingDrink(data) { //uses math.random to randomly retrieve a pairing based on the selected alcohol and nation

  console.log(data.drinks.length);
  var pairing = Math.floor(Math.random() * data.drinks.length);
  console.log(pairing);
  console.log(data.drinks[pairing].strDrink);
}//end getPairing

function getPairingFood(data) { //uses math.random to randomly retrieve a pairing based on the selected alcohol and nation

  console.log(data.meals.length);
  var pairing = Math.floor(Math.random() * data.meals.length);
  console.log(pairing);
  console.log(data.meals[pairing].strMeal);
}//end getPairing



fetch(getNationChoice('American')) //food by nation api
.then(function (res) {
  return res.json();
})
.then(function (data) {
  console.log(data);
  console.log(data.meals.length);
    getPairingFood(data);
})
.catch(function(err) {
  return(err);
});

fetch(getDrink('Gin')) //cocktail by drink choice api
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    console.log(data);
    console.log(data.drinks.length);
    getPairingDrink(data);
  })
  .catch(function (err) {
    return (err);
  });


  

  searchForm.addEventListener('submit', getNationChoice);
  searchForm.addEventListener('submit', getDrink);

