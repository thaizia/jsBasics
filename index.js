// array of names 
// Get active users
// sort by descending

const users = [
  {
    id: 1,
    name: "Bob",
    isActive: true,
    age: 29,
  },
   {
    id: 2,
    name: "Pitter",
    isActive: false,
    age: 21,
  },
   {
    id: 1,
    name: "Jane",
    isActive: true,
     age: 35,
  },
]

const namesArray = users
  .sort((user1, user2) => user1.age < user2.age ? 1: -1)
  .filter((user) => user.isActive)
  .map((user) => user.name);

console.log(namesArray);
