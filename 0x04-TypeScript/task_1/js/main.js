function printTeacher(_a) {
    var firstName = _a.firstName, lastName = _a.lastName;
    return firstName[0] + '.' + ' ' + lastName;
}
var teacher = {
    firstName: 'hiram',
    lastName: 'kabuagi'
};
console.log(printTeacher(teacher));
