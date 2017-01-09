var person = {
  firstName: "Bob",
  lastName: "Ject",
  age: 33,
  address: {
    street: "123 Memory Ln",
    apt: "0x7fff9575c05f",
    zip: "01101",
    city: "Browser Town",
    state: "Mozilla"
  },
  sayHello: function() {
    console.log("Hi, my name is " + this.firstName + ". I live in " + this.address.city + ", on " + this.address.street + ".")
  }
};

 console.log(person.sayHello());


var person = {
  firstName: "Bob",
  lastName: "Ject",
  age: 33,
  address: {
    street: "123 Memory Ln",
    apt: "0x7fff9575c05f",
    zip: "01101",
    city: "Browser Town",
    state: "Mozilla"
  },
  sayHello: function() {
    // return "Hi, my name is " + this.firstName + ". I live in " + this.address.city + ", on " + this.address.street + ".";
    return `Hi my name is ${this.firstName}. I live in ${this.address.city}, on ${this.address.street}.`;
  }
};

// console.log(person.sayHello());

var person1 = {
  firstName: "Bob",
  lastName: "Ject",
  age: 33,
  address: {
    street: "123 Memory Ln",
    apt: "0x7fff9575c05f",
    zip: "01101",
    city: "Browser Town",
    state: "Mozilla"
  },
  sayHello: function() {
    return "Hi, my name is " + this.firstName + ". I live in " + this.address.city + ", on " + this.address.street + ".";
    // return `Hi my name is ${this.firstName}. I live in ${this.address.city}, on ${this.address.street}.`;
  }
};

var person2 = {
  firstName: "Marc",
  lastName: "Perez",
  age: 11,
  address: {
    street: "123 Britselei",
    apt: "0x7fff957444",
    zip: "2000",
    city: "Antwerpen",
    state: "Antwerpen"
  },
  sayHello: function() {
    return "Hi, my name is " + this.firstName + ". I live in " + this.address.city + ", on " + this.address.street + ".";
    // return `Hi my name is ${this.firstName}. I live in ${this.address.city}, on ${this.address.street}.`;
  }
};

var people = [person1, person2];

// forEach example
people.forEach(function(item) {
  console.log(item.sayHello())
})

// map example
var peopleNames = people.map(function(item) {
  return {
    name: item.firstName
  }
})

console.log(peopleNames)

// extra example
// var apiResponse = [
//     {
//         "id": 394,
//         "caption": "1. Bundesliga 2015/16",
//         "league": "BL1",
//         "year": "2015",
//         "numberOfTeams": 18,
//         "numberOfGames": 306,
//         "lastUpdated": "2015-10-25T19:06:29Z"
//     },
//     {
//         "id": 395,
//         "caption": "2. Bundesliga 2015/16",
//         "league": "BL2",
//         "year": "2015",
//         "numberOfTeams": 18,
//         "numberOfGames": 306,
//         "lastUpdated": "2015-10-25T19:06:59Z"
//     },
//     {
//         "id": 396,
//         "caption": "Ligue 1 2015/16",
//         "league": "FL1",
//         "year": "2015",
//         "numberOfTeams": 20,
//         "numberOfGames": 380,
//         "lastUpdated": "2015-10-26T07:40:20Z"
//     },
//     {
//         "id": 397,
//         "caption": "Ligue 2 2015/16",
//         "league": "FL2",
//         "year": "2015",
//         "numberOfTeams": 20,
//         "numberOfGames": 380,
//         "lastUpdated": "2015-10-27T08:15:17Z"
//     },
//     {
//         "id": 398,
//         "caption": "Premier League 2015/16",
//         "league": "PL",
//         "year": "2015",
//         "numberOfTeams": 20,
//         "numberOfGames": 380,
//         "lastUpdated": "2015-10-25T19:08:18Z"
//     },
//     {
//         "id": 399,
//         "caption": "Primera Division 2015/16",
//         "league": "PD",
//         "year": "2015",
//         "numberOfTeams": 20,
//         "numberOfGames": 380,
//         "lastUpdated": "2015-10-27T08:14:21Z"
//     },
//     {
//         "id": 400,
//         "caption": "Segunda Division 2015/16",
//         "league": "SD",
//         "year": "2015",
//         "numberOfTeams": 22,
//         "numberOfGames": 462,
//         "lastUpdated": "2015-10-26T07:40:01Z"
//     },
//     {
//         "id": 401,
//         "caption": "Serie A 2015/16",
//         "league": "SA",
//         "year": "2015",
//         "numberOfTeams": 20,
//         "numberOfGames": 380,
//         "lastUpdated": "2015-10-30T07:08:40Z"
//     },
//     {
//         "id": 402,
//         "caption": "Primeira Liga 2015/16",
//         "league": "PPL",
//         "year": "2015",
//         "numberOfTeams": 18,
//         "numberOfGames": 306,
//         "lastUpdated": "2015-10-27T08:14:41Z"
//     },
//     {
//         "id": 403,
//         "caption": "3. Bundesliga 2015/16",
//         "league": "BL3",
//         "year": "2015",
//         "numberOfTeams": 20,
//         "numberOfGames": 380,
//         "lastUpdated": "2015-10-25T19:07:17Z"
//     },
//     {
//         "id": 404,
//         "caption": "Eredivisie 2015/16",
//         "league": "DED",
//         "year": "2015",
//         "numberOfTeams": 18,
//         "numberOfGames": 306,
//         "lastUpdated": "2015-10-25T19:12:52Z"
//     },
//     {
//         "id": 405,
//         "caption": "Champions League 2015/16",
//         "league": "CL",
//         "year": "2015",
//         "numberOfTeams": 32,
//         "numberOfGames": 96,
//         "lastUpdated": "2015-10-21T21:01:58Z"
//     }
// ]

// var captions = [];
// apiResponse.forEach(function(value, key) {
//   console.log(key)
//   console.log(value)
//   // captions.push(r.caption)
// })


// console.log(captions);