/**
 * Created by coco on 17-7-17.
 */
'use strict';
let PERSON_ID = 0;
let STUDENT_ID = 0;
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
        this.id = Person.getId();
    }
    static getId(){
        return PERSON_ID++
    }
    introduce(){
        return `My name is ${this.name}. I am ${this.age} years old.`;
    }
}
class Klass{
    constructor(number){
        this.number = number;
        this.leader;
    }
    assignLeader(student){
        if(student.klass.number != this.number)
        {
            alert('It is not one of us.');
            return false;
        }
        else
        {
            this.leader = student.name;
            return true;
        }
    }
    appendMember(student){
        student.klass.number = this.number;
    }
}
class Student extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.id = Student.getId();
        this.klass = klass;
    }
    static getId(){
        return STUDENT_ID++;
    }
    introduce(){
        var str = super.introduce();
        if(this.klass.leader == this.name)
        {
            return `${str} I am a Student. I am Leader of Class ${this.klass.number}.`;
        }
        else
        {
            return `${str} I am a Student. I am at Class ${this.klass.number}.`;
        }
    }

}
class Teacher extends Person{
    constructor(name,age,klass){
       super(name,age);
       this.klass = klass;
    }
    introduce(){
        var str = super.introduce();
        if(typeof(this.klass) == 'undefined')
        {
            return `${str} I am a Teacher. I teach No Class.`;
        }
        else
        {
            return `${str} I am a Teacher. I teach Class ${this.klass}.`;
        }
    }
}