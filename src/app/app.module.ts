import { Module } from '@nestjs/common';
import { StudentController } from "../student/student.controller"
import { TeacherController } from "../teacher/teacher.controller"
import { StudentTeacherController } from "../teacher/student.constroller"
import { StudentService } from 'src/student/student.service';
import { TeacherService } from 'src/teacher/teacher.service';

// main app starting

@Module({
  imports: [],
  controllers: [StudentController, TeacherController,StudentTeacherController],
  providers: [StudentService, TeacherService]
})
export class AppModule {}
