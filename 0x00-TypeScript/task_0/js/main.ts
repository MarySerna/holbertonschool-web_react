interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Shakira",
  lastName: "Isabel",
  age: 33,
  location: "Barcelona",
}

const student2: Student = {
  firstName: "Juan",
  lastName: "Esteban",
  age: 44,
  location: "Miami",
}

const studentsList: Student[] = [student1, student2];

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