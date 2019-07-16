var _ = require('lodash');

// let sum = _.reduce([1, 1, 1, 1], function (acc, cur) {
//     return acc + cur;
// });
 
// console.log(sum); // 4

// let sum = _.reduce({0:4,1:1,2:1,3:1}, function (sum, cur) {
//     return sum + cur;
 
// });
// console.log(sum); // 7

// var myObjects = [
//     { id: '1', username: 'bill.jones', active: true, createdon: new Date('03/29/2014') },
//     { id: '2', username: 'woohoo', active: true, createdon: new Date('03/28/2014') },
//     { id: '3', username: 'someuser', active: true, createdon: new Date('03/30/2014') }
// ];

// myObjects = _.sortBy(myObjects, 'createdon');

// _.forEach(myObjects, function (result) {
//     console.log(result);
// });

// // _find
// let users = [
//     { firstName: "John", lastName: "Doe", age: 28, gender: "male" },
//     { firstName: "Jane", lastName: "Doe", age: 5, gender: "female" },
//     { firstName: "Jim", lastName: "Carrey", age: 54, gender: "male" },
//     { firstName: "Kate", lastName: "Winslet", age: 40, gender: "female" }
//   ];
  
//   let user = _.find(users, { lastName: "Doe", gender: "male" });
//   // user -> { firstName: "John", lastName: "Doe", age: 28, gender: "male" }
  
//   let underAgeUser = _.find(users, function(user) {
//       return user.age < 18;
//   });
//   console.log(underAgeUser)

// _set and _get
    // var bar = { foo: { key: "foo" } };
    // console.log(bar)
    // _.set(bar, "foo.items[0]", "An item");
    // console.log(bar)
    // var name = _.get(bar, "foo", "key");
    // console.log(name)

    // var object = { 'a': [{ 'b': { 'c': 3 } }] };
 
    // let result = _.get(object, 'a[0].b.c');
    // console.log(result)
    // let result = _.get(object, ['a', '0', 'b', 'c']);
    // console.log(result)

// _keyBy
// var posts = [
//     { id: "1abc", title: "First blog post", content: "..." },
//     { id: "2abc", title: "Second blog post", content: "..." },
//     { id: "34abc", title: "The blog post we want", content: "..." }
// ];

// posts = _.keyBy(posts, "id");

// var result = posts["34abc"]

// console.log(result)

// // _sortedUniq
// var sortedArray = [1, 1, 2, 3, 3, 3, 5, 8, 8];
// var result = _.sortedUniq(sortedArray);
// console.log(result)
  


var data =[
    {
        "name": "Max",
        "age": 10,
        "rating":{
            "average":6
        }
    },
    {
        "name": "Leroy",
        "age": 7,
        "rating":{
            "average": 4
        }
    },
    {
        "name": "Leroy",
        "age": 7,
        "rating":{
            "average": 4
        }
    }
]

data.sort((a, b) => {
    if(a.age === b.age) {
      // If two elements have same number, then the one who has larger rating.average wins
      return b.rating.average - a.rating.average;
    } else {
      // If two elements have different number, then the one who has larger number wins
      return b.age - a.age;
    }
  });
  
  
  data = data.filter((element, index) => {
    return index === 0 || element.age !== data[index-1].age;
  });

  console.log(data)