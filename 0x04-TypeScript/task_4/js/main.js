"use strict";
exports.__esModule = true;
var Cpp_1 = require("./subjects/Cpp");
var Java_1 = require("./subjects/Java");
var React_1 = require("././subjects/React");
console.log('C++', Cpp_1.cpp.getRequirements(), Cpp_1.cpp.getAvailableTeacher(Cpp_1.cTeacher));
console.log('Java', Java_1.java.getRequirements(), Java_1.java.getAvailableTeacher(Cpp_1.cTeacher));
console.log('React', React_1.react.getRequirements(), React_1.react.getAvailableTeacher(Cpp_1.cTeacher));
