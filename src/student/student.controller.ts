import { Controller , Get, Post, Put, Param, Body} from "@nestjs/common";
import {CreateStudentDto, FindStudentResponseDto, StudentResponseDto, UpdateStudentDto} from "./dto/student.dto"

// for starting route with /students
@Controller('students')
export class StudentController{
    @Get()
    getStudents(): FindStudentResponseDto[] {
        return "All students";
    }

    //'students/id'
    @Get('/:studentId')
    getStudentById(@Param('studentId') studentId: string): FindStudentResponseDto{
        return "Get student by id of " + studentId;
    }

    @Post()
    createStudent(@Body() body: CreateStudentDto): StudentResponseDto{
        console.log(body);
        
        return 'Create Student with folowing data ' + JSON.stringify(body);
    }

    @Put('/:studentId')
    UpdateStudent(@Param('studentId') studentId: string,
                @Body() body: UpdateStudentDto): StudentResponseDto{
        return 'Update Student with id: ' + studentId + 'with details' + body;
    }
}