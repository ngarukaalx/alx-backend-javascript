// interface named Student accepts
// firstName(string), lastName(string), age(number),
// and location(string)

interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

// firststudent
const student1: Student = {
	firstName: 'hiram',
	lastName: 'kabwagi',
	age: 26,
	location: 'Kitale'
};

// secondstudent
const student2: Student = {
	firstName: 'stephen',
	lastName: 'kerori',
	age: 20,
	location: 'kitale'
};


// create an array named student list
const studentsList: Student[] = [student1, student2];

// Render table
const table = document.createElement("table");

// fill the table with data
studentsList.forEach(student => {
	const row = table.insertRow();
	const cell1 = row.insertCell(0);
	const cell2 = row.insertCell(1);

	cell1.textContent = student.firstName;
	cell2.textContent = student.location;
});

document.body.appendChild(table);
