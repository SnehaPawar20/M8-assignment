//STEP 1
// let favMovies = ['Movie 1', 'Movie 2', 'Movie 3', 'Movie 4', 'Movie 5'];
// console.log(favMovies[1]);

//STEP 2
// let movies = new Array(5);
// movies[0] = 'Movie 1';
// movies[1] = 'Movie 2';
// movies[2] = 'Movie 3';
// movies[3] = 'Movie 4';
// movies[4] = 'Movie 5';

// console.log(movies[0]);

//STEP 3
// let movies = new Array(5);
// movies[0] = 'Movie 1';
// movies[1] = 'Movie 2';
// movies[2] = 'Movie 3';
// movies[3] = 'Movie 4';
// movies[4] = 'Movie 5';

// movies.splice(2, 0, 'New Movie');
// console.log(movies.length);

//STEP 4
// let movies = ['Movie 1', 'Movie 2', 'Movie 3', 'Movie 4', 'Movie 5'];
// delete movies[0];
// console.log(movies);

//STEP 5
// let movies = ['Movie 1', 'Movie 2', 'Movie 3', 'Movie 4', 'Movie 5', 'Movie 6', 'Movie 7'];

// for (let movie in movies) {
//     console.log(movies[movie]);
// }

//STEP 6
// let movies = ['Movie 1', 'Movie 2', 'Movie 3', 'Movie 4', 'Movie 5', 'Movie 6', 'Movie 7'];

// for (let movie of movies) {
//     console.log(movie);
// }

//STEP 7
// let movies = ['Abc', 'pqr', 'tuv', 'Movie 4', 'movie', 'qrs', 'lmn'];
// movies.sort();
// for (let movie of movies) {
//         console.log(movie);
//      }

//STEP 8
// let movies = ['Movie 1', 'Movie 2', 'Movie 3', 'Movie 4', 'Movie 5', 'Movie 6', 'Movie 7'];
// let leastFavMovies = movies.slice(0, 3);

// let moviesToString = movies.join('\n');
// console.log(`Movies I like: \n\n${moviesToString}`);

// let leastFavMoviesToString = leastFavMovies.join('\n');
// console.log(`Movies I regret watching: \n\n${leastFavMoviesToString}`);

//STEP 9

// let favMovies = ['Movie 1','Movie 2','Movie 3','Movie 6'];
// let leastFavMovies = ['Movie 4','Movie 5','Movie 7'];

// let movies = favMovies.concat(leastFavMovies);
// console.log(`Concatinated Array:\n\n${movies}`);
// let sortedArray = movies.sort();
// console.log(`Sorted Array:\n\n${sortedArray}`);
// let reversedArray = sortedArray.reverse();
// console.log(`Reverse sorted Array:\n\n${reversedArray}`);

//STEP 10
// let movies = ['Movie 1', 'Movie 2', 'Movie 3', 'Movie 4', 'Movie 5', 'Movie 6', 'Movie 7'];
// let movie = movies.pop();
// console.log(movie);

//STEP 11
// let movies = ['Movie 1', 'Movie 2', 'Movie 3', 'Movie 4', 'Movie 5', 'Movie 6', 'Movie 7'];
// let movie = movies.shift();
//  console.log(movie);

//STEP 12
// let movies = ['Movie 1', ' Movie 2', ' Movie 3', ' Movie 4', ' Movie 5', ' Movie 6', ' Movie 7'];

// console.log(`Indices of movies I do not like: ${movies.indexOf(' Movie 4')}, ${movies.indexOf(' Movie 5')}, ${movies.indexOf(' Movie 6')}`);

// movies[3] = ' New Movie 4';
// movies[4] = ' New Movie 5';
// movies[5] = ' New Movie 6';

// console.log(`Adding new movies at those indices:\n\n${movies}`);

//STEP 13
// let movies = [
//     ['movie 1', 1],
//     ['movie 2', 2],
//     ['movie 3', 3],
//     ['movie 4', 4],
//     ['movie 5', 5],
// ];
//  movies.forEach((movie) => {
//     movies.filter((item) => {
//              return typeof item === 'string';
//          })
//     console.log(`${movie[0]}`);
//  })

//STEP 14
// let employees = new Array(5);
// employees[0] = 'ZAK';
// employees[1] = 'JESSICA';
// employees[2] = 'MARK';
// employees[3] = 'FRED';
// employees[4] = 'SALLY';

// function showEmployee(employees) {
//     console.log(`Employees:\n\n`);
//     employees.forEach((employee) => {
//         console.log(`${employee}`)
//         })
// }
// showEmployee(employees);

//STEP 15
// function filterValues(arr) {
//     arr = arr.filter(isEligible);
//     return arr;
//   }
// function isEligible(value) {
//     if (value !== false || value !== null || value !== 0 || value !== "") {
//       return value;
//     }
//   }
// console.log(filterValues([58, '', 'abcd', true, null, false, 0]));

//STEP 16
// function random_item(items) {

//   return items[Math.floor(Math.random() * items.length)];
// }
// var items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(random_item(items));

//STEP 17
// var arr = [23, 45, 12, 6, 56, 14, 102];
// var largest = arr[0];
// function largestNumber(arr){
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] > largest ) {
//           largest = arr[i];
//         }
//       }
//       console.log(largest);
// }
// largestNumber(arr);