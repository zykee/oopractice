'use strict';
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
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
    constructor(number)
    {
        this.number = number;
    }
}
class Student extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass = klass.number;
    }
    introduce(){
        //var  str = this.basicIntroduce();
        var str = ` I am a Student. I am at Class ${this.klass}.`;
        return str;
    }
}
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
    }
    introduce(){
        //var str = this.basicIntroduce();
        if(this.klass == -1)
        {
            return ` I am a Teacher. I teach No Class.`
        }
        else
        {
            return ` I am a Teacher. I teach Class ${this.klass}.`;
        }
    }
    introduceWith(student){
        if(student.klass === this.klass)
        {
            return ` I am a Teacher. I teach ${student.name}.`;
        }
        else
        {
            return ` I am a Teacher. I don't teach ${student.name}.`
        }

    }
}