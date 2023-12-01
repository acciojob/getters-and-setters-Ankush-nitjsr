//complete this code
class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	get name() {
		return this.name;
	}
	set age(age) {
		this.age = age;
	}
}

class Student extends Person {
	study() {
		console.log(`${this.name} is studying`);
	}
}

class Teacher extends Person {
	teach() {
		console.log(`${this.name} is teaching`);
	}
}

const student = new Student("MysteryNisha", 28);
const teacher = new Teacher("Shivani", 32);

student.study();
teacher.teach();

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
