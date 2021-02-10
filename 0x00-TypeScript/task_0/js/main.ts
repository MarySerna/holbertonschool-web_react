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
}
const secondSudent: Student = {
  firstName: 'Juan',
  lastName: 'Doe',
  age: 35,
  location: 'New York',
}

const studentsList: Array<Student> = [ firstSudent, secondSudent ];

const table = document.createElement('table') as HTMLTableElement;

studentsList.forEach((student: Student) => {
  const row = table.insertRow()
  const name = document.createElement('td');
  const location = document.createElement('td');
  name.textContent = student.firstName;
  location.textContent = student.location;
  row.appendChild(name);
  row.appendChild(location);
});

document.body.appendChild(table);