/**
 * Created by coco on 17-7-17.
 */
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    introduce(){
        var str = `My name is ${this.name}. I am ${this.age} years old.`;
        //console.log(str);
        return str;
    }
}
class Student extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass = klass;
    }
    introduce(){
        var  str = super.introduce();
        str += ` I am a Student. I am at Class ${this.klass}.`;
        return str;
    }
}
const person = new Person('Tom',21);
console.log(person.introduce());