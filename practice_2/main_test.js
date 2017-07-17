/**
 * Created by coco on 17-7-17.
 */
describe('practice_2',()=>{
    //import {Person,Student} from 'main.js';
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
});
