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
    
var queryURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian';

fetch(queryURL)
.then(function (res) {
  return res.json();
})
.then(function (data) {
  console.log(data);
})
.catch(function(err) {
  return(err);
});

queryURL = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka';

fetch(queryURL)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    return (err);
  });