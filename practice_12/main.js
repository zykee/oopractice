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
        this.teacher;
    }
    assignLeader(student){
        if(student.klass.number != this.number)
        {
            alert('It is not one of us.');
         //   return false;
        }
        else
        {
            this.leader = student.name;
            if(typeof(this.teacher) != 'undefined')
            {
                var str = this.teacher.addLeader(student);
                return str;
            }
            else
            {
                return true;
            }
        }
    }
    appendMember(student){
        student.klass.number = this.number;
        var str = this.teacher.addMember(student);
        return str;
    }
    isIn(student){
        if(student.klass.number ==this.number)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}
class Student extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.id= Student.getId();
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
       if(typeof(this.klass) != 'undefined')
       {
           for(var i = 0;i<this.klass.length;i++)
           {
               this.klass[i].teacher = this;
           }
       }
    }
    introduce(){
        var str = super.introduce();
        var klassStr =` I am a Teacher. I teach Class`;
        if(typeof(this.klass) == 'undefined')
        {
            return `${str} I am a Teacher. I teach No Class.`;
        }
        else
        {
            for(var i = 0; i<this.klass.length-1;i++)
            {
                klassStr += ` ${this.klass[i].number},`
            }
            return `${str}${klassStr} ${this.klass[this.klass.length-1].number}.`;
        }
    }
    addLeader(student){
        return `I am ${this.name}. I know ${student.name} become Leader of Class ${student.klass.number}.`;
    }
    addMember(student){
        return `I am ${this.name}. I know ${student.name} has joined Class ${student.klass.number}.`
    }
    isTeaching(student){
        for(var i = 0;i<this.klass.length;i++)
        {
            if(this.klass[i].isIn(student))
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}