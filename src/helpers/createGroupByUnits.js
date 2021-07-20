export const createGroupByUnits = (data, units) => {
  let separate = units.map( unit => {
    return Object.entries( data ).map( ([indicator, value]) => (
      (data[indicator]?.unidad_medida === unit) 
      ? { [indicator]: value }
      : false
    )).filter( elem => elem !== false)
  })

  let groups = {
    percent: separate[0],
    dollar: separate[1],
    pesos: separate[2],
  };

  return groups;
}
