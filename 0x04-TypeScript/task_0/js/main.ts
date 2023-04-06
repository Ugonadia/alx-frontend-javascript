#create interface

interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

#create first student
const student1: Student = {
	firstName: "Vanessa",
	lastName: "Isaac",
	age: 15,
	location: "Lagos"
};

#create second student
const student2: Student = {
        firstName: "Susan",
        lastName: "West",
        age: 17,
        location: "Abuja"
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
const tbody = document.createElement('tableBody');

table.style.background = "blue";
table.appendChild(tableBody);

studentsList.forEach((student: Student): void => {
  const row = document.createElement('tr');
  const nameCell = document.createElement('td');
  const locationCell = document.createElement('td');

  nameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  nameCell.style.border = "1px solid blue";
  locationCell.style.border = "1px solid blue";
  nameCell.style.padding = "5px";
  locationCell.style.padding = "5px";

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  tableBody.appendChild(row);
});

document.body.appendChild(table);
