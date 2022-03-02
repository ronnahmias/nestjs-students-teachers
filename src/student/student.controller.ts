import { Controller , Get, Post, Put, Param, Body} from "@nestjs/common";
import {CreateStudentDto, FindStudentResponseDto, StudentResponseDto, UpdateStudentDto} from "./dto/student.dto"
import { StudentService } from "./student.service";

// for starting route with /students
@Controller('students')
export class StudentController{

    constructor(private readonly studentService: StudentService){}

    @Get()
    getStudents(): FindStudentResponseDto[] {
        return this.studentService.getStudents();
    }

    //'students/id'
    @Get('/:studentId')
    getStudentById(@Param('studentId') studentId: string): FindStudentResponseDto{
        return this.studentService.getStudentById(studentId);
    }

    @Post()
    createStudent(@Body() body: CreateStudentDto): StudentResponseDto{
        return this.studentService.createStudent(body);
    }

    @Put('/:studentId')
    UpdateStudent(@Param('studentId') studentId: string,
                @Body() body: UpdateStudentDto): StudentResponseDto{
        return this.studentService.updateStudent(body, studentId);
    }
}