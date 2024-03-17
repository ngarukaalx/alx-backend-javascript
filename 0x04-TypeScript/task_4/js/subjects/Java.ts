/// <reference path="./Teacher"/>
namespace Subjects {
	interface Teacher {
		experienceTeachingJava?: number;
	}
	export class Java {
		getRequirements(): string {
			return "Here is the list of requirements for Java";
		}
		getAvailableTeacher(teacher: Teacher): string {
			if (teacher.experienceTeachingJava > 0) {
				return "" + ' ' + teacher.firstNmae;
			}
			return "No available teacher";
		}
	}
	export const java: Java = new Java();
}
