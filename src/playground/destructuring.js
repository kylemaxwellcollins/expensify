//
// Object destructuring
//

// const person = {
//   name: "Kyle",
//   age: 26,
//   location: {
//     city: "Toronto",
//     temp: 1
//   }
// };

// const { name: firstName = "Anonymous", age, location } = person;
// console.log(`${firstName} is ${age}`);

// const { temp: temperature, city } = person.location;
// if (city && temperature) {
//   console.log(`its ${temperature} in ${city}`);
// }

const book = {
  title: "Ego is the Enemy",
  author: "Ryan Holiday",
  publisher: {
    name: "Penguin"
  }
};

const { name: publisherName = "Self-Published" } = book.publisher;

if (publisherName) {
  console.log(publisherName);
}

//
// Array destructuring
//

// const address = ['914 Yonge Street', 'Toronto', 'Ontario', 'M4W3C8']
// const [, city, province = 'New York'] = address
// console.log(`You are in ${city} ${province}`)

const item = ["Coffee (hot)", "$2.00", "$2.50", "$2.75"];

const [menuItem, , medium] = item;

console.log(`A medium ${menuItem} costs ${medium}`);
