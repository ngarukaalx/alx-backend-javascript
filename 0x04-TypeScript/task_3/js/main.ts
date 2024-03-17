/// <reference path="crud.d.ts"/>
import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

// Create an object called row with the type RowElement
const row: RowElement = {
	firstName: 'Guillaume',
	lastName: 'Salva'
};

// Create a const variable named newRowID with the type
// RowID and assign the value the insertRow command
const newRowID: RowID = CRUD.insertRow(row);
const updateRow: RowElement = { firstName: "Guillaume", lastName: "Salva", age: 23 };
CRUD.updateRow(newRowID, updateRow);

CRUD.deleteRow(125);

console.log(newRowID);
console.log(updateRow);
