// returns an array of objects who are located in a specific city.
export default function getListStudents(listStudent, city) {
  const arrayObject = listStudent.filter((listStudent) => listStudent.location === city);
  return arrayObject;
}
