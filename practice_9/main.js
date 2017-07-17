/**
 * Created by coco on 17-7-17.
 */
'use strict';
let PERSON_ID = 0;
let STUDENT_ID = 0;
let TEACHER_ID = 0;

class Person{
    //static id = 0
    constructor(name,age){
        this.name = name;
        this.age = age;
        this.id = Person.getId();

    }

    static getId(){
        return PERSON_ID++;
    }
    introduce(){
        var str = this.basicIntroduce();
        return str;
    }
    basicIntroduce(){
        var str = `My name is ${this.name}. I am ${this.age} years old.`;
        return str;
    }
}
class Klass{
    constructor(number){
        this.leader;
        this.number = number;
    }
    //this.leader = "";
    assignLeader(student){
        this.leader = student.name;
    }
}
class Student extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass = klass;
        this.id = Student.getId();
    }
    static getId()
    {
        return STUDENT_ID++;
    }
    introduce(){
        if(this.klass.leader == this.name)
        {
            return this.basicIntroduce()+` I am a Student. I am Leader of Class ${this.klass.number}.`
        }
        else
        {
            return this.basicIntroduce()+` I am a Student. I am at Class ${this.klass.number}.`
        }
}}
class Teacher extends Person{
    constructor(name,age,klass){
        super(name,age);
        if(typeof(klass) == 'undefined')
        {
            this.klass = -1
        }
        else
        {
            this.klass = klass;
        }
        this.id = Teacher.getId();
    }
    static getId(){
        return TEACHER_ID ++;
    }
    introduce(){
        var str = this.basicIntroduce();
        if(this.klass == -1)
        {
            str += ` I am a Teacher. I teach No Class.`
        }
        else
        {
            str += ` I am a Teacher. I teach Class ${this.klass}.`;
        }
        return str;
    }
}
