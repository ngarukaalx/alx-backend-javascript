// returns a map of groceries with the following items (name, quantity):
export default function groceriesList() {
  const gloceries = new Map();

  const items = [
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ];
  for (const [name, quantity] of items) {
    gloceries.set(name, quantity);
  }
  return gloceries;
}
