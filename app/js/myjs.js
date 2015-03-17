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
 { 'user': 'pebbles0', 'active': false },
  { 'user': 'barney',  'active': true },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': false }
];

console.log('find key : ');
console.log(_.findKey(users1,'active'));
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

var keyData = [
  { 'dir': 'left', 'code': 97 },
  { 'dir': 'right', 'code': 100 },
  {	'dir': 'left', 'code': 88}
];

console.log(_.indexBy(keyData,'dir'));

console.log(_.partition([2, 1, 3], function(n) {
  return n % 2;
}));

function timesThree(n) {
	return n * 3;
}

var a = _.map([1,2], timesThree);
console.log(a);

var usersPartition = [
  { 'user': 'barney',  'age': 36, 'active': false },
  { 'user': 'fred',    'age': 40, 'active': true },
  { 'user': 'pebbles', 'age': 1,  'active': false }
];

var mapper = function(array) {

	return _.pluck(array,'user');
}


var testPartition = _.partition(usersPartition,{'age':40,'active':true});

console.log(testPartition);

console.log(_.map(testPartition,mapper));

console.log(_.reduce([1,2], function(sum,n){

	return sum + n;
}));

var testReduce = _.reduce({ 'a': 1, 'b': 2 }, function(result, n, key) {
  result[key] = n * 3;
  return result;
}, {});

console.log(testReduce);

console.log(_.sortBy([1,2,3], function(n) {

	return Math.sin(n);
}));
var usersSortAll = [
  { 'user': 'barney', 'age': 36 },
  { 'user': 'fred',   'age': 40 },
  { 'user': 'barney', 'age': 26 },
  { 'user': 'fred',   'age': 30 }
];

console.log(_.map(usersSortAll,_.values));
var resultSortAll = _.map(_.sortByAll(usersSortAll, ['user', 'age']), _.values);

console.log(resultSortAll);

console.log('time : ');
_.defer(function(stamp) {
  console.log(_.now() - stamp);
}, _.now());

console.log(_.now());

var saves = ['profile', 'settings'];

var done = _.after(saves.length, function() {
  console.log('done saving!');
});

_.forEach(saves, function(type) {

//	asyncSave({'type' : type, 'complete' : done});

});

var testAry = _.map(['1','3','5'], _.ary(parseInt, 1));

console.log(testAry);

var testMap = _.map(['1','2','3'], function(n) {

	return parseInt(n);
});
console.log(testMap);

var usersClone = [
  { 'user': 'barney' },
  { 'user': 'fred' }
];
var shallow = _.clone(usersClone);

var deep = _.clone(usersClone, true);


var car = {type:"Fiat", model:500, color:"white"};
console.log(_.isBoolean(2<3));

var date = new Date();
console.log(date);


console.log(_.isElement(document.body));
console.log(document.body);

console.log(_.isEmpty(null));
console.log(_.isEmpty(true));
console.log(_.isEmpty('1'));

console.log(_.isEmpty({ 'a': null }));

console.log(_.isError(new Error()));
//var Error = 'a';
console.log(_.isError(Error));

console.log(_.isFinite({'a': 10}));

console.log(_.isFunction(_.pluck({'a': 'b'},'a')));

console.log(_.isNaN(NaN));
console.log(_.isNaN(undefined));

console.log(_.isUndefined(void 9));

var testArray = (function() {

	return _.toArray(arguments).slice(1,3);
}(1,2,3));
console.log(testArray);

function Shape() {
  this.x = 0;
  this.y = 0;
}

function Circle() {
  Shape.call(this);
}

Circle.prototype = _.create(Shape.prototype, {
  'constructor': Circle
});

var circle = new Circle;
circle instanceof Circle;
// → true

circle instanceof Shape;
// → true

console.log(circle);

function FooTestForIn() {
	this.a = 1;
	this.b = 2;

}

FooTestForIn.prototype.c = 3;
console.log(_.forIn(new FooTestForIn, function(value,key) { 
	console.log(key);
}));

var testHas = {'name': 'trinh', 'age': 18};
console.log('check if key exists :');
console.log(_.has(testHas,'age'));
function FunctionTest() {
	this.name = 'trinh';
	this.age = '19';
}

var objectMerge = {
  'fruits': ['apple'],
  'vegetables': ['beet']
};

var otherMerge = {
  'fruits': ['banana'],
  'vegetables': ['carrot']
};

var testMerge = _.merge(objectMerge, otherMerge, function(a, b) {
  if (_.isArray(a)) {
    return a.concat(b);
  }
});

console.log(testMerge);

var testMerge1 = {'data': [{ 'user': 'barney' }, { 'user': 'fred' }]};

var testMerge2 = {'data': [{ 'age': 36 }, { 'age': 40 },{'role': 'member'}]};

console.log(_.merge(testMerge1, testMerge2));

var usersMerge = {'data': [{ 'user': 'barney' }, { 'user': 'fred' }]};

var agesMerge = {'data': [{ 'age': 36 }, { 'age': 40 }]};

console.log(_.merge(usersMerge, agesMerge));

var objectOmit = {'user': 'trinh', 'age': false};

console.log(_.omit(objectOmit, 'age'));

var objectResult = {'user': 'fred', 'age': _.constant(40)};

console.log(_.result(objectResult,'trinh','busy'));


_.transform([2, 4,1, 7,4], function(result, n) {
	console.log(result);
	console.log(n);
  result.push(n *= n);
  return n % 2 == 0;
});


console.log(_.camelCase('--foob'));
console.log(_.escape('fred, , >,< barney, & pebbles'));

var testExprees = '[lodash](https://lodash.com/)';

console.log(_.escapeRegExp(testExprees));

console.log(_.kebabCase('foobar'));

console.log(_.parseInt('FF','16'));

console.log(_.startCase('trinh tran'));

console.log(_.endsWith('tranvan','n',7));

console.log(_.words('fred, barney, & pebbles',/[^, ]+/g));

var userKey =[
  { 'user': 'fred' },
  { 'user': 'barney' }
];

var getName = _.property('user');

console.log(getName);

console.log(_.map(userKey,getName));

console.log(_.pluck(_.sortBy(userKey,'user'),'user'));

var object = { 'a': 3, 'b': 1, 'c': 2 };

console.log(_.map(['a','c'],_.propertyOf(object)));

console.log(_.sortBy(['a','b','c'], _.propertyOf(object)));

console.log(_.range(0, -4,-1));

var timeTest = _.times(3, function() {
	return 10;
});

console.log(timeTest);