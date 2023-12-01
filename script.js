//complete this code
class Person {
	constructor(name, age) {
		this._name = name;
		this._age = age;
	}
	get name() {
		return this._name;
	}
	
	set age(newAge) {
		this._age = newAge;
	}
}

class Student extends Person {
	study() {
		console.log(`${this._name} is studying`);
	}
}

class Teacher extends Person {
	teach() {
		console.log(`${this._name} is teaching`);
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
