// returns an array of students for a specific city with their new grade
export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  const studentsOncity = getListStudents.filter((student) => student.location === city);
  const UpdatedArray = studentsOncity.map((student) => {
    const entry = newGrades.find((studentData) => studentData.studentId === student.id);
    const studentCopy = { ...student };
    if (entry) {
      studentCopy.grade = entry.grade;
    } else {
      studentCopy.grade = 'N/A';
    }
    return studentCopy;
  });
  return UpdatedArray;
}
