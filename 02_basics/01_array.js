let number = [3,6,8,18,23,45,56]
console.log(number.length);
let newnumber = new Array(3,6,8,18,23,45,56)
newnumber.push(61)
newnumber.unshift(2)
newnumber.shift()
console.log(newnumber);
console.log(newnumber.slice(1,3));
console.log('A====>',newnumber);
console.log(newnumber.splice(1,3));
console.log('B====>',newnumber);
