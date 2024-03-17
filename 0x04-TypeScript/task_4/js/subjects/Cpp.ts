/// <reference path="./Subject.ts"/>
/// <reference path="./Teacher.ts"/>
namespace Subjects {
	interface Teacher {
		experienceTeachingC?: number;
	}
	export class Cpp extends Subject {
		getRequirements(): string {
			return "Here is the list of requirements for Cpp";
		}
		getAvailableTeacher(teacher: Teacher): string {
			if (teacher.experienceTeachingC === undefined || teacher.experienceTeachingC <= 0) {
				return "No available teacher";
			} else {
				return "Available Teacher:" + ' ' + teacher.firstName;
			}
		}
	}
	export const cpp: Cpp  = new Cpp();
	export const cTeacher: Teacher = {
		firstName: 'Hiram',
		lastName: 'kabuagi',
		experienceTeachingC: 10
	};
}
