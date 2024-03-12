//  returns an array of ids from a list of object.
export default function getListStudentIds(arrayObj) {
  if (!Array.isArray(arrayObj)) {
    return [];
  }
  const idsArray = arrayObj.map((student) => student.id);
  return idsArray;
}
