var queryURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=Italian'

fetch(queryURL)
.then(function (res) {
  return res.json();
})
.then(function (data) {
  console.log(data);
})
.catch(function (err) {
  console.log(err);
});