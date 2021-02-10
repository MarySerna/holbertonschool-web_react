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

studentsList.forEach((student: Student) => {
  const row: HTMLTableRowElement = table.insertRow()
  const name: HTMLTableCellElement = document.createElement('td');
  const location: HTMLTableCellElement = document.createElement('td');
  
  name.textContent = student.firstName;
  location.textContent = student.location;

  row.appendChild(name);
  row.appendChild(location);
});

body.append(table);