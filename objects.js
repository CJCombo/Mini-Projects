var user = [{firstName: "Michael", age: 37}, {firstName: "John", age: 30},{firstName: "David",age: 27}];

console.log(user[1].age);
console.log(user[0].firstName);
for (var i = 0; i < user.length; i++)
console.log(user[i].firstName, "-", user[i].age);