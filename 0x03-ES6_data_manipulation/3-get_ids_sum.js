// returns the sum of all the student ids.
export default function getStudentIdsSum(listStudents) {
  const sumIds = listStudents.reduce(
    (accumulator, currentValue) => accumulator + currentValue.id, 0,
  );
  return sumIds;
}
