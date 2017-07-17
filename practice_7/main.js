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
class Student extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass = klass;
    }
    introduce(){
        var  str = this.basicIntroduce();
        str += ` I am a Student. I am at Class ${this.klass}.`;
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