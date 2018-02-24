
export default (initial, funcs, iterations) => {
  const constructions = [[initial]]
  for(let i = 0; i < iterations ; i++) {
    const prev = constructions[constructions.length -1];
    const current = []
    for(const prevPoly of prev) {
      for(const fn of funcs) {
        current.push(prevPoly.map(fn))
      }
    }
    constructions.push(current)
  }
  return constructions;
}

