import { Controller , Get, Param, Post, Put} from "@nestjs/common";
import { FindStudentResponseDto, StudentResponseDto } from "src/student/dto/student.dto";

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
   
    @Get()
    getStudentsTeacherById(@Param('teacherId') teacherId: string): FindStudentResponseDto[]{
        return 'get Students of specific Teacher with id: ' + teacherId;
    }

    @Put('/:studentId')
    UpdateStudentOfTeacher(
        @Param('teacherId') teacherId: string,
        @Param('studentId') studentId: string,
    ): StudentResponseDto{
        return 'Update Student id ' + studentId + ' of specific Teacher id ' + teacherId;
    }
}
