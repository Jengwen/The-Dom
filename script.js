// var headingElement = document.querySelector("#main-heading");
// headingElement.innerHTML = "Hello, world!";

// var greetC2 = "Hello, Cohort 2!";
// document.querySelector("#helloC2").innerHTML = greetC2;

// var greeting = "Hello World";
// document.querySelector("#hello-container").innerHTML = greeting;

// var currentSpecial = {
//     name: "Fried Green Tomato BLT",
//     description: "So good you'll cry",
//     price: 9.99
//   }

//   var htmlString = `
//   <h3 class="dish-name">${currentSpecial.name}</h3>
//   <p class="dish-description">
//     ${currentSpecial.description}
//   </p>
//   <h5 class= "dish-price">${currentSpecial.price}</h5>
// `
// // Then we'll put the html string in the #daily-special div
// document.querySelector("#daily-special").innerHTML = htmlString;

// var menuItemsArray = ["Chicken tenders", "pizza", "spaghetti", "french fries", "pie"]

// for(var i = 0; i < menuItemsArray.length; i++){
//     // target the menu items container and add a bullet for each item in the array
//     document.querySelector("#menu-items-container").innerHTML += `<li>${menuItemsArray[i]}</li>`

//   }

//   var choresArray = ["sweep", "mop", "empty dishwasher"]

//   for(var i = 0; i < choresArray.length; i++){
//     document.querySelector("#chores-container").innerHTML += `<li>${choresArray[i]}</li>`

//    }

//  var movieObject = {
//     title: "Star Wars: A New Hope",
//      genre: "Science Fiction",
//      releaseDate: "May 25, 1977"
//    }

//    var htmlString = `
//       <h3 class="title">${movieObject.title}</h3>
//       <p class="genre">
//        ${movieObject.genre}
//       </p>
//       <h5 class= "release date">${movieObject.releaseDate}</h5>`

//    document.querySelector("#movie-poster").innerHTML = htmlString;

//    var downtownRestaurants = ["Backyard Pizza and Raw Bar", "The Bodega", "Surin of Thailand", "Bahnhof", "Jim's Steak and Spaghetti House", "The Peddler", "Jewel City Seafood Market", "Black Sheep Burritos & Brews", "La Famiglia", "Le Bistro", "Charlie Graingers", "The Cellar Door"];

//    for(var i = 0; i < downtownRestaurants.length; i++){
//        document.querySelector("#restaurants-list").innerHTML += `<li>${downtownRestaurants[i]}</li>`

//     }

// var sandwichToppings = ["pickles", "extra cheese", "lettuce", "tomatoes", "avocado", "bacon", "mayo", "mustard"]

// for(var i = 0; i < sandwichToppings.length; i++){
//         document.querySelector("#sandwich-container").innerHTML += `<li>${sandwichToppings[i]}</li>`

//          }

// var movieSchedule = [
//     {
//         title: "Ralph Breaks the Internet",
//         rating: "PG",
//         currentlyPlaying: true,
//         poster: "https://lumiere-a.akamaihd.net/v1/images/r_ralphbreakstheinternet_header_ddt-17403_08ef6d92.jpeg?region=0,0,1024,1274&optimize=true"
//     },
//     {
//         title: "The Grinch",
//         rating: "G",
//         currentlyPlaying: true,
//         poster: "https://images-na.ssl-images-amazon.com/images/I/71vgX4VFdiL._SY679_.jpg"
//     },
//     {
//         title: "A Star is Born",
//         rating: "R",
//         currentlyPlaying: false,
//         poster: "https://images-na.ssl-images-amazon.com/images/I/718zWbDKmvL._SY606_.jpg"
//     },
//     {
//         title: "Bohemian Rhapsody",
//         rating: "PG-13",
//         currentlyPlaying: true
//     },
//     {
//         title: "Fantastic Beasts: The Crimes of Grindlewald",
//         rating: "PG-13",
//         currentlyPlaying: true,
//         poster: "https://images-na.ssl-images-amazon.com/images/I/716fk%2BBZ-NL._SY606_.jpg"
//     },
//     {
//         title: "Robin Hood",
//         rating: "PG-13",
//         currentlyPlaying: false,
//         poster: "https://images-na.ssl-images-amazon.com/images/I/61K%2BTyGjsCL.jpg"
//     },
//     {
//         title: "Spider-Man: Into the Spider-Verse",
//         rating: "PG-13",
//         currentlyPlaying: true,
//     }
// ]



// for (var i = 0; i < movieSchedule.length; i++) {
//     if (movieSchedule[i].currentlyPlaying === true) {
//         var htmlString = `
//             <h1 class="movie-title">${movieSchedule[i].title}</h1>
//             <h3 class="rating">${movieSchedule[i].rating}`
//         document.querySelector("#movie-schedule").innerHTML += htmlString;
//     }
// }

var carrieObject = {
    firstName: "Carrie",
    lastName: "Truesdell",
    favFood: ["pizza", "mexican", "ice cream"],
    hobbies: ["cooking", "reading", "hiking"]
}

var name = `
<h3> ${carrieObject.firstName} ${carrieObject.lastName}</h3>`;
document.querySelector("#name").innerHTML = name;

for (var i = 0; i < carrieObject.favFood.length; i++) {
    var htmlString = `
       <li>${carrieObject.favFood[i]}</li>`
    document.querySelector("#favFood").innerHTML += htmlString;
}

for (var i = 0; i < carrieObject.hobbies.length; i++) {
    var htmlString = `
       <li>${carrieObject.hobbies[i]}</li>`
    document.querySelector("#hobbies").innerHTML += htmlString;
}