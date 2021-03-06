/**
 * Created by coco on 17-7-17.
 */
describe("practice_10",()=>{
    it("Person",()=>{
        var introduce = "My name is Tom. I am 21 years old.";
        var aPerson = new Person('Tom',21);
        var outIntroduce = aPerson.introduce();
        expect(outIntroduce).toEqual(introduce);
    });
    it("Student",()=>{
        var introduce = "My name is Tom. I am 21 years old. I am a Student. I am at Class 2.";
        var klass = new Klass(2);
        var aStudent = new Student('Tom',21,klass);
        var outIntroduce = aStudent.introduce();
        expect(outIntroduce).toEqual(introduce);
    });
    it("Student",()=>{
        var introduce = "My name is Tom. I am 21 years old. I am a Student. I am Leader of Class 2.";
        var klass = new Klass(2);
        var aStudent = new Student('Tom',21,klass);
        aStudent.klass.assignLeader(aStudent);
        var outIntroduce = aStudent.introduce();
        expect(outIntroduce).toEqual(introduce);
    });
    it("Student",()=>{
        var introduce = "My name is Tom. I am 21 years old. I am a Student. I am at Class 2.";
        var klass = new Klass(2);
        var klasss = new Klass(3);
        var aStudent = new Student('Tom',21,klass);
        klasss.assignLeader(aStudent);
        var outIntroduce = aStudent.introduce();
        expect(outIntroduce).toEqual(introduce);
    });
    it("Teacher",()=>{
        var introduce = "My name is Tom. I am 21 years old. I am a Teacher. I teach Class 2.";
        var aTeacher = new Teacher('Tom',21,2);
        var outIntroduce = aTeacher.introduce();
        expect(outIntroduce).toEqual(introduce);
    });
    it("Teacher",()=>{
        var introduce = "My name is Tom. I am 21 years old. I am a Teacher. I teach No Class.";
        var aTeacher = new Teacher('Tom',21);
        var outIntroduce = aTeacher.introduce();
        expect(outIntroduce).toEqual(introduce);
    });
});