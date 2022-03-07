import { Controller , Get, Param, ParseUUIDPipe, Post, Put} from "@nestjs/common";
import { FindStudentResponseDto, StudentResponseDto } from "src/student/dto/student.dto";
import { StudentService } from "src/student/student.service";

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {

    constructor(private readonly studentService: StudentService){}
   
    @Get()
    getStudentsTeacherById(@Param('teacherId', new ParseUUIDPipe()) teacherId: string): FindStudentResponseDto[]{
        return this.studentService.getStudentsTeacherById(teacherId);
    }

    @Put('/:studentId')
    updateStudentOfTeacher(
        @Param('teacherId',new ParseUUIDPipe()) teacherId: string,
        @Param('studentId',new ParseUUIDPipe()) studentId: string
    ): StudentResponseDto{
        return this.studentService.updateStudentOfTeacher(teacherId, studentId);
    }
}
