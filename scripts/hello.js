const obj1 = { 
  apples: Array(5).fill('apple'),
  pears: Array(4).fill('pear')
};
console.log('Init obj1 ');
console.log(obj1);
obj1.apples[2] = 'banana';
obj2 =  obj1.apples.concat(Array(3).fill('monkey'))
console.log('Changed obj1 ');
console.log(obj1);
console.log('Init obj2 ');
console.log(obj2);
process.exit(0);
