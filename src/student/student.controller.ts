import { Controller , Get, Post, Put, Param, Body} from "@nestjs/common";

// for starting route with /students
@Controller('students')
export class StudentController{
    @Get()
    getStudents(){
        return "All students";
    }

    //'students/id'
    @Get('/:studentId')
    getStudentById(@Param('studentId') studentId: string){
        return "Get student by id of " + studentId;
    }

    @Post()
    createStudent(@Body() body){
        console.log(body);
        
        return 'Create Student with folowing data ' + JSON.stringify(body);
    }

    @Put('/:studentId')
    UpdateStudent(@Param('studentId') studentId: string,
                @Body() body){
        return 'Update Student with id: ' + studentId + 'with details' + body;
    }
}