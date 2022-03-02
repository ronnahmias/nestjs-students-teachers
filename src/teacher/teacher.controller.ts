import { Controller , Get, Param} from "@nestjs/common";

// for starting route with /teachers
@Controller('teachers')
export class TeacherController {
    @Get()
    getTeachers(){
        return "All Teachers";
    }

    @Get('/:teacherId')
    getTeacherById(@Param('teacherId') teacherId: string){
        return "Get teacher by id of " + teacherId;
    }
}
