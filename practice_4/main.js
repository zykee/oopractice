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
class Worker extends Person{
    constructor(name,age){
        super(name,age);
    }
    introduce(){
        var str = super.introduce();
        str += ` I am a Worker. I have a job.`;
        return str;
    }
}
var aWorker = new Worker('Tom',21);
console.log(aWorker.introduce());