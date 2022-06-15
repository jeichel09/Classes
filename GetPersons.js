function solve() {
    class Person {
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }
        toString() { return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`; };
    }
    let myArray = [];
    let anna = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
    myArray.push(anna);
    let softuni = new Person('SoftUni');
    myArray.push(softuni);
    let steph = new Person('Stephan', 'Johnson', 25);
    myArray.push(steph);
    let gabi = new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com');
    myArray.push(gabi);
    return myArray;
}
console.log(solve());
