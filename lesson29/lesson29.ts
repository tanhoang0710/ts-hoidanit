const summ = (x: number, y: number, z?: number) => {
  if(z) return x + y + z
  return x + y
}

console.log(summ(1, 2));