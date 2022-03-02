// return type of student json
export class FindStudentResponseDto{
    id: string;
    name: string;
    teacher: string;
}

export class StudentResponseDto{
    id: string;
    name: string;
    teacher: string;
}
// body accepted for create student
export class CreateStudentDto{
    name: string;
    teacher: string;
}
// body accepted for update student
export class UpdateStudentDto{
    name: string;
    teacher: string;
}