// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map(movie => movie.director);
  
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter((movie) => {
    if (movie.director == director) {
      return movie;
    }
  });
  console.log("EXERCISE 2 ->", result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let arrayScore = getMoviesFromDirector(array, director).map(movie => movie.score);
  let result = moviesAverage(arrayScore);
  console.log("EXERCISE 3 ->", result);
  return result;
}
function moviesAverage(array) {
  /*let suma = array.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  });
  let result = parseFloat((suma / array.length).toFixed(2));*/
  let sum =0;
  let counter = 0;
  for(let value of array){
    if (value != undefined && value != "" && value >= 0){
      counter ++;
      sum += value;
    }
  }
  let result = parseFloat((sum / counter).toFixed(2));
  return result;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  
  let titles = array.map(movie => movie.title).sort((a,b)=>{
    if(a > b) {
      return 1;
    } else if(a < b) {
      return -1;
    } else {
      return 0;
    }
  });
  
  let result = titles.splice(0,20);

  console.log("EXERCISE 4 ->", result);
  return result;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let result = array.map(movie => ({"title": movie.title, "year":movie.year}));
  result.sort((a,b)=>{
    if (a.title > b.title){
      return 1;
    } else if (a.title < b.title){
      return -1;
    } else {
      return 0;
    }
  });
  result.sort((a,b)=>{
    if (a.year > b.year){
      return 1;
    } else if (a.year < b.year){
      return -1;
    } else {
      return 0;
    }
  });
  
  console.log("EXERCISE 5 ->", result);
  return result;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
  let arrayScore = getMoviesByCategory(array, category).map(movie => movie.score);
  console.log(arrayScore);
  let result = moviesAverage(arrayScore);
  
  console.log("EXERCISE 6 ->", result);
  return result;
}

function getMoviesByCategory(array, category) {
  let result = array.filter((movie) => {
    for(let genre of movie.genre)
    if (genre == category) {
      return movie;
    }
  });
  return result;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
