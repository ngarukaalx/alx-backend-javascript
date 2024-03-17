// interface for director
// class Director implements  DirectorInterface
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return "Working from home";
    };
    Director.prototype.getCoffeeBreak = function () {
        return "Getting a coffee break";
    };
    Director.prototype.workDirectorTasks = function () {
        return "Getting to director tasks";
    };
    return Director;
}());
// class Teacher implements TeacherInterface
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return "Cannot work from home";
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return "Cannot have a break";
    };
    Teacher.prototype.workTeacherTasks = function () {
        return "Getting to work";
    };
    return Teacher;
}());
// function
function createEmployee(salary) {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    else {
        return new Director();
    }
}
// type predicate and if employee is a directoe
function isDirector(employee) {
    return employee.workDirectorTasks !== undefined;
}
// execute work tasks based on the typr of employee
function executeWork(employee) {
    if (isDirector(employee)) {
        console.log(employee.workDirectorTasks());
    }
    else {
        console.log(employee.workTeacherTasks());
    }
}
// fuction takes teachclass an arg
function teachClass(todayClass) {
    if (todayClass === 'Math') {
        return "Teaching Math";
    }
    else if (todayClass === 'History') {
        return "Teaching History";
    }
}
// Examples
teachClass('Math');
console.log(teachClass('History'));
