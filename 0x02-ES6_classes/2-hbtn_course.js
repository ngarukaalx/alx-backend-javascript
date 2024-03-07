// class HolbertonCourse
export default class HolbertonCourse {
  constructor(name, length, students) {
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
  set name(name) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new Error('Name must be a string');
    }
  }

  // setter for length
  set length(length) {
    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw new Error('Length must be a number');
    }
  }

  // setter for students
  // students is array of strings
  set students(students) {
    if (Array.isArray(students) && students.every((students) => typeof student === 'string')) {
      this._students = students;
    } else {
      throw new Error('Studenst must be an a array of strings');
    }
  }
}
