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
var nationChoice = document.getElementById("nationInputElement");
var drinkChoice = document.getElementById("baseInputElement");
var queryURL;
var userNationChoice;
var userDrinkChoice;

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

  var pairing = Math.floor(Math.random() * data.drinks.length);
  console.log("Based on your drink selection of " + drinkChoice + ", this is your drink: " + data.drinks[pairing].strDrink);
}//end getPairing

function getPairingFood(data) { //uses math.random to randomly retrieve a pairing based on the selected alcohol and nation

  var pairing = Math.floor(Math.random() * data.meals.length);
  console.log("Based on your nation selection of " + nationChoice + ", this is your food: " + data.meals[pairing].strMeal);
}//end getPairing

var handleFormSubmit = function(event) { //pressing the submit button will run the functions
  console.log("begin handleFormSubmit");
  event.preventDefault();
  nationChoice = nationInputElement.value;
  console.log(nationChoice)
  drinkChoice = baseInputElement.value;
  console.log(drinkChoice);
  fetchData(getNationChoice(nationChoice), getDrink(drinkChoice));
  console.log("handleFormSubmit complete")

}

function fetchData(nation, base) {
  console.log("starting fetchData")
fetch(nation) //food by nation api
.then(function (res) {
  return res.json();
})
.then(function (data) {
  console.log(data);
  if(data.meals == null) {
    console.log("Error: incorrect meal input");
  }else {
    getPairingFood(data);
  }
})
.catch(function(err) {
  return(err);
});

fetch(base) //cocktail by drink choice api
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    console.log(data);
    getPairingDrink(data);
  })
  .catch(function (err) {
    return (err);
  });
  console.log("fetchData complete")
}
var submit = document.getElementById("submit");

submit.addEventListener("click", handleFormSubmit) 


  // searchForm.addEventListener('submit', getNationChoice);
  // searchForm.addEventListener('submit', getDrink);

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("save-pairing");

 

document.querySelector('.hide-savebtn').style.display = 'none'; 
document.querySelector('.green-btn').addEventListener('click', showBtn); 
 
function showBtn(e) { 
 document.querySelector('.hide-savebtn').style.display = 'block'; 
 e.preventDefault(); 
} 
 



// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

function show() {
  document.getElementById('save-pairing').style.display="none"
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}