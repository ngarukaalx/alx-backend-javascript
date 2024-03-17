/// <reference path="./Teacher"/>
var Subjects;
(function (Subjects) {
    var Java = /** @class */ (function () {
        function Java() {
        }
        Java.prototype.getRequirements = function () {
            return "Here is the list of requirements for Java";
        };
        Java.prototype.getAvailableTeacher = function (teacher) {
            if (teacher.experienceTeachingJava > 0) {
                return "" + ' ' + teacher.firstNmae;
            }
            return "No available teacher";
        };
        return Java;
    }());
    Subjects.Java = Java;
    Subjects.java = new Java();
})(Subjects || (Subjects = {}));
