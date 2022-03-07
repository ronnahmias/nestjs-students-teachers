import {HttpException, Injectable, NestMiddleware} from "@nestjs/common"
import { students } from "src/db";

@Injectable()
export class ValidStudentMiddleware implements NestMiddleware{
    use(req: any, res: any, next: (error?: any) => void) {
        const studentId = req.params.studentId;
        const studentExists = students.some(student =>{
            return student.id === studentId;
        });
        if(!studentExists){
            throw new HttpException("Student not found", 400);
        }
        next();
    }

}