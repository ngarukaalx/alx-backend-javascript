// interface for director

interface DirectorInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workDirectorTasks(): string;
}

// interface for teacher

interface TeacherInterface {
	 workFromHome(): string;
	 getCoffeeBreak(): string;
	 workTeacherTasks(): string;
}

// class Director implements  DirectorInterface
class Director implements DirectorInterface {
	workFromHome(): string {
		return "Working from home";
	}
	getCoffeeBreak(): string {
		return "Getting a coffee break";
	}
	workDirectorTasks(): string {
		return "Getting to director tasks";
	}
}

// class Teacher implements TeacherInterface
class Teacher implements TeacherInterface {
	workFromHome(): string {
		return "Cannot work from home";
	}
	getCoffeeBreak(): string {
		return "Cannot have a break";
	}
	workTeacherTasks(): string {
		return "Getting to work";
	}
}

// function
function createEmployee(salary: string | number): Director | Teacher {
	if (typeof salary === 'number'  && salary < 500) {
		return new Teacher();
	} else {
		return new Director();
	}
}


// type predicate and if employee is a directoe
function isDirector(employee: Director | Teacher): employee is Director {
	return (employee as Director).workDirectorTasks !== undefined;
}

// execute work tasks based on the typr of employee
function executeWork(employee: Director | Teacher): void {
	if (isDirector(employee)) {
		console.log(employee.workDirectorTasks());
	} else {
		console.log(employee.workTeacherTasks());
	}
}
type Subjects = 'Math' | 'History';
// fuction takes teachclass an arg
function teachClass(todayClass: Subjects): string {
	if (todayClass === 'Math') {
		return "Teaching Math";
	} else if (todayClass === 'History') {
		return "Teaching History";
	}
}
// Examples
teachClass('Math');
console.log(teachClass('History'));
