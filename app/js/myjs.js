var testArray = ['a','b','c','a','b','c','a','b','c'];

var result = _.chunk(testArray, 2);

console.log(result);

console.log(_.compact([0, 1, false, 2, '', 3,null]));
// → [1, 2, 3]

console.log(_.drop(['3',1,2,3],2));

var users = [
  { 'user': 'barney',  'active': true },
  { 'user': 'pebbles', 'active1': false },
  { 'user': 'fred',    'active': true },
  { 'user': 'pebbles', 'active': false },
  { 'user': 'pebbles1', 'active1': false}
];

console.log(_.pluck(_.dropRightWhile(users, { 'user': 'pebbles', 'active': false }), 'user'));

console.log(_.pluck(_.dropRightWhile(users, 'active', false), 'user'));

console.log(_.dropRightWhile(users, 'active1', false), 'user');
console.log("pro: ");console.log(_.pluck(_.dropRightWhile(users,'active'),'user'));
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


var users1 = [
 { 'user': 'pebbles0', 'active': true },
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': false }
];

console.log(_.findIndex(users1,'active'));
console.log('test:');
console.log(_.pluck(_.dropWhile(users1,'active'),'user'));
console.log(users1);
var testRemove = [1,2,3,4,5];

var testRemoveRemain = _.remove(testRemove,function(n){
	return n % 2;
});

console.log(testRemoveRemain);
console.log(testRemove);
var testRemoveUser1 = _.remove(users1,{'user': 'barney',  'active': false});
console.log(testRemoveUser1);
console.log(_.pluck(users1,'user'));

console.log("sorted index");
console.log(_.sortedIndex([1,3,1],2));

var users2 = [
  { 'user': 'barney',  'active': true },
  { 'user': 'fred',    'active': true},
  { 'user': 'pebbles', 'active': true }
];

console.log("Test take while : ");
var testTake = _.takeWhile(users2,'active');
console.log(_.pluck(testTake,'user'));

console.log('test unig : ');

console.log(_.uniq([1, 2.5, 3.5,3,5, 1.5, 2,3,4,4], function(n) {
  return this.floor(n);
}, Math));

console.log(Math.floor(2.5));

var zipped = _.zip(['fred', 'barney','trinh'], [30, 40,5], [true, false,'sdg'],[true,true, true]);
console.log(zipped);
zipped = _.zip(zipped);
// → [['fred', 30, true], ['barney', 40, false]]
console.log(zipped);
//sconsole.log(_.unzip(zipped));
// → [['fred', 'barney'], [30, 40], [true, false]]

console.log(_.uniq([1, 3.4, 2.5,2.2, 1.5, 2], function(n) {
  return this.floor(n);
}, Math));

console.log(_.zipObject([['trinh','4'],['tai','4']]));

console.log(_.zipObject(['fred', 'barney'], [30, 40]));


var wrapped = _([1,2,3]);

wrapped.reduce(function(sum,n) {
	return sum + n;
});
console.log(wrapped);

var square = wrapped.map(function(n) {
	return n*n;
});

console.log(square);
console.log(_.isArray(square));
console.log(_.isArray(square.value()));
var chainusers = [
  { 'user': 'barney',  'age': 36 },
  { 'user': 'fred',    'age': 40 },
  { 'user': 'pebbles', 'age': 1 }
];


var youngest = _(chainusers).chain().sortBy('age').values().first();
console.log(youngest);
console.log('youngest '+youngest.value().user);
var chainusers1 = [
  { 'user': 'barney',  'age': 36 },
  { 'user': 'fred',    'age': 40 },
  { 'user': 'pebbles', 'age': 1 }
];

var youngest1 = youngest.plant(chainusers1);
console.log(youngest1);
console.log('youngest1 '+youngest1.first().value().user);

var arrayChain = [['trinh',4],['tai',5]];
console.log(_.chain(arrayChain).pop().push(['user',4]).value());

var string = 'tran van    trinh';

var result = _.chain(string).split(' ').without('tran').value();
console.log(result);

var string1 = _.chain(string).replace('trinh','tran').add('a').value();
var string2 = _.chain(string).trim().add('a').value();
console.log(string1);
console.log(string2);
var test3 = [3,4,5,6];
console.log(test3);

console.log(_.chain(test3).drop(1).value());

var a = _([1,2,3]).tap(function(array) {

	array.pop();
}).reverse().value();

console.log(a);

console.log(_.chain([1,2,3]).push(4).reverse().value());

var prototype = _(chainusers).chain().first().pick('user').value();
console.log(prototype.user);

// chain commit 

var arrayPlant = [1,2];
var wrrapperPlant = _(arrayPlant).map(function(value) {

	return Math.pow(value,2);
});

var otherPlant = [3,4];

var otherPlantResult = wrrapperPlant.plant(otherPlant);
console.log(otherPlantResult.value());
