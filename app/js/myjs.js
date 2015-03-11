var testArray = ['a','b','c','a','b','c','a','b','c'];

var result = _.chunk(testArray, 2);

console.log(result);

console.log(_.compact([0, 1, false, 2, '', 3,null]));
// → [1, 2, 3]

console.log(_.drop(['3',1,2,3],2));

var users = [
  { 'user': 'barney',  'active': true },
  { 'user': 'pebbles', 'active1': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': false },
  { 'user': 'pebbles1', 'active1': false}
];

console.log(_.pluck(_.dropRightWhile(users, { 'user': 'pebbles', 'active': false }), 'user'));

console.log(_.pluck(_.dropRightWhile(users, 'active', false), 'user'));

console.log(_.pluck(_.dropRightWhile(users, 'active1', false), 'user'));

var fill = [1,2,3,4,5];
console.log(_.fill(fill,4,1,fill.length));