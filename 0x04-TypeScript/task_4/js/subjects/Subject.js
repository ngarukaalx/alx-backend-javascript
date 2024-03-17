"use strict";
exports.__esModule = true;
exports.Subjects = void 0;
var Subjects;
(function (Subjects) {
    var Subject = /** @class */ (function () {
        function Subject(teacher) {
            this.teacher = teacher;
        }
        Subject.prototype.setTeacher = function (teacher) {
            this.teacher = teacher;
        };
        return Subject;
    }());
    Subjects.Subject = Subject;
})(Subjects || (Subjects = {}));
exports.Subjects = Subjects;
