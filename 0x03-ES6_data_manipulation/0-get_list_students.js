// returns an array of objects.
export default function getListStudents() {
  const array = [];
  const object1 = { id: 1, firstName: 'Guillaume', location: 'San Francisco' };
  const object2 = { id: 2, firstName: 'James', location: 'Columbia' };
  const object3 = { id: 5, firstName: 'Serena', location: 'San Francisco' };

  array.push(object1);
  array.push(object2);
  array.push(object3);
  return array;
}
