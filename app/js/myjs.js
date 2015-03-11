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

console.log(_.dropRightWhile(users, 'active1', false), 'user');
console.log(_.first(users));
var fill = [1,2,3,4,5];
console.log(_.fill(fill,4,1,3));
console.log(fill.length);

var test = [{'a': 'b'},{'a':'c'}];
console.log(_.pluck(test,'a'));


var flatten = [1,[3,2,[4,5,5,6,[4]]]];

console.log(_.flatten(flatten));
console.log(_.flatten(flatten,true));
console.log(_.flattenDeep(flatten));

var init = _.flattenDeep(flatten);
console.log(_.initial(init));
console.log(init);
console.log(_.initial([1,2,3]));

console.log(_.intersection(init));

console.log(_.flattenDeep(_.intersection([1, 2], [4, 2], [2, 1])));

console.log(_.intersection([2,2,1],[,4,2],[4,8,2]));

console.log(_.lastIndexOf([1,1,2,2,2,2,2,2,3,4],2,true));
console.log(_.indexOf([1,1,2,2,2,2,2,2,3,4],2,true));

var array = [5, 10, 15, 20];
var evens = _.pullAt(array, 1, 3);

console.log(array);
// → [5, 15]

console.log(evens);
// → [10, 20]


