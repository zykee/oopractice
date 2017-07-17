/**
 * 写一个Person类，要有name，age属性，要有一个introduce方法，
 * introduce方法返回一个字符串形如：

 * My name is Tom. I am 21 years old.

 * 再写一个Student类继承Person类，除了name，age属性，还有要有klass属性。也有一个introduce方法，
 * introduce方法返回一个字符串形如：

 * My name is Tom. I am 21 years old. I am a Student. I am at Class 2.


 * 再写一个Worker类继承Person类，只有name，age属性。也有一个introduce方法，
 * introduce方法返回一个字符串形如：

 * My name is Tom. I am 21 years old. I am a Worker. I have a job.
 */
describe('practice_4',()=>{
    //import {Person,Student,Worker} from 'main.js';
    it("output name and age",()=>{
        var introduce = "My name is Tom. I am 21 years old.";
        var aPerson = new Person('Tom',21);
        var outIntroduce = aPerson.introduce();
        expect(outIntroduce).toEqual(introduce);
    });
    it("output name、age and class",()=>{
        var introduce = "My name is Tom. I am 21 years old. I am a Student. I am at Class 2.";
        var aStudent = new Student('Tom',21,2);
        var outIntroduce = aStudent.introduce();
        expect(outIntroduce).toEqual(introduce);
    });
    it("output name、age and worker",()=>{
        var introduce = "My name is Tom. I am 21 years old. I am a Worker. I have a job.";
        var aWorker = new Worker('Tom',21);
        var outIntroduce = aWorker.introduce();
        expect(outIntroduce).toEqual(introduce);
    });
});
