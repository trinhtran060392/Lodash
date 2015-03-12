var array = [1, 2];
var wrapper = _(array).push(3);

console.log(array);
// → [1, 2]

wrapper = wrapper.commit();
console.log(array);
// → [1, 2, 3]

wrapper.last();
// → 3

console.log(array);
// → [1, 2, 3]

