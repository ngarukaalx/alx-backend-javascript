/// <reference path="./Teacher.ts"/>
/// <reference path="./Subject.ts"/>
var Subjects;
(function (Subjects) {
    var React = /** @class */ (function () {
        function React() {
        }
        React.prototype.getRequirements = function () {
            return "Here is the list of requirements for React";
        };
        React.prototype.getAvailableTeacher = function (teacher) {
            if (teacher.experienceTeachingReact === undefined || teacher.experienceTeachingReact <= 0) {
                return "No available teacher";
            }
            else {
                return "Available Teacher:" + ' ' + teacher.firstName;
            }
        };
        return React;
    }());
    Subjects.React = React;
    Subjects.react = new React();
})(Subjects || (Subjects = {}));
