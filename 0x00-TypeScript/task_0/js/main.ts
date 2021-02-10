interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const firstSudent: Student = {
  firstName: 'Shakira',
  lastName: 'Doe',
  age: 18,
  location: 'Miami',
};

const secondSudent: Student = {
  firstName: 'Juan',
  lastName: 'Doe',
  age: 35,
  location: 'New York',
};

const studentsList: Array<Student> = [ firstSudent, secondSudent ];

const body: HTMLBodyElement = document.getElementsByTagName('body')[0];

const table: HTMLTableElement = document.createElement('table');
const thead: HTMLTableSectionElement = document.createElement('thead');
const tbody: HTMLTableSectionElement = document.createElement('tbody');

studentsList.forEach((student) => {
  const row: HTMLTableRowElement = tbody.insertRow(0);
  const cell1: HTMLTableCellElement = row.insertCell(0);
  const cell2: HTMLTableCellElement = row.insertCell(1);

  cell1.innerHTML = student.firstName;
  cell2.innerHTML = student.location;
});

table.append(tbody);
body.append(table);