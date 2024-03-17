interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[key: string]: any;
}

interface Directors extends Teacher {
	numberOfReports: number;
}




interface printTeacherFunction {
	firstName: string;
	lastName: string;
}

function printTeacher({ firstName, lastName }: printTeacherFunction): string {
	return firstName[0] + '.' + ' ' + lastName;
}

const teacher: printTeacherFunction = {
	firstName: 'hiram',
	lastName: 'kabuagi',
}

console.log(printTeacher(teacher));


interface StudentConstructor {
	firstName: string;
	lastName: string;
}

interface Student {
	firstName: string;
	lastName: string;
        workOnHomework(): string;
	displayName(): string;
}

class StudentClass implements Student {
	firstName: string;
	lastName: string;

	constructor({firstName, lastName}: StudentConstructor) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	// Returns a string
	workOnHomework(): string {
		return "workOnHomework";
	}
	// Returns the firstName
	displayName(): string {
		return this.firstName;
	}
}
