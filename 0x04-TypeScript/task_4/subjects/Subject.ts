// task_4/subjects/Subejct.ts
/// <reference path="./Teacher.ts" />

namespace Subjects {
    export class Subject {
        teacher: Teacher;

        constructor(teacher: Teacher) {
            this.teacher = teacher;
        }

        serTeacher(teacher: Teacher) {
            this.teacher = teacher;
        }
    }
}