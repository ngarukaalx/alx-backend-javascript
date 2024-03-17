import {cpp, cTeacher} from './subjects/Cpp';
import {java} from './subjects/Java';
import {react} from '././subjects/React';

console.log('C++', cpp.getRequirements(), cpp.getAvailableTeacher(cTeacher));
console.log('Java', java.getRequirements(), java.getAvailableTeacher(cTeacher));
console.log('React', react.getRequirements(), react.getAvailableTeacher(cTeacher));
