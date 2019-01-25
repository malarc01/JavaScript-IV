// CODE here for your Lambda Classes
class Person {
    constructor(props){
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
        this.gender = props.gender;
    }
    speak(){
       return`Hello my name is ${this.name}, I am from ${this.location}`;
    };
}

class Instructor extends Person{
    constructor(instructorProps){
        super(instructorProps);
        this.specialty = instructorProps.specialty;
        this.favLanguage = instructorProps.favLanguage;
        this.catchPhrase = instructorProps.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}`
    }
    grade(student,subject){
        return`${student.name} receives a perfect score on ${subject}`
    }
}

class Student extends Person {
    constructor(studentInfo){
        super(studentInfo);
        this.previousBackground = studentInfo.previousBackground;
        this.className = studentInfo.className;
        this.favSubjects = studentInfo.favSubjects;
    }
    listsSubjects(){
         return this.favSubjects.forEach(function(entries){
            console.log(entries)
        })
    }

    PRAssignments(subject){
        return `${this.name} has submitted a PR for ${subject}`
    }
    sprintChallenge(subject){
        return`${this.name} has begun Sprint Challenge on ${subject}`
    }
}
var array1 = ['a', 'b', 'c'];

array1.forEach(function(entries) {
  console.log(entries);
});


class ProjectManager extends Instructor{
    constructor(PMInfo){
        super(PMInfo);
        this.gradClassName = PMInfo.gradClassName;
        this.favInstructor = PMInfo.favInstructor;
    }
    standUp(channel){
        return`${this.name} announces to ${channel}, @channel standy times!`

    }
    debugsCode(student,subject){
        return`${this.name} debugs ${student.name}'s code on ${subject}`
    }
}



const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

const cam = new Instructor({
  name: 'Cameron',
  location: 'Utah',
  age: 30,
  gender: 'male',
  favLanguage: 'Vue',
  specialty: 'Web-dev',
  catchPhrase: `Hey Guys`
});

const DON  = new Student({
    name: 'Donald',
    location: 'New York',
    age: 101,
    gender: 'undecided',
    previousBackground:'Business',
    className: 'The Apprentice',
    favSubjects:['Business', 'Money','Politics']
});

const louis = new Student({
    name:'Louis',
    location:'California',
    age: 35,
    gender:'male',
    previousBackground:'Database administrator',
    className: 'WEBPT4',
    favSubjects:['Fatherhood','Technology']
});

const GANNON = new ProjectManager({
    name:'Gannon',
    location:'Detroit',
    age: 25,
    gender:'male',
    favLanguage: 'React',
    specialty: 'React.js',
    catchPhrase: `insert phrase`,
    gradClassName:'CS3',
    favInstructor:'Sean',
});

fred.speak();
console.log(fred.demo('Calculus'));

console.log(fred.grade(DON,'Biology'));
DON.listsSubjects();
console.log(DON.PRAssignments('Business'))
console.log(DON.sprintChallenge('Technology'))

console.log(GANNON.standUp('web-dev'))
console.log(GANNON.debugsCode(DON,'HTML'))
