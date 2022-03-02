import { Controller , Get, Param, Post, Put} from "@nestjs/common";

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
   
    @Get()
    getStudentsTeacherById(@Param('teacherId') teacherId: string){
        return 'get Students of specific Teacher with id: ' + teacherId;
    }

    @Put('/:studentId')
    UpdateStudentOfTeacher(
        @Param('teacherId') teacherId: string,
        @Param('studentId') studentId: string,
    ){
        return 'Update Student id ' + studentId + ' of specific Teacher id ' + teacherId;
    }
}
