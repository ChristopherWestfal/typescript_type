type Student = {
    firstname:string,
    lastname:string,
    age:number,
    grade:string[],
    printStudent: () => void
};

type StudentAdvanced = {
    firstname:string,
    lastname:string,
    age:number,
    grade:Grade[],
    printStudent: () => void
};

type Grade = {
    name:string,
    grades:string[]
    printGrades: () => void
};

// Task + 1. Bonus

const s1:Student = {
    firstname: "Max",
    lastname: "Mustermann",
    age: 15,
    grade: ["A","3","F","1","2","*","3","3"],
    printStudent: function(){
        let temp:string = highlightFunction(this.firstname, this.lastname, this.age);

        console.log(`${this.firstname} ${this.lastname} (${this.age})\n${temp}\nGrades: ${this.grade}`);
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
            let temp:string = highlightFunction(this.firstname, this.lastname, this.age);

            console.log(`${this.firstname} ${this.lastname} (${this.age})\n${temp}\nGrades: ${this.grade}`);
        }
    },
    {
        firstname: "Berta",
        lastname: "Müller",
        age: 17,
        grade: ["A", "*", "1"],
        printStudent: function () {
            let temp:string = highlightFunction(this.firstname, this.lastname, this.age);

            console.log(`${this.firstname} ${this.lastname} (${this.age})\n${temp}\nGrades: ${this.grade}`);
        }
    },
    {
        firstname: "Cäsar",
        lastname: "Schmidt",
        age: 17,
        grade: ["A", "1", "*", "3", "2", "4", "5"],
        printStudent: function () {
            let temp:string = highlightFunction(this.firstname, this.lastname, this.age);

            console.log(`${this.firstname} ${this.lastname} (${this.age})\n${temp}\nGrades: ${this.grade}`);
        }
    }
]

studentlist.forEach(student => student.printStudent());

function highlightFunction(firstname:string, lastname:string, age:number) : string {
    let sum:number = firstname.length + lastname.length + age.toString().length;
    let tempString:string = "";

    for(let i = 0; i < sum; i++){
        tempString = tempString + "=";
    }
    return tempString;
}

// Bonus 2

const protoStudent: StudentAdvanced = {
    firstname: "Florian",
    lastname: "Weber",
    age: 14,
    grade: [
        {
            name: "Sport",
            grades: ["A", "1", "*"],
            printGrades: function () {
                console.log(`${this.name}: ${this.grades.join(", ")}`)
            }
        },
        {
            name: "Kunst",
            grades: ["3", "2", "4", "5"],
            printGrades: function () {
                console.log(`${this.name}: ${this.grades.join(", ")}`)
            }
        },
        {
            name: "Mathe",
            grades: ["1", "2", "A"],
            printGrades: function () {
                console.log(`${this.name}: ${this.grades.join(", ")}`)
            }
        }
    ],

    printStudent: function () {
        let temp: string = highlightFunction(this.firstname, this.lastname, this.age);

        console.log(`${this.firstname} ${this.lastname} (${this.age})\n${temp}\nGrades:\n`);
        this.grade.forEach(grade => {
            grade.printGrades();
        });
    }
};

const advancedStudentlist:StudentAdvanced[] = [
    {
        firstname: "Florian",
        lastname: "Weber",
        age: 14,
        grade: [
            {
                name: "Sport",
                grades: ["A", "1", "*"],
                printGrades: function () {
                    console.log(`${this.name}: ${this.grades.join(", ")}`)
                }
            },
            {
                name: "Kunst",
                grades: ["3", "2", "4", "5"],
                printGrades: function () {
                    console.log(`${this.name}: ${this.grades.join(", ")}`)
                }
            },
            {
                name: "Mathe",
                grades: ["1", "2", "A"],
                printGrades: function () {
                    console.log(`${this.name}: ${this.grades.join(", ")}`)
                }
            }
        ],

        printStudent: function () {
            let temp: string = highlightFunction(this.firstname, this.lastname, this.age);

            console.log(`${this.firstname} ${this.lastname} (${this.age})\n${temp}\nGrades:\n`);
            this.grade.forEach(grade => {
                grade.printGrades();
            });
        }
    },

    {
        firstname: "Lischen",
        lastname: "Müller",
        age: 17,
        grade: [
            {
                name: "Sport",
                grades: ["3", "4", "*"],
                printGrades: function () {
                    console.log(`${this.name}: ${this.grades.join(", ")}`)
                }
            },
            {
                name: "Kunst",
                grades: ["1", "2", "1", "1"],
                printGrades: function () {
                    console.log(`${this.name}: ${this.grades.join(", ")}`)
                }
            },
            {
                name: "Mathe",
                grades: ["3", "2", "A"],
                printGrades: function () {
                    console.log(`${this.name}: ${this.grades.join(", ")}`)
                }
            }
        ],

        printStudent: function () {
            let temp: string = highlightFunction(this.firstname, this.lastname, this.age);

            console.log(`${this.firstname} ${this.lastname} (${this.age})\n${temp}\nGrades:\n`);
            this.grade.forEach(grade => {
                grade.printGrades();
            });
        }
    },

    {
        firstname: "Kai",
        lastname: "Maier",
        age: 16,
        grade: [
            {
                name: "Sport",
                grades: ["A", "1", "1"],
                printGrades: function () {
                    console.log(`${this.name}: ${this.grades.join(", ")}`)
                }
            },
            {
                name: "Kunst",
                grades: ["3", "2", "2", "3"],
                printGrades: function () {
                    console.log(`${this.name}: ${this.grades.join(", ")}`)
                }
            },
            {
                name: "Mathe",
                grades: ["1", "A", "A"],
                printGrades: function () {
                    console.log(`${this.name}: ${this.grades.join(", ")}`)
                }
            }
        ],

        printStudent: function () {
            let temp: string = highlightFunction(this.firstname, this.lastname, this.age);

            console.log(`${this.firstname} ${this.lastname} (${this.age})\n${temp}\nGrades:\n`);
            this.grade.forEach(grade => {
                grade.printGrades();
            });
        }
    }
];

advancedStudentlist.forEach(student => student.printStudent());
