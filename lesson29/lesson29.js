const sum123 = (x, y, z) => {
  console.log('check z: ', z);
  if(z) return x + y+ z;
  return x + y
};

console.log(sum123(1, 2, 3));