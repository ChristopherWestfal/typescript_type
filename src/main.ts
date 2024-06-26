type Student = {
    firstname:string,
    lastname:string,
    age:number,
    grade:string[],
    printStudent: () => void
};

const s1:Student = {
    firstname: "Max",
    lastname: "Mustermann",
    age: 15,
    grade: ["A","3","F","1","2","*","3","3"],
    printStudent: function(){
        console.log(`${this.firstname} ${this.lastname} (${this.age})\n========================\nGrades: ${this.grade}`);
    }
};

s1.printStudent();

const studentlist:Student[] = [
    {
        firstname: "Anton",
        lastname: "Maier",
        age: 16,
        grade: ["1", "4", "3", "1", "A", "*", "1", "2"],
        printStudent: function () {
            console.log(`${this.firstname} ${this.lastname} (${this.age})\n========================\nGrades: ${this.grade}`);
        }
    },
    {
        firstname: "Berta",
        lastname: "Müller",
        age: 17,
        grade: ["A", "*", "1"],
        printStudent: function () {
            console.log(`${this.firstname} ${this.lastname} (${this.age})\n========================\nGrades: ${this.grade}`);
        }
    },
    {
        firstname: "Cäsar",
        lastname: "Schmidt",
        age: 17,
        grade: ["A", "1", "*", "3", "2", "4", "5"],
        printStudent: function () {
            console.log(`${this.firstname} ${this.lastname} (${this.age})\n========================\nGrades: ${this.grade}`);
        }
    }
]

studentlist.forEach(student => student.printStudent());