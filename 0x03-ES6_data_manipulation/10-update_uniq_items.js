// returns an updated map for all items with initial quantity at 1.
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  const newMap = new Map();
  map.forEach((value, key) => {
    const updatedValue = value === 1 ? 100 : value;
    console.log(value, updatedValue);
    newMap.set(key, updatedValue);
  });
  return newMap;
}
