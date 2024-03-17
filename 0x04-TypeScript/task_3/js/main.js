"use strict";
exports.__esModule = true;
var CRUD = require("./crud");
// Create an object called row with the type RowElement
var row = {
    firstName: 'Guillaume',
    lastName: 'Salva'
};
// Create a const variable named newRowID with the type
// RowID and assign the value the insertRow command
var newRowID = CRUD.insertRow(row);
var updateRow = { firstName: "Guillaume", lastName: "Salva", age: 23 };
CRUD.updateRow(newRowID, updateRow);
CRUD.deleteRow(125);
console.log(newRowID);
console.log(updateRow);
