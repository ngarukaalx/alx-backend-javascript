// class HolbertonCourse
export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw TypeError('name should be a string');
    }
    if (typeof length !== 'number') {
      throw TypeError('length must be a number');
    }
    if (!Array.isArray(students)) {
      throw TypeError('students must be array');
    }
    students.forEach((student) => {
      if (typeof student !== 'string') throw TypeError('student must be a string');
    });
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // getter for name
  get name() {
    return this._name;
  }

  // getter for length
  get length() {
    return this._length;
  }

  // getter for students
  get students() {
    return this._students;
  }

  // setter for name
  set name(newName) {
    if (typeof newName === 'string') {
      this._name = newName;
    } else {
      throw TypeError('Name must be a string');
    }
  }

  // setter for length
  set length(newLength) {
    if (typeof newLength === 'number') {
      this._length = newLength;
    } else {
      throw TypeError('Length must be a number');
    }
  }

  // setter for students
  // students is array of strings
  set students(newStudents) {
    if (Array.isArray(newStudents) && newStudents.every((student) => typeof student === 'string')) {
      this._students = newStudents;
    } else {
      throw TypeError('Studenst must be an a array of strings');
    }
  }
}
